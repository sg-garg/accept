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
                // records will have an "Description" tag
                record: 'Description',
                idProperty: '@ac-ID'
            }
        },
		
		listeners: {
			datachanged: function(store){ // 2nd; data items populated, controls still empty
				if(this.getCount() > 0){
					console.log('addionalPlansstore datachanged');
					Ext.getCmp('btnRemove').enable();
					Ext.getCmp('btnRemoveFromAll').enable();
					
				}else{
					console.log('No records.');
					Ext.getCmp('btnRemove').disable();
					Ext.getCmp('btnRemoveFromAll').disable();
				}
			
			}
		}
		
    });
	
var priorities = Ext.create('Ext.data.Store', {
    fields: ['name'],
    data: [
                { name: 'Unknown'},
                { name: 'Low' },
                { name: 'Low-medium'},
                { name: 'Medium-high'},
                { name: 'High' },
                { name: 'Must'}
            ]
});
//Function to remove selected row from Grid.
function onRemoveClick(){
	    console.log('onRemoveClick: function called');	
		//console.log('Remove:  icon clicked');
				//planAdditionalReleaseGrid.getStore().removeAt(0);
				var sm = planAdditionalReleaseGrid.getSelectionModel();
				console.log('SM:'+sm.getSelection()+'garg');
                //rowEditing.cancelEdit();
				if(sm.getSelection() == ""){
					Ext.MessageBox.alert('Error', 'Please Select a Record');
				}else{
					addionalPlansstore.remove(sm.getSelection());
					if (addionalPlansstore.getCount() > 0) {
						sm.select(0);
					}
				}
}

// Function to Add additional release inside addional release grid on click of add button	
function addAdditionalPlan(){
		
		var form = Ext.widget('form', {
                /*layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                border: false,
                bodyPadding: 10,

                fieldDefaults: {
                    labelAlign: 'top',
                    labelWidth: 100,
                    labelStyle: 'font-weight:bold'
                },*/
                items: [
                       {
							xtype: 'textfield',
							fieldLabel: 'Select Additional Release',
							//afterLabelTextTpl: required,
							name:'release',
							id: 'release',
							allowBlank: false
						},
						{
							xtype: 'combobox',
							fieldLabel: 'Plan Priority',
							name: 'planPriority',
							id: 'planPriority',
							editable: false,
							store: priorities,
							queryMode: 'local',
							displayField: 'name',
							valueField: 'name',
							value: 'Unknown',
							autoSelect:true,
							forceSelection:true
						}
				],
				
				 buttons: [{
                    text: 'Ok',
                    handler: function() {
                        if (this.up('form').getForm().isValid()) {
                            // In a real application, this would submit the form to the configured url
							var rec = new Ext.create('addionalPlansModel', {
									Name: Ext.getCmp('release').getValue(),
									PlanPriority: Ext.getCmp('planPriority').getValue(), 
									Lifecycle: 'Normal',
									AssignedTo: 'John'
							});
							planAdditionalReleaseGrid.getStore().insert(0, rec);
                            this.up('form').getForm().reset();
                            this.up('window').hide();
                            Ext.MessageBox.alert('Success', 'Record added successfully');
                        }else{
							Ext.MessageBox.alert('Error', 'Please Select Release');
						}
                    }
                },
				
				{
                    text: 'Cancel',
                    handler: function() {
                        this.up('form').getForm().reset();
                        this.up('window').hide();
                    }
                }
				
				
				]
				
				});
				var win = Ext.widget('window', {
                title: 'Select Additional Release',
                closeAction: 'hide',
                width: 300,
                height: 150,
                layout: 'fit',
                resizable: true,
                modal: true,
                items: form
            });
			
			
			win.show();
				
				
}
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
            handler: addAdditionalPlan,
			id: 'btnAdd'
        },
        {
            text: 'Remove',
            icon: '\/images\/remove-icon.png',
			//scope: this,
            handler: onRemoveClick,
            id: 'btnRemove'
        },
        {
            text: 'Remove from All',
            icon: '\/images\/remove-icon.png',
            handler: function () {
                console.log('Remove from All:  icon clicked');
				addionalPlansstore.removeAll();
				addionalPlansstore.fireEvent('datachanged',addionalPlansstore);
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
		],
		listeners: {
			click: {
				element: 'el', //bind to the underlying el property on the panel
				fn: function(){ console.log('click el'); }
			},
			dblclick: {
				element: 'body', //bind to the underlying body property on the panel
				fn: function(){ console.log('dblclick body'); }
			}		
		}
		
	});




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
    });
