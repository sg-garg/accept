var historyDropDownMenu = Ext.create('Ext.menu.Menu', {
    items: [{
        text: 'History Item1',
        icon: '\/extjs\/resources\/themes\/images\/default\/tree\/folder.gif',
        //cls: 'sub_top_nav_T_icon',
        handler: function () {
            console.log('History Item1 Clicked');
        }
    },
                {
                    text: 'History Item2',
                    icon: '\/extjs\/resources\/themes\/images\/default\/tree\/leaf.gif',
                    handler: function () {
                        console.log('History Item2 Clicked');
                    }
                },
                {
                    text: 'History Item3',
                    icon: '\/extjs\/resources\/themes\/images\/default\/tree\/leaf.gif',
                    handler: function () {
                        console.log('History Item3 Clicked');
                    }
                }]
});

var historySplitButton = Ext.create('Ext.button.Split', {
    tooltip: 'History',
    icon: '\/images\/history-dd-icon.png',
    handler: function () {
        console.log('History Button Clicked');
    },
    menu: historyDropDownMenu
});

historySplitButton.on({
    click: function () {
        historySplitButton.showMenu();
    },
    mouseover: function () {
        historySplitButton.showMenu();
    },
    scope: this
});

var searchDropDownMenu = Ext.create('Ext.menu.Menu', {
    items: [{
        text: 'I have searched 123',
        icon: '\/extjs\/resources\/themes\/images\/default\/tree\/folder.gif',
        handler: function () {
            console.log('search for 123 clicked');
        }
    },
                {
                    text: 'searched Free',
                    icon: '\/extjs\/resources\/themes\/images\/default\/tree\/leaf.gif',
                    handler: function () {
                        console.log('Search Menu clicked');
                    }
                }]
});

var searchSplitButton = Ext.create('Ext.button.Split', {
    tooltip: 'Search',
    icon: '\/images\/search-icon.png',
    handler: function () {
        console.log('Search Button Clicked');
    },
    menu: searchDropDownMenu
});

searchSplitButton.on({
    click: function () {
        searchSplitButton.showMenu();
    },
    mouseover: function () {
        searchSplitButton.showMenu();
    },
    scope: this
});

var bookmarkDropDownMenu = Ext.create('Ext.menu.Menu', {
    items: [{
        text: 'Requirement module design',
        icon: '\/extjs\/resources\/themes\/images\/default\/tree\/folder.gif',
        handler: function () {
            console.log('Requirement module design');
        }
    },
                {
                    text: 'developers update',
                    icon: '\/extjs\/resources\/themes\/images\/default\/tree\/leaf.gif',
                    handler: function () {
                        console.log('developers update');
                    }
                }]
});

var bookmarkSplitButton = Ext.create('Ext.button.Split', {
    tooltip: 'Bookmark',
    icon: '\/images\/india-bookmark-icon.png',
    handler: function () {
        console.log('Bookmark Button Clicked');
    },
    menu: bookmarkDropDownMenu
});

bookmarkSplitButton.on({
    click: function () {
        bookmarkSplitButton.showMenu();
    },
    mouseover: function () {
        bookmarkSplitButton.showMenu();
    },
    scope: this
});

var topSubToolBar = {
    xtype: 'toolbar',
    dock: 'top',
    cls: 'sub_top_nav_B',
    items: [{
        icon: '\/images\/save-icon.png',
        cls: 'sub_top_nav_T_icon',
        tooltip: 'Save',
        handler: function () {
            console.log('SubToolBar1 :- Save icon clicked');
        }
    },
        {
            icon: '\/images\/reset-icon.png',
            cls: 'sub_top_nav_T_icon',
            tooltip: 'Reset',
            handler: function () {
                console.log('SubToolBar1 :- Reset icon clicked');
            }
        },
        {
            icon: '\/images\/india-new-window-icon.png',
            cls: 'sub_top_nav_T_icon',
            tooltip: 'Open in a new window',
            handler: function () {
                console.log('SubToolBar1 :- New window icon clicked');
            }
        },
        {
            icon: '\/images\/printer-icon.png',
            cls: 'sub_top_nav_T_icon',
            tooltip: 'Print',
            handler: function () {
                console.log('SubToolBar1 :- Print icon clicked');
            }
        },
        {
            icon: '\/images\/refresh-icon.png',
            cls: 'sub_top_nav_T_icon',
            tooltip: 'Refresh',
            handler: function () {
                window.location.reload();
                console.log('SubToolBar1 :- Refresh icon clicked');
            }
        },
        "|",
        historySplitButton,
        searchSplitButton,
        bookmarkSplitButton,
        "|"
    ]
}