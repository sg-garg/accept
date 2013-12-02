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

var selectTypeCombobox = Ext.create('Ext.form.field.ComboBox', {
    fieldLabel: 'Select Type',
    store: states,
    queryMode: 'local',
    displayField: 'name',
    valueField: 'name',
    width: 260,
    labelWidth: 80,
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
var relationshipsSubToolbar1 = {
        xtype: 'toolbar',
        dock: 'top',
        items: [
                        selectTypeCombobox,
                        {
                            text: 'Print All',
                            icon: '\/images\/printer-icon.png',
                            handler: function () {
                                console.log('Dependencies: None icon clicked');
                            }
                        }
                    ]
                    };



var addButtonMenu = Ext.create('Ext.menu.Menu', {
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
var addButton = Ext.create('Ext.button.Split', {
    text: 'Add',
    icon: '\/images\/add-icon.png',
    handler: function () {
        console.log('Add Handler');
    },
    id: 'relationshipsBtnAdd',
    menu: addButtonMenu
});

addButton.on({
    click: function () {
        addButton.showMenu();
    },
    mouseover: function () {
        addButton.showMenu();
    },
    scope: this
});

var newButtonMenu = Ext.create('Ext.menu.Menu', {
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
var newButton = Ext.create('Ext.button.Split', {
    text: 'New',
    icon: '\/images\/new-icon.png',
    handler: function () {
        console.log('New Handler');
    },
    id: 'relationshipsBtnNew',
    menu: newButtonMenu
});

newButton.on({
    click: function () {
        newButton.showMenu();
    },
    mouseover: function () {
        newButton.showMenu();
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
    id: 'relationshipsBtnPrint',
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

var relationshipsSubToolbar2 = {
        xtype: 'toolbar',
        dock: 'top',
        items: [
    addButton,
    newButton,
    {
        text: 'Remove',
        icon: '\/images\/remove-icon.png',
        handler: function () {
            console.log('New:  icon clicked');
        },
        id: 'relationshipsBtnRemove'
    },
    '|',
    {
        text: 'Export',
        icon: '\/images\/export-icon.png',
        handler: function () {
            console.log('Export:  icon clicked');
        },
        id: 'relationshipsBtnExport'
    },
    '|',
    {
        text: 'View',
        icon: '\/images\/view-icon.png',
        handler: function () {
            console.log('View:  icon clicked');
        },
        id: 'relationshipsBtnView'
    },
    printButton,
    {
        text: 'Navigate',
        icon: '\/images\/navigate-icon.png',
        handler: function () {
            console.log('Navigate:  icon clicked');
        },
        id: 'relationshipsBtnNavigate'
    },
    {
        text: 'Refresh',
        icon: '\/images\/refresh-icon.png',
        handler: function () {
            console.log('Refresh:  icon clicked');
        },
        id: 'relationshipsBtnRefresh'
    },
    '|',
    {
        text: 'Enable',
        handler: function () {
            Ext.getCmp('relationshipsBtnAdd').enable();
            Ext.getCmp('relationshipsBtnRemove').enable();
            Ext.getCmp('relationshipsBtnExport').enable();
            Ext.getCmp('relationshipsBtnView').enable();
            Ext.getCmp('relationshipsBtnPrint').enable();
        }
    },
    {
        text: 'Disable',
        handler: function () {
            Ext.getCmp('relationshipsBtnAdd').disable();
            Ext.getCmp('relationshipsBtnRemove').disable();
            Ext.getCmp('relationshipsBtnExport').disable();
            Ext.getCmp('relationshipsBtnView').disable();
            Ext.getCmp('relationshipsBtnPrint').disable();
        }
    }
]
};

var newRelationshipsAttachmentsButtonMenu = Ext.create('Ext.menu.Menu', {
    plain: true,
    items: [{
        text: 'New File Attachement',
        handler: function () {
            console.log('New File Attachement Handler');
        }
    }, 
    '-',
    {
        text: 'New File Link',
        handler: function () {
            console.log('New File Link Handler');
        }
    },
    '-',
    {
        text: 'New Web Link',
        handler: function () {
            console.log('New Web Link Handler');
        }
    }]
});
var newRelationshipsAttachmentsButton = Ext.create('Ext.button.Split', {
    text: 'New',
    icon: '\/images\/new-icon.png',
    handler: function () {
        console.log('New Handler');
    },
    id: 'relationshipsAttachementsBtnNew',
    menu: newRelationshipsAttachmentsButtonMenu
});

newRelationshipsAttachmentsButton.on({
    click: function () {
        newRelationshipsAttachmentsButton.showMenu();
    },
    mouseover: function () {
        newRelationshipsAttachmentsButton.showMenu();
    },
    scope: this
});


var relationshipsAttachmentsSubToolbar = {
    xtype: 'toolbar',
    dock: 'top',
    items: [
    newRelationshipsAttachmentsButton,
   {
       text: 'View',
       icon: '\/images\/view-icon.png',
       handler: function () {
           console.log('View:  icon clicked');
       },
       id: 'relationshipsAttachmentsBtnView'
   },
   {
       text: 'Delete',
       icon: '\/images\/delete-icon.png',
       handler: function () {
           console.log('Delete:  icon clicked');
       },
       id: 'relationshipsAttachmentsBtnDelete'
   },
    {
        text: 'Copy Link',
        icon: '\/images\/copy-link-icon.png',
        handler: function () {
            console.log('Copy Link:  icon clicked');
        },
        id: 'relationshipsAttachmentsBtnCopyLink'
    },
    {
        text: 'Refresh',
        icon: '\/images\/refresh-icon.png',
        handler: function () {
            console.log('Refresh:  icon clicked');
        },
        id: 'relationshipsAttachmentsBtnRefresh'
    },
    '|',
    {
        text: 'Enable',
        handler: function () {
            Ext.getCmp('relationshipsAttachmentsBtnView').enable();
            Ext.getCmp('relationshipsAttachmentsBtnDelete').enable();
            Ext.getCmp('relationshipsAttachmentsBtnCopyLink').enable();
        }
    },
    {
        text: 'Disable',
        handler: function () {
            Ext.getCmp('relationshipsAttachmentsBtnView').disable();
            Ext.getCmp('relationshipsAttachmentsBtnDelete').disable();
            Ext.getCmp('relationshipsAttachmentsBtnCopyLink').disable();
        }
    }
]
};

var relationshipsHistorySubToolbar = {
    xtype: 'toolbar',
    dock: 'top',
    items: [
        {
        text: 'View',
        icon: '\/images\/view-icon.png',
        handler: function () {
            console.log('View:  icon clicked');
        },
        id: 'relationshipsHistoryBtnView'
        },
        {
            text: 'Refresh',
            icon: '\/images\/refresh-icon.png',
            handler: function () {
                console.log('Refresh:  icon clicked');
            },
            id: 'relationshipsHistoryBtnRefresh'
        },
    ]
};