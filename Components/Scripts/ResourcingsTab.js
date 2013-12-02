var resourceRollupResourcesSubToolbar = {
    xtype: 'toolbar',
    dock: 'top',
    items: [
        {
            text: 'Refresh',
            icon: '\/images\/refresh-icon.png',
            handler: function () {
                console.log('Referesh:  icon clicked');
            },
            id: 'rrrBtnRefresh'
        }]
}

var resourceRollupSummarySubToolbar = {
    xtype: 'toolbar',
    dock: 'top',
    items: [
        {
            text: 'View',
            icon: '\/images\/view-icon.png',
            handler: function () {
                console.log('View:  icon clicked');
            },
            id: 'rrsBtnView'
        },
        {
            text: 'Navigate',
            icon: '\/images\/navigate-icon.png',
            handler: function () {
                console.log('Navigate:  icon clicked');
            },
            id: 'rrsBtnNavigate'
        },
        {
            text: 'Refresh',
            icon: '\/images\/refresh-icon.png',
            handler: function () {
                console.log('Referesh:  icon clicked');
            },
            id: 'rrsBtnRefresh'
        }
        , '|',
        {
            text: 'Enable',
            handler: function () {
                Ext.getCmp('rrsBtnView').enable();
                Ext.getCmp('rrsBtnNavigate').enable();
            }
        },
        {
            text: 'Disable',
            handler: function () {
                Ext.getCmp('rrsBtnView').disable();
                Ext.getCmp('rrsBtnNavigate').disable();
            }
        }
    ]
};



var selectResourcesButtonMenu = Ext.create('Ext.menu.Menu', {
    plain: true,
    items: [{
        text: 'Resource 1',
        //icon: '\/images\/NotValid.png',
        handler: function () {
            console.log('Resource 1 Handler');
        }
    }, {
        text: 'Resource 2',
        //icon: '\/images\/NotValid.png',
        handler: function () {
            console.log('Resource 2 Handler');
        }
    }, {
        text: 'Resource 3',
        //icon: '\/images\/NotValid.png',
        handler: function () {
            console.log('Resource 3 Handler');
        }
    }]
});
var selectResourcesButton = Ext.create('Ext.button.Split', {
    text: 'Select Resources',
    icon: '\/images\/group-icon.png',
    //tooltip: 'Copy',
    handler: function () {
        console.log('Copy Link Handler');
    },
    menu: selectResourcesButtonMenu
});

selectResourcesButton.on({
    click: function () {
        selectResourcesButton.showMenu();
    },
    mouseover: function () {
        selectResourcesButton.showMenu();
    },
    scope: this
});

var fixedCostTypesButtonMenu = Ext.create('Ext.menu.Menu', {
    xtype: 'menu',
    plain: true,
    items: [{
        text: 'Fixed Cost Type 1',
        //icon: '\/images\/NotValid.png',
        handler: function () {
            console.log('Fixed Cost Type 1 Handler');
        }
    }, {
        text: 'Fixed Cost Type 2',
        //icon: '\/images\/NotValid.png',
        handler: function () {
            console.log('Fixed Cost Type 2 Handler');
        }
    }, {
        text: 'Fixed Cost Type 3',
        //icon: '\/images\/NotValid.png',
        handler: function () {
            console.log('Fixed Cost Type 3 Handler');
        }
    }]
});
var fixedCostTypesButton = Ext.create('Ext.button.Split', {
    text: 'Select Fixed Cost Types',
    icon: '\/images\/dollar-icon.png',
    //tooltip: 'Relationships',
    handler: function () {
        console.log('Relationships: 1 Handler');
    },
    menu: fixedCostTypesButtonMenu
});

fixedCostTypesButton.on({
    click: function () {
        fixedCostTypesButton.showMenu();
    },
    mouseover: function () {
        fixedCostTypesButton.showMenu();
    },
    scope: this
});

var resourceAssignmentSubToolbar = {
    xtype: 'toolbar',
    dock: 'top',
    items: [
        selectResourcesButton,
        fixedCostTypesButton,
        {
            text: 'Remove All',
            icon: '\/images\/remove-icon.png',
            handler: function () {
                console.log('Remove All:  icon clicked');
            },
            id: 'raBtnRemoveAll'
        },
        '|',
        {
            text: 'Burn Down Chart',
            icon: '\/images\/graph-icon.png',
            handler: function () {
                console.log('Make Primary Release:  icon clicked');
            },
            id: 'raBtnBurnDownChart'
        }, '|',
        {
            text: 'Enable',
            handler: function () {
                Ext.getCmp('raBtnRemoveAll').enable();
            }
        },
        {
            text: 'Disable',
            handler: function () {
                Ext.getCmp('raBtnRemoveAll').disable();
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
    id: 'taBtnAdd',
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
    id: 'taBtnNew',
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
    id: 'taBtnPrint',
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

var historySubToolbar = {
    xtype: 'toolbar',
    dock: 'top',
    items: [
        {
            text: 'View',
            icon: '\/images\/view-icon.png',
            handler: function () {
                console.log('View:  icon clicked');
            },
            id: 'hstryBtnView'
        },
        {
            text: 'Refresh',
            icon: '\/images\/refresh-icon.png',
            handler: function () {
                console.log('Refresh:  icon clicked');
            },
            id: 'hstryBtnRefresh'
        }
    ]
};

var taskAssignmentSubToolbar = {
    xtype: 'toolbar',
    dock: 'top',
    items: [
        newButton,
        {
            text: 'Delete',
            icon: '\/images\/delete-icon.png',
            handler: function () {
                console.log('Delete:  icon clicked');
            },
            id: 'taBtnDelete'
        },
        '|',
        {
            text: 'Add',
            icon: '\/images\/add-icon.png',
            handler: function () {
                console.log('Add:  icon clicked');
            }
        },
        {
            text: 'Unassign',
            icon: '\/images\/unassign-icon.png',
            handler: function () {
                console.log('Unassign:  icon clicked');
            }
        },
        '|',
        {
            text: 'Import',
            icon: '\/images\/import-icon.png',
            handler: function () {
                console.log('Import:  icon clicked');
            },
            id: 'taBtnImport'
        },
        '|',
        {
            text: 'Template',
            icon: '\/images\/template-icon.png',
            handler: function () {
                console.log('Template:  icon clicked');
            },
            id: 'taBtnTemplate'
        },
        '|',
        {
            text: 'View',
            icon: '\/images\/view-icon.png',
            handler: function () {
                console.log('View:  icon clicked');
            },
            id: 'taBtnView'
        },
        {
            text: 'Navigate',
            icon: '\/images\/navigate-icon.png',
            handler: function () {
                console.log('Navigate:  icon clicked');
            },
            id: 'taBtnNavigate'
        },
        '|',
        printButton,
        {
            text: 'Refresh',
            icon: '\/images\/refresh-icon.png',
            handler: function () {
                console.log('Refresh:  icon clicked');
            },
            id: 'taBtnRefresh'
        },
        '|',
        {
            text: 'Enable',
            handler: function () {
                Ext.getCmp('taBtnDelete').enable();
                Ext.getCmp('taBtnView').enable();
                Ext.getCmp('taBtnPrint').enable();
            }
        },
        {
            text: 'Disable',
            handler: function () {
                Ext.getCmp('taBtnDelete').disable();
                Ext.getCmp('taBtnView').disable();
                Ext.getCmp('taBtnPrint').disable();
            }
        }
    ]
};

