//Ext.override(Ext.data.TreeStore, {
Ext.define('filteringTreeStore', {
    xtype: 'filteringTreeStore',
    extend: 'Ext.data.TreeStore',
    hasFilter: false,

    filter: function (filters, value) {

        if (Ext.isString(filters)) {
            filters = {
                property: filters,
                value: value
            };
        }

        var me = this,
            decoded = me.decodeFilters(filters),
            i = 0,
            length = decoded.length,
            out = [];

        for (; i < length; i++) {
            me.filters.replace(decoded[i]);
        }

        //store all nodes to be removed in out array
        Ext.Array.each(me.filters.items, function (filter) {
            Ext.Object.each(me.tree.nodeHash, function (key, node) {
                if (filter.filterFn) {
                    if (!filter.filterFn(node)) {
                        out.push(node);
                    }
                } else {
                    if (node.data[filter.property] != filter.value) {
                        out.push(node);
                    };
                }
            });
        });

        //remove all nodes from out
        for (i = 0; i < out.length; i++) {
            out[i].remove();
        }

        me.hasFilter = true;

        console.log(me);
    },

    clearFilter: function (callback) {
        var me = this;
        
        me.filters.clear();
        me.hasFilter = false;
        me.load(callback);        
    },

    isFiltered: function () {
        return this.hasFilter;
    },

    filter2: function (filters, value) {

        if (Ext.isString(filters)) {
            filters = {
                property: filters,
                value: value
            };
        }

        var me = this,
            decoded = me.decodeFilters(filters),
            i = 0,
            length = decoded.length,
            out = [];

        for (; i < length; i++) {
            me.filters.replace(decoded[i]);
        }

        Ext.Array.each(me.filters.items, function (filter) {
            remove2(me.tree, me.tree.nodeHash.root, me.tree.nodeHash.root, 0, filter.filterFn);
        });

        me.hasFilter = true;

        console.log(me);

        /* recursive function that removes and reparent children 
         * Ex. Consider a tree
         *                1
         *          2          3
         *       4     5     6    7
         *     8 9 10
         *
         *  After deleting node 4, tree should look as follow   
         *                1
         *          2           3
         *       8 9 10 5    6    7         
         *
        */
        function remove2(tree, node, parent, parentloc, filterFn) {
            
            var i, out;
            if (node) {
                if (node.childNodes && node.childNodes.length > 0) {
                    // remove all applicable children nodes 
                    for (i = 0; i < node.childNodes.length; i++) {
                        remove2(tree, node.childNodes[i], node, i, filterFn);
                    }
                }

                // remove current node if applicable
                if (!filterFn(node)) {
                    // append node's children to node's parent
                    out = [];
                    for (i = 0; i < node.childNodes.length; i++) {
                        out.push(node.childNodes[i]);
                    }

                    for (i = out.length - 1; i >= 0; i--) {
                        parent.insertChild(parentloc, out[i]);
                    }

                    //remove current node
                    node.remove();
                }
            }
        }
    }
});