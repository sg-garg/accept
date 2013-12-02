var folderTreeSplitButtonMenu = Ext.create('Ext.menu.Menu', {
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
                console.log('Hierarchy: Clicked');
            }
        },
        {
            text: 'Hierarchy, no empty folders',
            icon: '\/images\/hierarchy-no-empty-icon.png',
            handler: function () {
                console.log('Hierarchy, no empty folders: Clicked');
            }
        },
        {
            text: 'Flat, no folders',
            icon: '\/images\/flat-icon.png',
            handler: function () {
                console.log('Flat, no folders: Clicked');
            }
        }, 
        {
            text: 'Folders Only',
            icon: '\/images\/folder-icon.png',
            handler: function () {
                console.log('Folders Only: Clicked');
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


//Ext.define('TreeGridPanelModel', {
//    extend: 'Ext.data.Model',
//    fields: [
//        { name: 'task', type: 'string' },
//        { name: 'user', type: 'string' },
//        { name: 'duration', type: 'string' },
//        { name: 'name', type: 'string' },
//        { name: 'internalID', type: 'string' },
//        { name: 'availableProperties', type: 'string' },
//        { name: 'completed', type: 'string' },
//        { name: 'assignedTo', type: 'string' },
//        { name: 'basedOnIdea', type: 'string' },
//        { name: 'briefDescription', type: 'string' },
//        { name: 'creationDate', type: 'string' },
//        { name: 'estimationConfidence', type: 'string' },
//        { name: 'lastUpdatedDate', type: 'string' },
//        { name: 'lifecycle', type: 'string' },
//        { name: 'planPriority', type: 'string' },
//        { name: 'priority', type: 'string' },
//        { name: 'release', type: 'string' },
//        { name: 'remainingWork', type: 'string' },
//        { name: 'resourceCost', type: 'string' },
//        { name: 'resourceDemand', type: 'string' },
//        { name: 'rollup', type: 'string' },
//        { name: 'sn', type: 'string' },
//        { name: 'team', type: 'string' },
//        { name: 'nodeType', type: 'string' }
//    ]
//});

//var store1 = Ext.create('Ext.data.TreeStore', {
//    model: 'TreeGridPanelModel',
//    proxy: {
//        type: 'ajax',
//        url: 'Data/treegrid.json'
//    },
//    folderSort: true
//});

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
                    { name: 'sn', type: 'string' },
                    { name: 'team', type: 'string' }
                ]
            });

            var treeControlStore = Ext.create('Ext.data.TreeStore', {
                model: 'TreeControlModel',
                proxy: {
                    type: 'ajax',
                    url: '/Data/treegrid.json'
                },
                autoLoad: true,
                folderSort: true
            });

            var treeGridPanle = new Ext.tree.TreePanel({
                id: 'myTreeControlPanel',
                //title: 'Core Team Projects',
                componentCls: 'mygreattree',
                flex: 1,
                //collapsible: true,
                useArrows: true,
                rootVisible: false,
                store: treeControlStore,
                multiSelect: true,
                //singleExpand: true,
                //the 'columns' property is now 'headers'
                columns: [{
                    xtype: 'treecolumn', //this is so we know which column will show the tree
                    text: 'Name',
                    dataIndex: 'name',
                    flex: 3,
                    menuDisabled: true,
                    sortable: true
                }, {
                    text: '% Completed',
                    flex: 1,
                    dataIndex: 'completed',
                    menuDisabled: true,
                    sortable: true
                },
                {
                    //  xtype: 'templatecolumn',
                    text: 'Assigned To',
                    flex: 1,
                    dataIndex: 'assignedTo',
                    menuDisabled: true,
                    sortable: true
                },
                {
                    //  xtype: 'templatecolumn',
                    text: 'Node Type',
                    flex: 1,
                    dataIndex: 'nodeType',
                    menuDisabled: true,
                    sortable: true
                },
                {
                    width: 25,
                    //xtype:'container',
                    style: 'background: url(../images/sprite.png) no-repeat -873px 4px; margin-left:6px;',
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
                        if (record.data.nodeType === 'requirements') {
                            Ext.getCmp('treeContextMenuNewChildMenuID').setVisible(false);
                            Ext.getCmp('treeContextMenuExpandMenuID').setVisible(false);
                        } else {
                            Ext.getCmp('treeContextMenuNewChildMenuID').setVisible(true);
                            Ext.getCmp('treeContextMenuExpandMenuID').setVisible(true);
                        }
                        event.stopEvent();
                    },
                    itemclick: function (view, node, item, index, e, eOpts) {
                        Ext.getCmp('tabsHeaderInfoDisplayID').setText(node.data.nodeType + ' - ' + node.data.name);
                    }

                }
            });

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
                if (item.text === 'New Folder') {
                    currentSelectedNode.appendChild({
                        name: 'New Folder Node',
                        completed: 3,
                        assignedTo: currentSelectedNode.data.name + '_Pihu',
                        nodeType: 'folder'
                    });
                } else if (item.text === 'New Requirement') {
                    currentSelectedNode.appendChild({
                        name: 'New Requirement',
                        completed: 3,
                        assignedTo: currentSelectedNode.data.name + '_Pihu',
                        nodeType: 'requirements',
                        leaf: true
                    });
                } else if (item.text === 'New Category') {
                    currentSelectedNode.appendChild({
                        name: 'Added Category',
                        completed: 3,
                        assignedTo: currentSelectedNode.data.name + '_Pihu',
                        nodeType: 'category'
                    });
                }
            }

            function createSiblingNode(item) {
                if (item.text === 'New Folder') {
                    currentSelectedNode.parentNode.appendChild({
                        name: 'New Folder Node',
                        completed: 3,
                        assignedTo: currentSelectedNode.data.name + '_Pihu',
                        nodeType: 'folder'
                    });
                } else if (item.text === 'New Requirement') {
                    currentSelectedNode.parentNode.appendChild({
                        name: 'New Requirement',
                        completed: 3,
                        assignedTo: currentSelectedNode.data.name + '_Pihu',
                        nodeType: 'requirements',
                        leaf: true
                    });
                } else if (item.text === 'New Category') {
                    currentSelectedNode.parentNode.appendChild({
                        name: 'Added Category',
                        completed: 3,
                        assignedTo: currentSelectedNode.data.name + '_Pihu',
                        nodeType: 'category'
                    });
                }
            }

            var menu1 = new Ext.menu.Menu({
                items: [
                    {
                        text: 'New Child',
                        id: 'treeContextMenuNewChildMenuID',
                        menu: {
                            items: [
                                {
                                    text: 'New Folder',
                                    handler: createChildNode
                                },
                                {
                                    text: 'New Requirement',
                                    handler: createChildNode
                                },
                                {
                                    text: 'New Category',
                                    handler: createChildNode
                                }
                            ]
                        }
                    },
                    {
                        text: 'Sibling',
                        menu: {
                            items: [
                                {
                                    text: 'New Folder',
                                    handler: createSiblingNode
                                },
                                {
                                    text: 'New Requirement',
                                    handler: createSiblingNode
                                },
                                {
                                    text: 'New Category',
                                    handler: createSiblingNode
                                }
                            ]
                        }
                    }, '-',
                    {
                        text: 'Expand',
                        id: 'treeContextMenuExpandMenuID',
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
                                }
                            ]
                        }
                    }, '-',
                    {
                        text: 'Other Menu Items'
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



            var tabsHeaderInfo1 = {
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

//var tabsHeaderInfo1 = { height: 40, html: 'Put Search Box Here' };
