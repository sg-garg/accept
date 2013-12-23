var plansSubToolbar = {
    xtype: 'toolbar',
    height: 40,
    dock: 'top',
    items: [
        {
            xtype: 'tbtext',
            text: '<img src="\/images\/release-icon.png"/> Release: <a href="#">Release NN3000 & NN4000 Series</a>'
        },
        {
            tooltip: 'Note',
            icon: '\/images\/india-note-icon.png',
            handler: function () {
                console.log('Note: icon clicked');
            }
        },
        '->',
        {
            text: 'Assign to Release',
            icon: '\/images\/assign-release-icon.png',
            handler: function () {
                console.log('Assign to Release:  icon clicked');
            }
        },
        '|',
        {
            text: 'Unassign',
            icon: '\/images\/unassign-icon.png',
            handler: function () {
                console.log('Unassign:  icon clicked');
            }
        },
        '|',
        {
            text: 'Navigate',
            icon: '\/images\/navigate-icon.png',
            handler: function () {
                console.log('Navigate:  icon clicked');
            }
        }
    ]
};


var planAdditionalReleaseSubToolbar = {
    xtype: 'toolbar',
    dock: 'top',
    items: [
        
    ]
};

var planScenariosReleaseSubToolbar = {
        xtype: 'toolbar',
        dock: 'top',
        items: [
        
    ]
};





Ext.define('addionalPlansModel',{
        extend: 'Ext.data.Model',
        fields: [
            // set up the fields mapping into the xml doc
            
            {name: 'Name', mapping: '@ac-NAME'},
			{name: 'PlanPriority', mapping: '@ac-PLAN_PRIORITY'},
			{name: 'Lifecycle', mapping: '@ac-PLAN_LIFECYCLE'},
			{name: 'AssignedTo', mapping: '@ac-OWNER_NAME'}
            
        ]
    });

    // create the Data Store
    var addionalPlansstore = Ext.create('Ext.data.Store', {
        model: 'addionalPlansModel',
        autoLoad: true,
        proxy: {
            // load using HTTP
            type: 'ajax',
            url: '/Data/PlansSampleData-1.xml',
            // the return will be XML, so lets set up a reader
            reader: {
                type: 'xml',
                // records will have an "Item" tag
				
                record: 'Description',
                idProperty: '@ac-ID'
            }
        }
    });

    // create the grid
    var planAdditionalReleaseGrid = Ext.create('Ext.grid.Panel', 
		
		{	
        xtype: 'gridpanel',
		store: addionalPlansstore,
        columns: [
            {text: "Name", flex: 1, dataIndex: 'Name', sortable: true},
            {text: "Plan Priority", width: 180, dataIndex: 'PlanPriority', sortable: true},
            {text: "Lifecycle", width: 115, dataIndex: 'Lifecycle', sortable: true},
            {text: "Assigned to", width: 100, dataIndex: 'AssignedTo', sortable: true}
        ],
		 tbar: [
			{
            text: 'Add',
            icon: '\/images\/add-icon.png',
            handler: function () {
                console.log('Add:  icon clicked');
            },
            id: 'btnAdd'
        },
        {
            text: 'Remove',
            icon: '\/images\/remove-icon.png',
            handler: function () {
                console.log('Remove:  icon clicked');
            },
            id: 'btnRemove'
        },
        {
            text: 'Remove from All',
            icon: '\/images\/remove-icon.png',
            handler: function () {
                console.log('Remove from All:  icon clicked');
            },
            id: 'btnRemoveFromAll'
        },
        '|',
        {
            text: 'Make Primary Release',
            icon: '\/images\/primary-release-icon.png',
            handler: function () {
                console.log('Make Primary Release:  icon clicked');
            },
            id: 'btnMakePrimaryRelease'
        },
        '|',
        {
            text: 'View',
            icon: '\/images\/view-icon.png',
            handler: function () {
                console.log('View:  icon clicked');
            },
            id: 'btnView'
        },
        {
            text: 'Navigate',
            icon: '\/images\/navigate-icon.png',
            handler: function () {
                console.log('Navigate:  icon clicked');
            },
            id: 'btnNavigate'
        },
        '|',
        {
            text: 'Refresh',
            icon: '\/images\/refresh-icon.png',
            handler: function () {
                console.log('Referesh:  icon clicked');
            },
            id: 'btnRefresh'
        }
        , '|',
        {
            text: 'Enable',
            handler: function () {
                Ext.getCmp('btnRemove').enable();
                Ext.getCmp('btnRemoveFromAll').enable();
                Ext.getCmp('btnMakePrimaryRelease').enable();
                Ext.getCmp('btnView').enable();
                Ext.getCmp('btnNavigate').enable();
            }
        },
        {
            text: 'Disable',
            handler: function () {
                Ext.getCmp('btnRemove').disable();
                Ext.getCmp('btnRemoveFromAll').disable();
                Ext.getCmp('btnMakePrimaryRelease').disable();
                Ext.getCmp('btnView').disable();
                Ext.getCmp('btnNavigate').disable();
            }
        }
		]
		
		
       // renderTo:'plans-grid-1',
        //width: 540,
        //height: 200
    });
//});


//Scenarios Containing this requirement grid
    Ext.define('scenariosPlanModel',{
        extend: 'Ext.data.Model',
        fields: [
            // set up the fields mapping into the xml doc
            {name: 'Name', mapping: '@ac-NAME'},
			{name: 'PlanPriority', mapping: '@ac-PLAN_PRIORITY'},
			{name: 'AssignedTo', mapping: '@ac-OWNER_NAME'}
            
        ]
    });

    // create the Data Store
    var scenariosPlanStore = Ext.create('Ext.data.Store', {
        model: 'scenariosPlanModel',
        autoLoad: true,
        proxy: {
            // load using HTTP
            type: 'ajax',
            url: '/Data/PlansSampleData-2.xml',
            // the return will be XML, so lets set up a reader
            reader: {
                type: 'xml',
                // records will have an "Item" tag
				
                record: 'Description',
                idProperty: '@ac-ID'
            }
        }
    });

    // create the grid
    var planScenariosGrid = Ext.create('Ext.grid.Panel', 
		
		{	
        xtype: 'gridpanel',
		store: scenariosPlanStore,
        columns: [
            {text: "Name", flex: 1, dataIndex: 'Name', sortable: true},
            {text: "Plan Priority", width: 180, dataIndex: 'PlanPriority', sortable: true},
            {text: "Assigned to", width: 100, dataIndex: 'AssignedTo', sortable: true}
        ],
		tbar: [
			{
            text: 'Add',
            icon: '\/images\/add-icon.png',
            handler: function () {
                console.log('Add:  icon clicked');
            },
            id: 'scenariosBtnAdd'
        },
        {
            text: 'Remove',
            icon: '\/images\/remove-icon.png',
            handler: function () {
                console.log('Remove:  icon clicked');
            },
            id: 'scenariosBtnRemove'
        },
        {
            text: 'Remove from All',
            icon: '\/images\/remove-icon.png',
            handler: function () {
                console.log('Remove from All:  icon clicked');
            },
            id: 'scenariosBtnRemoveFromAll'
        },
        '|',
        {
            text: 'View',
            icon: '\/images\/view-icon.png',
            handler: function () {
                console.log('View:  icon clicked');
            },
            id: 'scenariosBtnView'
        },
        {
            text: 'Navigate',
            icon: '\/images\/navigate-icon.png',
            handler: function () {
                console.log('Navigate:  icon clicked');
            },
            id: 'scenariosBtnNavigate'
        },
        '|',
        {
            text: 'Refresh',
            icon: '\/images\/refresh-icon.png',
            handler: function () {
                console.log('Referesh:  icon clicked');
            },
            id: 'scenariosBtnRefresh'
        }
        , '|',
        {
            text: 'Enable',
            handler: function () {
                Ext.getCmp('scenariosBtnRemove').enable();
                Ext.getCmp('scenariosBtnRemoveFromAll').enable();
               Ext.getCmp('scenariosBtnView').enable();
                Ext.getCmp('scenariosBtnNavigate').enable();
            }
        },
        {
            text: 'Disable',
            handler: function () {
                Ext.getCmp('scenariosBtnRemove').disable();
                Ext.getCmp('scenariosBtnRemoveFromAll').disable();
                Ext.getCmp('scenariosBtnView').disable();
                Ext.getCmp('scenariosBtnNavigate').disable();
            }
        }
		]
       // renderTo:'plans-grid-1',
        //width: 540,
        //height: 200
    });
