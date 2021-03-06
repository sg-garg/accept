﻿var folderTreeSplitButtonMenu = Ext.create('Ext.menu.Menu', {
    xtype: 'menu',
    plain: true,
    items: [{
        text: 'Select Folder to View',
        handler: function () {
            console.log('Select Folder to View: Clicked');
        }
    }, {
        text: 'View Selected Folder',
        handler: function () {
            console.log('View Selected Folder: Clicked');
        }
    }, {
        text: 'View All Folders',
        handler: function () {
            console.log('View All Folders: Clicked');
        }
    }]
});
var folderTreeSplitButton = {
    cls:'folderTreeSplitButtonCSS',
    xtype: 'button',
    height:35,
    tooltip:'Folder',
    handler: function () {
        console.log('Folder Split  Handler');
    },
    menu: folderTreeSplitButtonMenu,
    listeners:{
        click: function () {
            this.showMenu();
        },
        mouseover: function () {
            this.showMenu();
        }
    }
};

var displayTreeSplitButtonMenu = Ext.create('Ext.menu.Menu', {
    xtype: 'menu',
    plain: true,
    items: [
        {
            text: 'Hierarchy',
            icon: '\/images\/hierarchy-icon.png',
            handler: function () {
                treeGridPanle.store.clearFilter();
            }
        },
        {
            text: 'Hierarchy, no empty folders',
            icon: '\/images\/hierarchy-no-empty-icon.png',
            handler: function () {
                treeGridPanle.store.filter(new Ext.util.Filter({
                    filterFn: function (item) {
                        if (item && item.data && item.data.nodeType == "folder" && item.childNodes && item.childNodes.length === 0) {
                            return false;
                        } else {
                            return true;
                        }
                    }
                }), '');
            }
        },
        {
            text: 'Flat, no folders',
            icon: '\/images\/flat-icon.png',
            handler: function () {
                treeGridPanle.store.filter2(new Ext.util.Filter({
                    filterFn: function (item) {
                        if (item && item.data && item.data.nodeType !== 'requirements') {
                            return false;
                        } else {
                            return true;
                        }
                    }
                }), '');
            }
        },
        {
            text: 'Folders Only',
            icon: '\/images\/folder-icon.png',
            handler: function () {
                treeGridPanle.store.filter(new Ext.util.Filter({
                    filterFn: function (item) {
                        if (item && item.data && item.data.nodeType === 'requirements') {
                            return false;
                        } else {
                            return true;
                        }
                    }
                }), '');
            }
        }
    ]
});
var displayTreeSplitButton = {
    //icon: '\/images\/hierarchy-icon.png',
    xtype: 'button',
    cls:'displayTreeSplitButtonCSS',
    height:35,
    tooltip:'Display',
    handler: function () {
        console.log('Diplay Split  Handler');
    },
    menu: displayTreeSplitButtonMenu,
    listeners:{
        click: function () {
            this.showMenu();
        },
        mouseover: function () {
            this.showMenu();
        }
    }
};

var filterTreeSplitButtonMenu = Ext.create('Ext.menu.Menu', {
    xtype: 'menu',
    plain: true,
    items: [
        {
            text: 'Item 1',
            handler: function () {
                console.log('Item 1: Clicked');
            }
        },
        {
            text: 'Item 2',
            handler: function () {
                console.log('Item 2: Clicked');
            }
        },
        {
            text: 'Item 3',
            handler: function () {
                console.log('Item 3: Clicked');
            }
        }, 
        {
            text: 'Item 4',
            handler: function () {
                console.log('Item 4: Clicked');
            }
        }
    ]
});

var filterTreeSplitButton =  {
    xtype: 'button',
    cls:'filterTreeSplitButtonCSS',
    height:35,
    tooltip:'Filter',
    handler: function () {
        console.log('Filter Split  Handler');
    },
    menu: filterTreeSplitButtonMenu,
    listeners:{
        click: function () {
            this.showMenu();
        },
        mouseover: function () {
            this.showMenu();
        }
    }
};

var collapseTreeButton = {
    xtype: 'button',
    cls:'collapseTreeButtonCSS',
    height:35,
    tooltip:'Collapse',
    handler: function () {
        Ext.getCmp('leftPanelTree').collapse();
    }
};

var treeFilterToolbar = {
    height: 35,
    layout: {
       type: 'hbox'
    },
    items: [
            {
                flex:1,
                dockedItems:[folderTreeSplitButton]
            },
            {
                flex: 1,
                dockedItems: [displayTreeSplitButton]
            },
            {
                flex: 1,
                dockedItems: [filterTreeSplitButton]
            },
            {
                flex: 1,
                dockedItems: [collapseTreeButton]
            }
        ]
};

            Ext.define('TreeControlModel', {
                extend: 'Ext.data.Model',
                fields: [
                    { name: 'name', type: 'string' },
                    { name: 'completed', type: 'string' },
                    { name: 'nodeType', type: 'string' },
                    { name: 'internalID', type: 'string' },
                    { name: 'availableProperties', type: 'string' },
                    { name: 'assignedTo', type: 'string' },
                    { name: 'basedOnIdea', type: 'string' },
                    { name: 'briefDescription', type: 'string' },
                    { name: 'creationDate', type: 'string' },
                    { name: 'estimationConfidence', type: 'string' },
                    { name: 'lastUpdatedDate', type: 'string' },
                    { name: 'lifecycle', type: 'string' },
                    { name: 'planPriority', type: 'string' },
                    { name: 'priority', type: 'string' },
                    { name: 'release', type: 'string' },
                    { name: 'remainingWork', type: 'string' },
                    { name: 'resourceCost', type: 'string' },
                    { name: 'resourceDemand', type: 'string' },
                    { name: 'rollup', type: 'string' },
                    { name: 'sn123', type: 'string' },
                    { name: 'team', type: 'string' }
                ]
            });

            var treeControlStore = Ext.create('filteringTreeStore', {
                model: 'TreeControlModel',
                proxy: {
                    type: 'ajax',
                    url: '/Data/treegrid.json'
                },
                autoLoad: true,
                folderSort: true,
                listeners: {
                    load: function (me, records, successful, operation, eOpts) {
                        decoratedNode(records);
                    }
                }
            });

            function decoratedNode(node) {
                var ch = node.childNodes;
                if (ch.length > 0) {
                    Ext.Array.each(ch, function (c) {
                        decoratedNode(c);
                    });
                } else {
                    node.data.leaf = true;
                }
                if (node.data.nodeType === 'folder') {
                    node.data.iconCls = 'treeNode_Folder';
                }else if (node.data.nodeType === 'requirements') {
                    node.data.iconCls = 'treeNode_Requirements';
                } else if (node.data.nodeType === 'functionalArea') {
                    node.data.iconCls = 'treeNode_FunctionalArea';
                }
            }
            var treeGridPanle = new Ext.tree.TreePanel({
                id: 'myTreeControlPanel',
                //title: 'Core Team Projects',
                cls: 'customTreeGridCls',
                flex: 1,
                //collapsible: true,
                useArrows: true,
                rootVisible: false,
                store: treeControlStore,
                multiSelect: true,
                autoScroll: true,
                //singleExpand: true,
                //the 'columns' property is now 'headers'
                columns: [{
                    xtype: 'treecolumn', //this is so we know which column will show the tree
                    text: 'Name',
                    dataIndex: 'name',
                    flex: 2,
                    minWidth: 150,
                    menuDisabled: true,
                    sortable: true
                }, {
                    text: '% Completed',
                    flex: 1,
                    minWidth: 75,
                    dataIndex: 'completed',
                    menuDisabled: true,
                    sortable: true
                },
                {
                    //  xtype: 'templatecolumn',
                    text: 'Assigned To',
                    flex: 1,
                    minWidth: 75,
                    dataIndex: 'assignedTo',
                    menuDisabled: true,
                    sortable: true
                },
                {
                    //  xtype: 'templatecolumn',
                    text: 'Node Type',
                    flex: 1,
                    minWidth: 75,
                    dataIndex: 'nodeType',
                    menuDisabled: true,
                    sortable: true
                },
                {
                    width: 25,
                    //xtype:'container',
                    style: 'background: url(../images/sprite.png) no-repeat -873px 4px; margin-left:8px; margin-top:4px;',
                    menuDisabled: true,
                    listeners: {
                        headerclick: function (header, column, e, t, eOpts) {
                            alert('Open Item Selector in popup model window');
                        }
                    }
                }
            ],
                listeners: {
                    itemcontextmenu: function (view, record, item, index, event) {
                        currentSelectedNode = record;
                        menu1.showAt(event.getXY());
                        hideShowMenuForSelectedNode(record);
                        event.stopEvent();
                    },
                    itemclick: function (view, node, item, index, e, eOpts) {
                        Ext.getCmp('tabsHeaderInfoDisplayID').setText(node.data.nodeType + ' - ' + node.data.name);
                        Ext.getCmp('breadCrumTextID').setText('<a class="breadCrumTextLinkCSS" href="#">Home</a> > ' + Ext.getCmp('tabsHeaderInfoDisplayID').text);
                    }
                }
            });

            function hideShowMenuForSelectedNode(record) {

                Ext.getCmp('tcm_ViewSelectedFolder').setDisabled(false);
                Ext.getCmp('tcm_ViewSelectedFolder').setIconCls('tcm_ViewSelectedFolder');

                Ext.getCmp('tcm_Sibling_Requirement').setVisible(true);
                Ext.getCmp('tcm_Sibling_Folder').setVisible(true);
                Ext.getCmp('tcm_Sibling_FunctionalArea').setVisible(true);
                Ext.getCmp('tcm_Child_Folder').setVisible(true);
                Ext.getCmp('tcm_Child_FunctionalArea').setVisible(true);
                Ext.getCmp('tcm_Child_Requirement').setVisible(true);

                if (record.data.nodeType === 'requirements') {
                    Ext.getCmp('tcm_Sibling_Folder').setVisible(false);
                    Ext.getCmp('tcm_Child_Folder').setVisible(false);
                    Ext.getCmp('tcm_Child_FunctionalArea').setVisible(false);
                    Ext.getCmp('tcm_Child_Requirement').setVisible(false);
                    Ext.getCmp('tcm_ViewSelectedFolder').setDisabled(true);
                    Ext.getCmp('tcm_ViewSelectedFolder').setIconCls('tcm_ViewSelectedFolder-Dis');
                } else if (record.data.nodeType === 'folder') {
                    Ext.getCmp('tcm_Sibling_Requirement').setVisible(false);
                    Ext.getCmp('tcm_Child_Requirement').setVisible(false);
                } else if (record.data.nodeType === 'functionalArea') {
                    Ext.getCmp('tcm_Sibling_Requirement').setVisible(false);
                    Ext.getCmp('tcm_Child_Folder').setVisible(false);
                    Ext.getCmp('tcm_ViewSelectedFolder').setDisabled(true);
                    Ext.getCmp('tcm_ViewSelectedFolder').setIconCls('tcm_ViewSelectedFolder-Dis');
                }
            }
            function hideTreeColumn() {
                // alert(record.data.task)
                //treePanel1CurrentNode = record;
                //                if (! Ext.getCmp('myTreePanel').columns[1].hidden) {
                //                    Ext.getCmp('myTreePanel').columns[1].setVisible(false);
                //                    Ext.getCmp('myTreePanel').setWidth(Ext.getCmp('myTreePanel').getWidth() - 100);
                //                }
                // Ext.getCmp('myTreePanel').columns[1].hide = true;
                //                treePanel1.columns.Add(durationColumn);
            }
           
            var currentSelectedNode = null;
            function createChildNode(item) {
                if (item.text === 'Folder') {
                    currentSelectedNode.appendChild({
                        name: 'New Folder Node',
                        completed: 3,
                        iconCls: 'treeNode_Folder',
                        assignedTo: currentSelectedNode.data.name + '_Pihu',
                        nodeType: 'folder',
                        leaf: true
                    });
                } else if (item.text === 'Requirement (C)') {
                    currentSelectedNode.appendChild({
                        name: 'New Requirement (C)',
                        completed: 3,
                        iconCls: 'treeNode_Requirements',
                        assignedTo: currentSelectedNode.data.name + '_Pihu',
                        nodeType: 'requirements',
                        leaf: true
                    });
                } else if (item.text === 'Functional Area') {
                    currentSelectedNode.appendChild({
                        name: 'Added Functional Area',
                        completed: 3,
                        iconCls: 'treeNode_FunctionalArea',
                        assignedTo: currentSelectedNode.data.name + '_Pihu',
                        nodeType: 'functionalArea',
                        leaf: true
                    });
                }
                currentSelectedNode.data.leaf = false;
                currentSelectedNode.expand();
            }

            function createSiblingNode(item) {
                if (item.text === 'Folder') {
                    currentSelectedNode.parentNode.appendChild({
                        name: 'New Folder Node',
                        completed: 3,
                        iconCls: 'treeNode_Folder',
                        assignedTo: currentSelectedNode.data.name + '_Pihu',
                        nodeType: 'folder',
                        leaf: true
                    });
                } else if (item.text === 'Requirement (S)') {
                    currentSelectedNode.parentNode.appendChild({
                        name: 'New Requirement (S)',
                        completed: 3,
                        iconCls: 'treeNode_Requirements',
                        assignedTo: currentSelectedNode.data.name + '_Pihu',
                        nodeType: 'requirements',
                        leaf: true
                    });
                } else if (item.text === 'Functional Area') {
                    currentSelectedNode.parentNode.appendChild({
                        name: 'Added Function Area',
                        completed: 3,
                        iconCls: 'treeNode_FunctionalArea',
                        assignedTo: currentSelectedNode.data.name + '_Pihu',
                        nodeType: 'functionalArea',
                        leaf: true
                    });
                }
            }

            var menu1 = new Ext.menu.Menu({
                items: [
                    {
                        text: 'View',
                        id: 'tcm_View',
                        iconCls: 'tcm_View'
                    },
                    {
                        text: 'View Selected Folder',
                        id: 'tcm_ViewSelectedFolder',
                        iconCls: 'tcm_ViewSelectedFolder'
                    },'-',
                    {
                        text: 'New Sibling',
                        id: 'tcm_NewSibling',
                        iconCls: 'tcm_NewSibling',
                        menu: {
                            items: [
                                {
                                    text: 'Folder',
                                    id: 'tcm_Sibling_Folder',
                                    icon: '/images/Old_Images/entities/Folder_menu.png',
                                    handler: createSiblingNode
                                },
                                {
                                    text: 'Functional Area',
                                    id: 'tcm_Sibling_FunctionalArea',
                                    icon: '/images/Old_Images/entities/ProductDomain_menu.png',
                                    handler: createSiblingNode
                                },
                                {
                                    text: 'Requirement (S)',
                                    id: 'tcm_Sibling_Requirement',
                                    icon: '/images/Old_Images/entities/Feature_menu.png',
                                    handler: createSiblingNode
                                }
                            ]
                        }
                    },
                    {
                        text: 'New Child',
                        id: 'tcm_NewChild',
                        iconCls: 'tcm_NewChild',
                        menu: {
                            items: [
                                {
                                    text: 'Folder',
                                    id: 'tcm_Child_Folder',
                                    icon: '/images/Old_Images/entities/Folder_menu.png',
                                    handler: createChildNode
                                },
                                {
                                    text: 'Functional Area',
                                    id: 'tcm_Child_FunctionalArea',
                                    icon: '/images/Old_Images/entities/ProductDomain_menu.png',
                                    handler: createChildNode
                                },
                                {
                                    text: 'Requirement (C)',
                                    id: 'tcm_Child_Requirement',
                                    icon: '/images/Old_Images/entities/Feature_menu.png',
                                    handler: createChildNode
                                }
                            ]
                        }
                    }, '-',
                    {
                        text: 'Expand All Below',
                        id: 'tcm_ExpandAllBelow',
                        iconCls: 'tcm_ExpandAllBelow',
                        handler: function () { openRecursive(currentSelectedNode, 5000) }
                    },
                    {
                        text: 'Expand Levels Below',
                        id: 'tcm_ExpandLevelsBelow',
                        iconCls: 'tcm_ExpandLevelsBelow',
                        menu: {
                            items: [
                                {
                                    text: 'Level 1',
                                    handler: function () { openRecursive(currentSelectedNode, 1) }
                                },
                                {
                                    text: 'Level 2',
                                    handler: function () { openRecursive(currentSelectedNode, 2) }
                                },
                                {
                                    text: 'Level 3',
                                    handler: function () { openRecursive(currentSelectedNode, 3) }
                                },
                                {
                                    text: 'Level 4',
                                    handler: function () { openRecursive(currentSelectedNode, 4) }
                                },
                                {
                                    text: 'Level 5',
                                    handler: function () { openRecursive(currentSelectedNode, 5) }
                                },
                                {
                                    text: 'Level 6',
                                    handler: function () { openRecursive(currentSelectedNode, 6) }
                                },
                                {
                                    text: 'Level 7',
                                    handler: function () { openRecursive(currentSelectedNode, 7) }
                                },
                                {
                                    text: 'Level 8',
                                    handler: function () { openRecursive(currentSelectedNode, 8) }
                                },
                                {
                                    text: 'Level 9',
                                    handler: function () { openRecursive(currentSelectedNode, 9) }
                                },
                                {
                                    text: 'Level 10',
                                    handler: function () { openRecursive(currentSelectedNode, 10) }
                                },
                                {
                                    text: 'Level 11',
                                    handler: function () { openRecursive(currentSelectedNode, 11) }
                                },
                                {
                                    text: 'Level 12',
                                    handler: function () { openRecursive(currentSelectedNode, 12) }
                                },
                                {
                                    text: 'Level 13',
                                    handler: function () { openRecursive(currentSelectedNode, 13) }
                                },
                                {
                                    text: 'Level 14',
                                    handler: function () { openRecursive(currentSelectedNode, 14) }
                                },
                                {
                                    text: 'Level 15',
                                    handler: function () { openRecursive(currentSelectedNode, 15) }
                                },
                                {
                                    text: 'Level 16',
                                    handler: function () { openRecursive(currentSelectedNode, 16) }
                                },
                                {
                                    text: 'Level 17',
                                    handler: function () { openRecursive(currentSelectedNode, 17) }
                                },
                                {
                                    text: 'Level 18',
                                    handler: function () { openRecursive(currentSelectedNode, 18) }
                                },
                                {
                                    text: 'Level 19',
                                    handler: function () { openRecursive(currentSelectedNode, 19) }
                                },
                                {
                                    text: 'Level 20',
                                    handler: function () { openRecursive(currentSelectedNode, 20) }
                                },
                                {
                                    text: 'Level 21',
                                    handler: function () { openRecursive(currentSelectedNode, 21) }
                                },
                                {
                                    text: 'Level 22',
                                    handler: function () { openRecursive(currentSelectedNode, 22) }
                                },
                                {
                                    text: 'Level 23',
                                    handler: function () { openRecursive(currentSelectedNode, 23) }
                                },
                                {
                                    text: 'Level 24',
                                    handler: function () { openRecursive(currentSelectedNode, 24) }
                                },
                                {
                                    text: 'Level 25',
                                    handler: function () { openRecursive(currentSelectedNode, 25) }
                                }
                            ]
                        }
                    },
                    {
                        text: 'Collapse All Below',
                        id: 'tcm_CollapseAllBelow',
                        iconCls: 'tcm_CollapseAllBelow',
                        handler: function () { closeRecursive(currentSelectedNode) }
                    }, '-',
                    {
                        text: 'Convert',
                        id: 'tcm_Convert',
                        iconCls: 'tcm_Convert'
                    }, '-',
//                    {
//                        text: 'Promote to Functional Area',
//                        id: 'tcm_PromoteToFA',
//                        iconCls: 'tcm_PromoteToFA'
//                    },
//                    {
//                        text: 'Split Requirement',
//                        id: 'tcm_SplitR',
//                        iconCls: 'tcm_SplitR'
//                    },
//                    {
//                        text: 'Create Task from template',
//                        id: 'tcm_CreaterTFT',
//                        iconCls: 'tcm_CreaterTFT'
//                    },
//                    {
//                        text: 'Merger Requirements',
//                        id: 'tcm_MergeR',
//                        iconCls: 'tcm_MergeR'
//                    }, '-',
                    {
                        text: 'Copy',
                        id: 'tcm_Copy', 
                        iconCls: 'tcm_Copy'
                    },
                    {
                        text: 'Paste',
                        id: 'tcm_Paste',
                        iconCls: 'tcm_Paste'
                    },
                    {
                        text: 'Move/Link',
                        id: 'tcm_MoveLink',
                        iconCls: 'tcm_MoveLink'
                    },
                    {
                        text: 'Up',
                        id: 'tcm_Up',
                        iconCls: 'tcm_Up'
                    },
                    {
                        text: 'Down',
                        id: 'tcm_Down',
                        iconCls: 'tcm_Down'
                    },
                    {
                        text: 'Unlink',
                        id: 'tcm_Unlink',
                        iconCls: 'tcm_Unlink'
                    },
                    {
                        text: 'Delete',
                        id: 'tcm_Delete',
                        iconCls: 'tcm_Delete'
                    }, '-',
                    {
                        text: 'Copy Link',
                        id: 'tcm_CopyLink',
                        iconCls: 'tcm_CopyLink'
                    }, '-',
                    {
                        text: 'Update Additional Properties',
                        id: 'tcm_UpdateAP',
                        iconCls: 'tcm_UpdateAP'
                    },
                    {
                        text: 'Enter Resource Estimation',
                        id: 'tcm_EnterRE',
                        iconCls: 'tcm_EnterRE'
                    }, '-',
                    {
                        text: 'Create Bookmark',
                        id: 'tcm_bookmark',
                        iconCls: 'tcm_bookmark'
                    }
                ]
            });

            function openRecursive(node, level) {
                var ch = node.childNodes;
                if (ch.length > 0 && level >0) {
                    if (!node.isExpanded()) {
                        node.expand();
                    }
                    Ext.Array.each(ch, function (c) {
                        openRecursive(c, level-1);
                    });
                }
            };

            function closeRecursive(node) {
                var ch = node.childNodes;
                if (ch.length > 0 && node.isExpanded()) {
                    Ext.Array.each(ch, function (c) {
                        closeRecursive(c);
                    });
                    node.collapse();
                }
            };

            Ext.define("Post", {
                extend: 'Ext.data.Model',
                proxy: {
                    type: 'jsonp',
                    url: 'http://www.sencha.com/forum/topics-remote.php',
                    reader: {
                        type: 'json',
                        root: 'topics',
                        totalProperty: 'totalCount'
                    }
                },

                fields: [
            { name: 'id', mapping: 'post_id' },
            { name: 'title', mapping: 'topic_title' },
            { name: 'topicId', mapping: 'topic_id' },
            { name: 'author', mapping: 'author' },
            { name: 'lastPost', mapping: 'post_time', type: 'date', dateFormat: 'timestamp' },
            { name: 'excerpt', mapping: 'post_text' }
        ]
            });

            var ds = Ext.create('Ext.data.Store', {
                pageSize: 10,
                model: 'Post'
            });



            var filterSearchBox = {
                xtype:'panel',
                height:32,
                cls:'searchBackGroundPanel',
                padding: 5,
                dockedItems:[{
                xtype: 'combo',
                //triggerCls : 'x-form-search-trigger', // Search Icon For Instance
                flex:1,
                store: ds,
                displayField: 'title',
                typeAhead: false,
                hideLabel: true,
                //hideTrigger: true,
                //anchor: '100%',
                listConfig: {
                    loadingText: 'Searching...',
                    emptyText: 'No matching posts found.',

                    // Custom rendering template for each item
                    getInnerTpl: function () {
                        return '<div class="search-item">' +
                        '<h3><span>{[Ext.Date.format(values.lastPost, "M j, Y")]}<br />by {author}</span>{title}</h3>' +
                        '{excerpt}' +
                    '</div>';
                    }
                },
                pageSize: 10,

                // override default onSelect to do redirect
                listeners: {
                    select: function (combo, selection) {
                        var post = selection[0];
                        if (post) {
                            window.location =
                            Ext.String.format('http://www.sencha.com/forum/showthread.php?t={0}&p={1}', post.get('topicId'), post.get('id'));
                        }
                    }
                }
                }
                ]
            }

//var filterSearchBox = { height: 40, html: 'Put Search Box Here' };
