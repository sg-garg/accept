/**
* @class Ext.ux.tree.FilteringView
* @extends Ext.tree.View
* Enhances the basic tree.View with filtering capabilities. Any component that implements the functions
* 'filterFn' and 'reset' can be used with this view. However, it is recommended to use the 
* enhanced form fields also defined in this extension.
*/
Ext.define('Ext.ux.tree.FilteringView', {
    extend: 'Ext.tree.View',
    alias: 'widget.treefilteringview', /** configs **/
    useDataIds: false, //Use node.data.id when hashing to use your own unique ids.
    maxExpandDepth: 2, //Max depth to perform expansion of visible nodes.
    hideEmptyFolders: false, //pretty obvious
    /** local vars **/
    filterRegister: new Ext.util.HashMap(),
    filterNodeHash: [],
    filtered: false,
    doNotFilter: false,
    expand: function (node) {
        this.callParent(arguments);
        if (this.isFiltered()) { this.applyFilters(node, 0); }
    },
    refresh: function () {
        this.callParent(arguments);
        if (this.isFiltered()) { this.applyFilters(null, 0); }
    },
    registerFilter: function (filterCmp) {
        if (!this.filterRegister.containsKey(filterCmp.id)) {
            this.filterRegister.add(filterCmp.id, filterCmp);
        }
    },
    /**
    * Adds nodes to the filterNodeHash indicating whether they should be shown
    * or hidden. Nodes are added/removed based on the return value of the supplied
    * filterCmp.filterFn function (true = show, false = hide).
    */
    applyFilterFn: function (filterCmp) {
        var me = this;
        var root = this.getTreeStore().getRootNode();
        me.registerFilter(filterCmp);
        me.filtered = true;
        //collapse all nodes.  adapted from the collapseAll code in the tree panel.
        if (root) {
            me.beginBulkUpdate();
            if (me.rootVisible) {
                root.collapse(true);
            } else {
                root.collapseChildren(true);
            }
            me.endBulkUpdate();
        }
        if (typeof filterCmp.beforeFilter === 'function') {
            filterCmp.beforeFilter();
        }
        root.cascadeBy(function (node) {
            if (node.isRoot() && !me.rootVisible) { return; } //skip invisible root
            var nid = (me.useDataIds === true) ? node.data.id : node.id;
            if (me.filterNodeHash[nid] == undefined) {
                me.filterNodeHash[nid] = [];
            }
            if (filterCmp.filterFn.call(filterCmp, node)) {
                me.filterNodeHash[nid][filterCmp.id] = true;
            } else {
                me.filterNodeHash[nid][filterCmp.id] = false;
            }
        }, me);
        me.beginBulkUpdate();
        me.applyFilters(root, 0);
        me.endBulkUpdate();
        if (typeof filterCmp.afterFilter === 'function') {
            filterCmp.afterFilter();
        }
    },
    /**
    * Runs over nodes starting from 'node' recursively expanding and hidding nodes
    * that are marked hidden by at least one filter in the filterNodeHash.
    * Nodes that have no visible children are collapsed.
    *
    * @params
    * node The node at which to begin filtering.
    * myDepth The depth of the current recursive call. Used to stop expansion
    *  of nodes deeper than the value of maxExpandDepth.
    **/
    applyFilters: function (node) {
        if (this.doNotFilter) { return; }
        var me = this;
        var hasVisibleChild = false;
        var node = (node === null || node === undefined) ? this.getTreeStore().getRootNode() : node;
        var myDepth = node.getDepth();
        /** 
        * Don't filter when we expand the node internally or we 
        * will have several instances of filtering going on at the same time!
        **/
        if (!node.rendered) {
            me.doNotFilter = true;
            node.expand(); //necessary to be sure Ext.fly will have access to a rendered element
            me.doNotFilter = false;
        }
        node.eachChild(function (childNode) {
            var el = Ext.fly(me.getNodeByRecord(childNode));
            el.setVisibilityMode(Ext.Element.DISPLAY);
            if (me.isNodeFiltered(childNode)) {
                childNode.collapse(true);
                el.setVisible(false);
            } else {
                hasVisibleChild = true;
                el.setVisible(true);
                if ((myDepth + 1) < me.maxExpandDepth) {
                    me.applyFilters(childNode);
                }
            }
        });
        if (!hasVisibleChild) {
            node.collapse();
            if (me.hideEmptyFolders) {
                Ext.fly(me.getNodeByRecord(node)).setVisible(false);
            }
        }
    },
    /**
    * Clears the specified filter.
    * @params:
    * filterCmp The component registered as a filter.
    * apply  Set false if you don't want the changes applied immediately.
    */
    clearFilter: function (filterCmp, apply) {
        if (this.isFiltered()) {
            if (typeof filterCmp.beforeClearFilter === 'function') {
                filterCmp.beforeClearFilter();
            }
            for (n in this.filterNodeHash) {
                if (this.filterNodeHash[n][filterCmp.id] === false) { this.filterNodeHash[n][filterCmp.id] = true; }
            }
            if (apply !== false) {
                this.applyFilters(null, 0);
            }
            if (typeof filterCmp.afterClearFilter === 'function') {
                filterCmp.afterClearFilter();
            }
        }
    },
    /**
    * Clears all filters.
    * @params:
    * apply  Set false if you don't want the changes applied immediately.
    */
    clearAllFilters: function (apply) {
        if (this.isFiltered()) {
            this.filterNodeHash = [];
            this.filtered = false;
            if (apply !== false) {
                //this just 'refreshes' the tree view back to an unfiltered state.
                //this is orders of magnitude faster than re-applying empty filters.
                if (this.rendered) {
                    this.refreshSize();
                    this.updateIndexes();
                }
            }
        }
    },
    /**
    * Returns true if the tree is filtered
    */
    isFiltered: function () {
        return this.filtered;
    },
    /**
    * Returns true if the specified node is filtered by any of the managed filters
    */
    isNodeFiltered: function (node) {
        var me = this;
        var nid = (me.useDataIds === true) ? node.data.id : node.id;
        for (var f in me.filterNodeHash[nid]) {
            if (me.filterNodeHash[nid][f] === false) {
                return true;
            }
        }
        return false;
    }
});

/**
* @class Ext.ux.tree.TreeTextFilter
* @extends Ext.form.Trigger
* Provides a basic text entry field with a trigger for clearing the field/filter and another
* to apply the field value and filter.
**/
Ext.define('Ext.ux.tree.TreeTextFilter', {
    extend: 'Ext.form.Trigger',
    alias: 'widget.treetextfilter',
    value: '',
    tree: null,
    trigger1Cls: 'x-form-clear-trigger',
    trigger2Cls: 'x-form-select-trigger',
    initComponent: function () {
        this.callParent(arguments);
        try {
            if (typeof this.tree === 'string') { this.tree = Ext.getCmp(this.tree); }
        } catch (e) { console.log('Invalid tree provided to this treetextfilter'); }

        //Apply filter when user types the 'Enter' key
        this.on('specialkey', function (f, e) {
            if (e.getKey() == e.ENTER) {
                this.onTrigger2Click();
            }
        }, this);
    },
    onTrigger1Click: function () {
        this.setValue('');
        this.tree.getView().clearFilter(this);
    },
    onTrigger2Click: function () {
        var me = this;
        this.value = this.getRawValue().trim();
        me.tree.getView().applyFilterFn(me);
    },
    /* Override this function to implement custom filtering */
    filterFn: function (node) { return true; }
});
/**
* @class Ext.ux.tree.TreeComboFilter
* @extends Ext.form.ComboBox
* Provides a drop-down combobox selector that will apply the filter when
* any item in the drop-down is selected.
**/
Ext.define('Ext.ux.tree.TreeComboFilter', {
    extend: 'Ext.form.ComboBox',
    alias: 'widget.treecombofilter',
    tree: null,
    editable: false,
    triggerAction: 'all',
    forceSelection: true,
    queryMode: 'local',
    remove: true,
    initComponent: function () {
        this.callParent(arguments);
        try {
            if (typeof this.tree === 'string') { this.tree = Ext.getCmp(this.tree); }
        } catch (e) { console.log('Invalid tree provided to this treecombofilter:' + this.id); }
    },
    listeners: { select: { fn: function (combo, records, eOpts) {
        var me = this;
        this.tree.getView().applyFilterFn(this);
    } 
    }
    },
    /* Override this function to implement custom filtering */
    filterFn: function (node) { return true; }
});