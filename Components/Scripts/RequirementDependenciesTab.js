var rdUpStreamSubToolbar = {
    xtype: 'toolbar',
    dock: 'top',
    items: [
        {
            text: 'Add',
            icon: '\/images\/add-icon.png',
            handler: function () {
                console.log('Add:  icon clicked');
            },
            id: 'rdUpStreamBtnAdd'
        },
        {
            text: 'Remove',
            icon: '\/images\/remove-icon.png',
            handler: function () {
                console.log('Remove:  icon clicked');
            },
            id: 'rdUpStreamBtnRemove'
        },
        {
            text: 'View',
            icon: '\/images\/view-icon.png',
            handler: function () {
                console.log('View:  icon clicked');
            },
            id: 'rdUpStreamBtnView'
        },
        {
            text: 'Navigate',
            icon: '\/images\/navigate-icon.png',
            handler: function () {
                console.log('Navigate:  icon clicked');
            },
            id: 'rdUpStreamBtnNavigate'
        },
        {
            text: 'Refresh',
            icon: '\/images\/refresh-icon.png',
            handler: function () {
                console.log('Referesh:  icon clicked');
            },
            id: 'rdUpStreamBtnRefresh'
        }
        , '|',
        {
            text: 'Enable',
            handler: function () {
                Ext.getCmp('rdUpStreamBtnRemove').enable();
                Ext.getCmp('rdUpStreamBtnView').enable();
                Ext.getCmp('rdUpStreamBtnNavigate').enable();
            }
        },
        {
            text: 'Disable',
            handler: function () {
                Ext.getCmp('rdUpStreamBtnRemove').disable();
                Ext.getCmp('rdUpStreamBtnView').disable();
                Ext.getCmp('rdUpStreamBtnNavigate').disable();
            }
        }
    ]
};

var rdDownStreamSubToolbar = {
        xtype: 'toolbar',
        dock: 'top',
        items: [
        {
            text: 'Add',
            icon: '\/images\/add-icon.png',
            handler: function () {
                console.log('Add:  icon clicked');
            },
            id: 'rdDownStreamBtnAdd'
        },
        {
            text: 'Remove',
            icon: '\/images\/remove-icon.png',
            handler: function () {
                console.log('Remove:  icon clicked');
            },
            id: 'rdDownStreamBtnRemove'
        },
        {
            text: 'View',
            icon: '\/images\/view-icon.png',
            handler: function () {
                console.log('View:  icon clicked');
            },
            id: 'rdDownStreamBtnView'
        },
        {
            text: 'Navigate',
            icon: '\/images\/navigate-icon.png',
            handler: function () {
                console.log('Navigate:  icon clicked');
            },
            id: 'rdDownStreamBtnNavigate'
        },
        {
            text: 'Refresh',
            icon: '\/images\/refresh-icon.png',
            handler: function () {
                console.log('Referesh:  icon clicked');
            },
            id: 'rdDownStreamBtnRefresh'
        }
        , '|',
        {
            text: 'Enable',
            handler: function () {
                Ext.getCmp('rdDownStreamBtnRemove').enable();
                Ext.getCmp('rdDownStreamBtnView').enable();
                Ext.getCmp('rdDownStreamBtnNavigate').enable();
            }
        },
        {
            text: 'Disable',
            handler: function () {
                Ext.getCmp('rdDownStreamBtnRemove').disable();
                Ext.getCmp('rdDownStreamBtnView').disable();
                Ext.getCmp('rdDownStreamBtnNavigate').disable();
            }
        }
    ]
};

var rdCoDependentSubToolbar = {
        xtype: 'toolbar',
        dock: 'top',
        items: [
        {
            text: 'Add',
            icon: '\/images\/add-icon.png',
            handler: function () {
                console.log('Add:  icon clicked');
            },
            id: 'rdCoDependentBtnAdd'
        },
        {
            text: 'Remove',
            icon: '\/images\/remove-icon.png',
            handler: function () {
                console.log('Remove:  icon clicked');
            },
            id: 'rdCoDependentBtnRemove'
        },
        {
            text: 'View',
            icon: '\/images\/view-icon.png',
            handler: function () {
                console.log('View:  icon clicked');
            },
            id: 'rdCoDependentBtnView'
        },
        {
            text: 'Navigate',
            icon: '\/images\/navigate-icon.png',
            handler: function () {
                console.log('Navigate:  icon clicked');
            },
            id: 'rdCoDependentBtnNavigate'
        },
        {
            text: 'Refresh',
            icon: '\/images\/refresh-icon.png',
            handler: function () {
                console.log('Referesh:  icon clicked');
            },
            id: 'rdCoDependentBtnRefresh'
        }
        , '|',
        {
            text: 'Enable',
            handler: function () {
                Ext.getCmp('rdCoDependentBtnRemove').enable();
                Ext.getCmp('rdCoDependentBtnView').enable();
                Ext.getCmp('rdCoDependentBtnNavigate').enable();
            }
        },
        {
            text: 'Disable',
            handler: function () {
                Ext.getCmp('rdCoDependentBtnRemove').disable();
                Ext.getCmp('rdCoDependentBtnView').disable();
                Ext.getCmp('rdCoDependentBtnNavigate').disable();
            }
        }
    ]
};