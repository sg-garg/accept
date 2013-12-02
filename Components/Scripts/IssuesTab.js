var states = Ext.create('Ext.data.Store', {
    fields: ['name', 'iconLoc'],
    data: [
                { name: 'Customer/Partners', iconLoc: '\/images\/partner-icon.png' },
                { name: 'Opportunities', iconLoc: '\/images\/Opportunities-icon.png' },
                { name: 'Market Segment', iconLoc: '\/images\/market-segments.png' },
                { name: 'Themes', iconLoc: '\/images\/theme-icon.png' },
                { name: 'Competitors', iconLoc: '\/images\/Competitors-icon.png' },
                { name: 'Use Cases', iconLoc: '\/images\/use-cases-icon.png' },
                { name: 'Offerings', iconLoc: '\/images\/offering-icon.png' },
                { name: 'Tasks', iconLoc: '\/images\/task-icon.png' },
                { name: 'Risks', iconLoc: '\/images\/risks-icon.png' },
                { name: 'Defects', iconLoc: '\/images\/defect-icon.png' },
                { name: 'Enhancement Requests', iconLoc: '\/images\/enhancement-requests-icon.png' }
            ]
});

var selectElementTypeCombobox = Ext.create('Ext.form.field.ComboBox', {
    fieldLabel: 'Select Element Type',
    store: states,
    queryMode: 'local',
    displayField: 'name',
    valueField: 'name',
    width: 300,
    labelWidth: 120,
    editable: false,
    tpl: [
                '<tpl for=".">',
                    '<div class="x-boundlist-item">',
                        '<img src="{iconLoc}"/> {name}',
                    '</div>',
                '</tpl>'
            ],
    listeners: {
        select: function (comboBox, records) {
            var record = records[0];
            comboBox.inputEl.setStyle({
                'background-image': 'url(' + record.get('iconLoc') + ')',
                'background-repeat': 'no-repeat',
                'background-position': '3px center',
                'padding-left': '25px'
            });
        }
                ,
        afterrender: function (comboBox) {
            var recordSelected = comboBox.getStore().getAt(0);
            //alert('<div class="list-item"> <img src="{recordSelected.get(\'iconLoc\')}"/> {recordSelected.get(\'name\')} </div>');
            //                    comboBox.setValue(
            //                        '<div class="list-item"> <img src="{recordSelected.get(\'iconLoc\')}"/> {recordSelected.get(\'name\')} </div>'
            //                    );
        }
    }
});
var issuesTopSubToolbar1 = {
        xtype: 'toolbar',
        height: 30,
        dock: 'top',
        items: [
            selectElementTypeCombobox
        ]
};


var expandButtonMenu = Ext.create('Ext.menu.Menu', {
    plain: true,
    items: [{
        text: 'Copy Weblink',
        handler: function () {
            console.log('Copy Weblink Handler');
        }
    }, {
        text: 'Copy Text Reference',
        handler: function () {
            console.log('Copy Text Reference Handler');
        }
    }, {
        text: 'Email Selected',
        handler: function () {
            console.log('Email Selected Handler');
        }
    }]
});
var expandButton = Ext.create('Ext.button.Split', {
    text: 'Expand',
    icon: '\/images\/expand-icon.png',
    handler: function () {
        console.log('Expand Handler');
    },
    id: 'issuesBtnExpand',
    menu: expandButtonMenu
});

expandButton.on({
    click: function () {
        expandButton.showMenu();
    },
    mouseover: function () {
        expandButton.showMenu();
    },
    scope: this
});
var printButtonMenu = Ext.create('Ext.menu.Menu', {
    plain: true,
    items: [{
        text: 'Copy Weblink',
        handler: function () {
            console.log('Copy Weblink Handler');
        }
    }, {
        text: 'Copy Text Reference',
        handler: function () {
            console.log('Copy Text Reference Handler');
        }
    }, {
        text: 'Email Selected',
        handler: function () {
            console.log('Email Selected Handler');
        }
    }]
});
var printButton = Ext.create('Ext.button.Split', {
    text: 'Print',
    icon: '\/images\/printer-icon.png',
    handler: function () {
        console.log('Print Handler');
    },
    id: 'issuesBtnPrint',
    menu: printButtonMenu
});

printButton.on({
    click: function () {
        printButton.showMenu();
    },
    mouseover: function () {
        printButton.showMenu();
    },
    scope: this
});

var issuesTopSubToolbar2 = {
        xtype: 'toolbar',
        height: 40,
        dock: 'top',
        items: [
                        expandButton,
                        '|',
                        {
                            text: 'New',
                            icon: '\/images\/new-icon.png',
                            handler: function () {
                                console.log('New:  icon clicked');
                            },
                            id: 'issuesBtnNew'
                        },
                        '|',
                         {
                             text: 'View',
                             icon: '\/images\/view-icon.png',
                             handler: function () {
                                 console.log('View:  icon clicked');
                             },
                             id: 'issuesBtnView'
                         },
                         printButton,
                         '|',
                        {
                            text: 'Export',
                            icon: '\/images\/export-icon.png',
                            handler: function () {
                                console.log('Export:  icon clicked');
                            },
                            id: 'issuesBtnExport'
                        },
                        {
                            text: 'Refresh',
                            icon: '\/images\/refresh-icon.png',
                            handler: function () {
                                console.log('Refresh:  icon clicked');
                            },
                            id: 'issuesBtnRefresh'
                        },
                        '|',
                        {
                            text: 'Enable',
                            handler: function () {
                                Ext.getCmp('issuesBtnExpand').enable();
                                Ext.getCmp('issuesBtnView').enable();
                                Ext.getCmp('issuesBtnPrint').enable();
                            }
                        },
                        {
                            text: 'Disable',
                            handler: function () {
                                Ext.getCmp('issuesBtnExpand').disable();
                                Ext.getCmp('issuesBtnView').disable();
                                Ext.getCmp('issuesBtnPrint').disable();
                            }
                        }
                    ]
};