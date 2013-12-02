
var propertiesTabFormPanel = {

    xtype: 'fieldcontainer',
    layout: {
        type: 'vbox'
    },
    fieldLabel: '',
    height:780,
    width: 850,
    style: 'margin-left:10px; margin-top:10px;',                   
       items: [
            {
                xtype: 'fieldcontainer',
                layout: {
                    type: 'column'
                },
                fieldLabel: '',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'CA Release & Patch No. (e.g., C4.1.1p24)',
                        width: 700,
                        labelWidth: 250,
                        height:25,
                        labelStyle:'padding-top:5px',
                        fieldStyle: 'background-color: White; background-image: none; border: 1px solid #B5B8C8; border-radius:5px;'
                    },
                    {
                        xtype: 'button',
                        cls: 'helpInfoButtonCSS',
                        tooltip:'Mene pyaar tumhi se kiya hai.. ho ho ho...',
                        margin : '2 0 0 10'
                    }
                ]
            },
            {
                xtype: 'fieldcontainer',
                layout: {
                    type: 'column'
                },
                fieldLabel: '',
                items: [
                    {
                        xtype: 'datefield',
                        fieldLabel: 'Doc Available Date',
                        labelWidth: 250,
                        width: 400,
                        labelStyle: 'padding-top:5px',
                        fieldStyle: 'background-color: White; background-image: none; border: 1px solid #B5B8C8; border-radius:5px;'
                    },
                    {
                        xtype: 'button',
                        cls: 'helpInfoButtonCSS',
                        tooltip:'Mene pyaar tumhi se kiya hai.. ho ho ho...',
                        margin : '2 0 0 10'
                    }
                ]
            },
            {
                xtype: 'fieldcontainer',
                layout: {
                    type: 'column'
                },
                fieldLabel: '',
                items: [
                    {
                        fieldLabel: 'Resource Group Priority',
                        xtype: 'combobox',
                        cls: 'myComboBoxCSS',
                        triggerCls: 'myComboBoxTriggerCSS',
                        store:ds,
                        queryMode: 'local',
                        displayField: 'text',
                        valueField: 'value',
                        width: 500,
                        labelWidth: 250,
                        editable: false,
                        emptyText: 'Select One',
                        labelStyle:'padding-top:5px',
                        listConfig:{
                            cls:'comboBox_ListBoxCSS'
                        }
                    },
                    {
                        xtype: 'button',
                        cls: 'helpInfoButtonCSS',
                        tooltip:'Mene pyaar tumhi se kiya hai.. ho ho ho...',
                        margin : '2 0 0 10'
                    }
                ]
            },
            {
                xtype: 'fieldcontainer',
                layout: {
                    type: 'column'
                },
                fieldLabel: '',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Platform(s)',
                        width: 700,
                        labelWidth: 250,
                        height:25,
                        labelStyle:'padding-top:5px',
                        fieldStyle: 'background-color: White; background-image: none; border: 1px solid #B5B8C8; border-radius:5px;'
                    },
                    {
                        xtype: 'button',
                        cls: 'helpInfoButtonCSS',
                        tooltip:'Mene pyaar tumhi se kiya hai.. ho ho ho...',
                        margin : '2 0 0 10'
                    }
                ]
            },
           
            {
                xtype: 'fieldcontainer',
                layout: {
                    type: 'column'
                },
                fieldLabel: '',
                items: [
                    {
                        xtype: 'fieldcontainer',
                        height: 170,
                        width: 700,
                        layout: {
                            type: 'column'
                        },
                        fieldLabel: 'Feature Group',
                        labelWidth: 250,
                        items: [
                            {
                                xtype: 'fieldcontainer',
                                height: 270,
                                width: 420,
                                layout: {
                                    align: 'stretch',
                                    type: 'vbox'
                                },
                                fieldLabel: '',
                                items: [
                                    {
                                        xtype: 'fieldcontainer',
                                        height: 30,
                                        
                                        layout: {
                                            type: 'column'
                                        },
                                        fieldLabel: '',
                                        items: [
                                            {
                                                xtype: 'checkboxfield',
                                                fieldLabel: '',
                                                boxLabel: ''
                                            },
                                            {
                                                xtype: 'textfield',
                                                fieldLabel: 'Accounting',
                                                width: 400,
                                                labelWidth: 150,
                                                height:25,
                                                labelStyle:'padding-left:5px',
                                                fieldStyle: 'background-color: White; background-image: none; border: 1px solid #B5B8C8; border-radius:5px;'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        height: 30,
                                        
                                        layout: {
                                            type: 'column'
                                        },
                                        fieldLabel: '',
                                        items: [
                                            {
                                                xtype: 'checkboxfield',
                                                fieldLabel: '',
                                                boxLabel: ''
                                            },
                                            {
                                                xtype: 'textfield',
                                                fieldLabel: 'ACP',
                                                width: 400,
                                                labelWidth: 150,
                                                height:25,
                                                labelStyle:'padding-left:5px',
                                                fieldStyle: 'background-color: White; background-image: none; border: 1px solid #B5B8C8; border-radius:5px;'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        height: 30,
                                        width: 479,
                                        layout: {
                                            type: 'column'
                                        },
                                        fieldLabel: '',
                                        items: [
                                            {
                                                xtype: 'checkboxfield',
                                                fieldLabel: '',
                                                boxLabel: ''
                                            },
                                            {
                                                xtype: 'textfield',
                                                fieldLabel: 'Admin Security',
                                                width: 400,
                                                labelWidth: 150,
                                                height:25,
                                                labelStyle:'padding-left:5px',
                                                fieldStyle: 'background-color: White; background-image: none; border: 1px solid #B5B8C8; border-radius:5px;'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        height: 30,
                                        
                                        layout: {
                                            type: 'column'
                                        },
                                        fieldLabel: '',
                                        items: [
                                            {
                                                xtype: 'checkboxfield',
                                                fieldLabel: '',
                                                boxLabel: ''
                                            },
                                            {
                                                xtype: 'textfield',
                                                fieldLabel: 'Base',
                                                width: 400,
                                                labelWidth: 150,
                                                height:25,
                                                labelStyle:'padding-left:5px',
                                                fieldStyle: 'background-color: White; background-image: none; border: 1px solid #B5B8C8; border-radius:5px;'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        height: 30,
                                        
                                        layout: {
                                            type: 'column'
                                        },
                                        fieldLabel: '',
                                        items: [
                                            {
                                                xtype: 'checkboxfield',
                                                fieldLabel: '',
                                                boxLabel: ''
                                            },
                                            {
                                                xtype: 'textfield',
                                                fieldLabel: 'BGF',
                                                width: 400,
                                                labelWidth: 150,
                                                height:25,
                                                labelStyle:'padding-left:5px',
                                                fieldStyle: 'background-color: White; background-image: none; border: 1px solid #B5B8C8; border-radius:5px;'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        height: 30,
                                        
                                        layout: {
                                            type: 'column'
                                        },
                                        fieldLabel: '',
                                        items: [
                                            {
                                                xtype: 'checkboxfield',
                                                fieldLabel: '',
                                                boxLabel: ''
                                            },
                                            {
                                                xtype: 'textfield',
                                                fieldLabel: 'Base',
                                                width: 400,
                                                labelWidth: 150,
                                                height:25,
                                                labelStyle:'padding-left:5px',
                                                fieldStyle: 'background-color: White; background-image: none; border: 1px solid #B5B8C8; border-radius:5px;'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        height: 30,
                                        
                                        layout: {
                                            type: 'column'
                                        },
                                        fieldLabel: '',
                                        items: [
                                            {
                                                xtype: 'checkboxfield',
                                                fieldLabel: '',
                                                boxLabel: ''
                                            },
                                            {
                                                xtype: 'textfield',
                                                fieldLabel: 'Base',
                                                width: 400,
                                                labelWidth: 150,
                                                height:25,
                                                labelStyle:'padding-left:5px',
                                                fieldStyle: 'background-color: White; background-image: none; border: 1px solid #B5B8C8; border-radius:5px;'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'fieldcontainer',
                                        height: 30,
                                        
                                        layout: {
                                            type: 'column'
                                        },
                                        fieldLabel: '',
                                        items: [
                                            {
                                                xtype: 'checkboxfield',
                                                fieldLabel: '',
                                                boxLabel: ''
                                            },
                                            {
                                                xtype: 'textfield',
                                                fieldLabel: 'Base',
                                                width: 400,
                                                labelWidth: 150,
                                                height:25,
                                                labelStyle:'padding-left:5px',
                                                fieldStyle: 'background-color: White; background-image: none; border: 1px solid #B5B8C8; border-radius:5px;'
                                                
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        cls: 'helpInfoButtonCSS',
                        tooltip:'Mene pyaar tumhi se kiya hai.. ho ho ho...',
                        margin : '2 0 0 10'
                    }
                ]
            },
            {
                xtype: 'fieldcontainer',
                layout: {
                    type: 'column'
                },
                fieldLabel: '',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Marketing: Functional Area',
                        width: 700,
                        labelWidth: 250,
                        height:25,
                        labelStyle:'padding-top:5px',
                        fieldStyle: 'background-color: White; background-image: none; border: 1px solid #B5B8C8; border-radius:5px;'
                    },
                    {
                        xtype: 'button',
                        cls: 'helpInfoButtonCSS',
                        tooltip:'Mene pyaar tumhi se kiya hai.. ho ho ho...',
                        margin : '2 0 0 10'
                    }
                ]
            },
            {
                xtype: 'fieldcontainer',
                layout: {
                    type: 'column'
                },
                fieldLabel: '',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Marketing: Border Type',
                        width: 700,
                        labelWidth: 250,
                        height:25,
                        labelStyle:'padding-top:5px',
                        fieldStyle: 'background-color: White; background-image: none; border: 1px solid #B5B8C8; border-radius:5px;'
                    },
                    {
                        xtype: 'button',
                        cls: 'helpInfoButtonCSS',
                        tooltip:'Mene pyaar tumhi se kiya hai.. ho ho ho...',
                        margin : '2 0 0 10'
                    }
                ]
            },
            {
                xtype: 'fieldcontainer',
                layout: {
                    type: 'column'
                },
                fieldLabel: '',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Marketing: Control functions',
                        width: 700,
                        labelWidth: 250,
                        height:25,
                        labelStyle:'padding-top:5px',
                        fieldStyle: 'background-color: White; background-image: none; border: 1px solid #B5B8C8; border-radius:5px;'
                    },
                    {
                        xtype: 'button',
                        cls: 'helpInfoButtonCSS',
                        tooltip:'Mene pyaar tumhi se kiya hai.. ho ho ho...',
                        margin : '2 0 0 10'
                    }
                ]
            },
            {
                xtype: 'fieldcontainer',
                layout: {
                    type: 'column'
                },
                fieldLabel: '',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Marketing: Platform benefits:',
                        width: 700,
                        labelWidth: 250,
                        height:25,
                        labelStyle:'padding-top:5px',
                        fieldStyle: 'background-color: White; background-image: none; border: 1px solid #B5B8C8; border-radius:5px;'
                    },
                    {
                        xtype: 'button',
                        cls: 'helpInfoButtonCSS',
                        tooltip:'Mene pyaar tumhi se kiya hai.. ho ho ho...',
                        margin : '2 0 0 10'
                    }
                ]
            },
            {
                xtype: 'fieldcontainer',
                layout: {
                    type: 'column'
                },
                fieldLabel: '',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Marketing: Protocol',
                        width: 700,
                        labelWidth: 250,
                        height:25,
                        labelStyle:'padding-top:5px',
                        fieldStyle: 'background-color: White; background-image: none; border: 1px solid #B5B8C8; border-radius:5px;'
                    },
                    {
                        xtype: 'button',
                        cls: 'helpInfoButtonCSS',
                        tooltip:'Mene pyaar tumhi se kiya hai.. ho ho ho...',
                        margin : '2 0 0 10'
                    }
                ]
            },
            {
                xtype: 'fieldcontainer',
                layout: {
                    type: 'column'
                },
                fieldLabel: '',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Marketing: Configuration types',
                        width: 700,
                        labelWidth: 250,
                        height:25,
                        labelStyle:'padding-top:5px',
                        fieldStyle: 'background-color: White; background-image: none; border: 1px solid #B5B8C8; border-radius:5px;'
                    },
                    {
                        xtype: 'button',
                        cls: 'helpInfoButtonCSS',
                        tooltip:'Mene pyaar tumhi se kiya hai.. ho ho ho...',
                        margin : '2 0 0 10'
                    }
                ]
            },
            {
                xtype: 'fieldcontainer',
                layout: {
                    type: 'column'
                },
                fieldLabel: '',
                items: [
                    {
                        fieldLabel: 'Eng definition support requested',
                        xtype: 'combobox',
                        cls: 'myComboBoxCSS',
                        triggerCls: 'myComboBoxTriggerCSS',
                        store:ds,
                        queryMode: 'local',
                        displayField: 'text',
                        valueField: 'value',
                        width: 400,
                        labelWidth: 250,
                        editable: false,
                        emptyText: 'Select One',
                        labelStyle:'padding-top:5px',
                        listConfig:{
                            cls:'comboBox_ListBoxCSS'
                        }
                    },
                    {
                        xtype: 'button',
                        cls: 'helpInfoButtonCSS',
                        tooltip:'Mene pyaar tumhi se kiya hai.. ho ho ho...',
                        margin : '2 0 0 10'
                    }
                ]
            },
            {
                xtype: 'fieldcontainer',
                layout: {
                    type: 'column'
                },
                fieldLabel: '',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Priority for Scoping',
                        width: 500,
                        labelWidth: 250,
                        height:25,
                        labelStyle:'padding-top:5px',
                        fieldStyle: 'background-color: White; background-image: none; border: 1px solid #B5B8C8; border-radius:5px;'
                    },
                    {
                        xtype: 'button',
                        cls: 'helpInfoButtonCSS',
                        tooltip:'Mene pyaar tumhi se kiya hai.. ho ho ho...',
                        margin : '2 0 0 10'
                    }
                ]
            },
            {
                xtype: 'fieldcontainer',
                layout: {
                    type: 'column'
                },
                fieldLabel: '',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Primary Driver',
                        width: 700,
                        labelWidth: 250,
                        height:25,
                        labelStyle:'padding-top:5px',
                        fieldStyle: 'background-color: White; background-image: none; border: 1px solid #B5B8C8; border-radius:5px;'
                    },
                    {
                        xtype: 'button',
                        cls: 'helpInfoButtonCSS',
                        tooltip:'Mene pyaar tumhi se kiya hai.. ho ho ho...',
                        margin : '2 0 0 10'
                    }
                ]
            },
            {
                xtype: 'fieldcontainer',
                layout: {
                    type: 'column'
                },
                fieldLabel: '',
                items: [
                    {
                        fieldLabel: 'Single',
                        xtype: 'combobox',
                        cls: 'myComboBoxCSS',
                        triggerCls: 'myComboBoxTriggerCSS',
                        store:ds,
                        queryMode: 'local',
                        displayField: 'text',
                        valueField: 'value',
                        width: 400,
                        labelWidth: 250,
                        editable: false,
                        emptyText: 'Select One',
                        labelStyle:'padding-top:5px',
                        listConfig:{
                            cls:'comboBox_ListBoxCSS'
                        }
                    },
                    {
                        xtype: 'button',
                        cls: 'helpInfoButtonCSS',
                        tooltip:'Mene pyaar tumhi se kiya hai.. ho ho ho...',
                        margin : '2 0 0 10'
                    }
                ]
            },
            {
                xtype: 'fieldcontainer',
                layout: {
                    type: 'column'
                },
                fieldLabel: '',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Multi',
                        width: 700,
                        labelWidth: 250,
                        height:25,
                        labelStyle:'padding-top:5px',
                        fieldStyle: 'background-color: White; background-image: none; border: 1px solid #B5B8C8; border-radius:5px;'
                    },
                    {
                        xtype: 'button',
                        cls: 'helpInfoButtonCSS',
                        tooltip:'Mene pyaar tumhi se kiya hai.. ho ho ho...',
                        margin : '2 0 0 10'
                    }
                ]
            },
            
            {
                xtype: 'fieldcontainer',
                layout: {
                    type: 'column'
                },
                fieldLabel: '',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'New Property6941',
                        width: 700,
                        labelWidth: 250,
                        height:25,
                        labelStyle:'padding-top:5px',
                        fieldStyle: 'background-color: White; background-image: none; border: 1px solid #B5B8C8; border-radius:5px;'
                    },
                    {
                        xtype: 'button',
                        cls: 'helpInfoButtonCSS',
                        tooltip:'Mene pyaar tumhi se kiya hai.. ho ho ho...',
                        margin : '2 0 0 10'
                    }
                ]
            },
            {
                xtype: 'fieldcontainer',
                layout: {
                    type: 'column'
                },
                fieldLabel: '',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Demo Property',
                        width: 700,
                        labelWidth: 250,
                        height:25,
                        labelStyle:'padding-top:5px',
                        fieldStyle: 'background-color: White; background-image: none; border: 1px solid #B5B8C8; border-radius:5px;'
                    },
                    {
                        xtype: 'button',
                        cls: 'helpInfoButtonCSS',
                        tooltip:'Mene pyaar tumhi se kiya hai.. ho ho ho...',
                        margin : '2 0 0 10'
                    }
                ]
            }
        ]
        };

    