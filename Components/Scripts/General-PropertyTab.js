var generalPropertiesTabFormPanel = {

    xtype: 'fieldcontainer',
    layout: {
        type: 'vbox'
    },
    fieldLabel: '',
    height: 410,
    width: 700,
    style: 'margin-left:15px; margin-top:10px;',
    items: 
    [
        {
            xtype: 'fieldcontainer',
            layout: {
                type: 'column'
            },
            fieldLabel: '',
            items: [
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Assigned To',
                    value: 'Kevin Kelth',
                    width: 220,
                    labelWidth: 120,
                    height: 25
                },
                {
                    xtype: 'combobox',
                    cls: 'myComboBoxCSS',
                    triggerCls: 'myComboBoxTriggerCSS',
                    store:ds,
                    queryMode: 'local',
                    displayField: 'text',
                    valueField: 'value',
                    width: 50,
                    editable: false,
                    emptyText: 'Select One',
                    listConfig:{
                        cls:'comboBox_ListBoxCSS'
                    }
                },
                {
                    fieldLabel: 'Permission Mode',
                    xtype: 'combobox',
                    cls: 'myComboBoxCSS',
                    triggerCls: 'myComboBoxTriggerCSS',
                    store:ds,
                    queryMode: 'local',
                    displayField: 'text',
                    valueField: 'value',
                    width: 310,
                    labelWidth: 150,
                    editable: false,
                    emptyText: 'Select One',
                    labelStyle: 'padding-top:5px; padding-left:40px;',
                    listConfig:{
                        cls:'comboBox_ListBoxCSS'
                    }
                }
            ]
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Path',
            value: 'New functional area',
            width: 275,
            labelWidth: 120,
            height: 25
        },
        {
            xtype: 'fieldcontainer',
            layout: {
                type: 'column'
            },
            fieldLabel: '',
            items: [
                {
                    fieldLabel: 'Lifecycle',
                    xtype: 'combobox',
                    cls: 'myComboBoxCSS',
                    triggerCls: 'myComboBoxTriggerCSS',
                    store:ds,
                    queryMode: 'local',
                    displayField: 'text',
                    valueField: 'value',
                    width: 275,
                    labelWidth: 120,
                    editable: false,
                    emptyText: 'Select One',
                    labelStyle: 'padding-top:5px;',
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
                    xtype: 'displayfield',
                    fieldLabel: 'Release',
                    value: 'Release 1',
                    width: 220,
                    labelWidth: 120,
                    height: 25,
                },
                {
                    xtype: 'combobox',
                    cls: 'myComboBoxCSS',
                    triggerCls: 'myComboBoxTriggerCSS',
                    store:ds,
                    queryMode: 'local',
                    displayField: 'text',
                    valueField: 'value',
                    width: 50,
                    editable: false,
                    emptyText: 'Select One',
                    listConfig:{
                        cls:'comboBox_ListBoxCSS'
                    }
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
                    fieldLabel: 'External ID',
                    width: 275,
                    labelWidth: 120,
                    height: 25,
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
                    fieldLabel: 'REQ Category',
                    xtype: 'combobox',
                    cls: 'myComboBoxCSS',
                    triggerCls: 'myComboBoxTriggerCSS',
                    store:ds,
                    queryMode: 'local',
                    displayField: 'text',
                    valueField: 'value',
                    width: 275,
                    labelWidth: 120,
                    editable: false,
                    emptyText: 'Select One',
                    labelStyle: 'padding-top:5px;',
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
                    fieldLabel: 'Requirement Type',
                    xtype: 'combobox',
                    cls: 'myComboBoxCSS',
                    triggerCls: 'myComboBoxTriggerCSS',
                    store:ds,
                    queryMode: 'local',
                    displayField: 'text',
                    valueField: 'value',
                    width: 275,
                    labelWidth: 120,
                    editable: false,
                    emptyText: 'Select One',
                    labelStyle: 'padding-top:5px;',
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
                    fieldLabel: 'Active Phase',
                    xtype: 'combobox',
                    cls: 'myComboBoxCSS',
                    triggerCls: 'myComboBoxTriggerCSS',
                    store:ds,
                    queryMode: 'local',
                    displayField: 'text',
                    valueField: 'value',
                    width: 275,
                    labelWidth: 120,
                    editable: false,
                    emptyText: 'Select One',
                    labelStyle: 'padding-top:5px;',
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
                    fieldLabel: 'Architectural Review Status',
                    xtype: 'combobox',
                    cls: 'myComboBoxCSS',
                    triggerCls: 'myComboBoxTriggerCSS',
                    store:ds,
                    queryMode: 'local',
                    displayField: 'text',
                    valueField: 'value',
                    width: 275,
                    labelWidth: 120,
                    editable: false,
                    emptyText: 'Select One',
                    labelStyle: '',
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
                    fieldLabel: 'Qtr Rel Target Timeframe',
                    xtype: 'combobox',
                    cls: 'myComboBoxCSS',
                    triggerCls: 'myComboBoxTriggerCSS',
                    store:ds,
                    queryMode: 'local',
                    displayField: 'text',
                    valueField: 'value',
                    width: 275,
                    labelWidth: 120,
                    editable: false,
                    emptyText: 'Select One',
                    labelStyle: '',
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
                    fieldLabel: 'Release Theme',
                    xtype: 'combobox',
                    cls: 'myComboBoxCSS',
                    triggerCls: 'myComboBoxTriggerCSS',
                    store:ds,
                    queryMode: 'local',
                    displayField: 'text',
                    valueField: 'value',
                    width: 275,
                    labelWidth: 120,
                    editable: false,
                    emptyText: 'Select One',
                    labelStyle: 'padding-top:5px;',
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
        }
    ]
};