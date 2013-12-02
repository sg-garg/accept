var copyLinkButtonMenu = Ext.create('Ext.menu.Menu', {
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
var copyLinkButton = Ext.create('Ext.button.Split', {
    text: 'Copy Link',
    icon: '\/images\/copy-link-icon.png',
    handler: function () {
        console.log('Copy Link Handler');
    },
    menu: copyLinkButtonMenu
});

copyLinkButton.on({
    click: function () {
        copyLinkButton.showMenu();
    },
    mouseover: function () {
        copyLinkButton.showMenu();
    },
    scope: this
});

var relationshipsButtonMenu = Ext.create('Ext.menu.Menu', {
    xtype: 'menu',
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
var relationshipsButton = Ext.create('Ext.button.Split', {
    text: 'Relationships: 1',
    icon: '\/images\/relations_icon.png',
    handler: function () {
        console.log('Relationships: 1 Handler');
    },
    menu: relationshipsButtonMenu
});

relationshipsButton.on({
    click: function () {
        relationshipsButton.showMenu();
    },
    mouseover: function () {
        relationshipsButton.showMenu();
    },
    scope: this
});
var generalSubToolbar = {
        xtype: 'toolbar',
        height: 30,
        dock: 'top',
        items: [
            copyLinkButton,
            relationshipsButton,
            {
                text: 'Dependencies: None',
                icon: '\/images\/dependencies_icon.png',
                handler: function () {
                    console.log('Dependencies: None icon clicked');
                }
            },
            {
                text: 'Tasks: None',
                icon: '\/images\/task_link_icon.png',
                handler: function () {
                    console.log('Tasks: None icon clicked');
                }
            }
        ]
        };

        var generalDescriptionFormPanel = {
            xtype: 'fieldcontainer',
            layout: {
                type: 'vbox'
            },
            fieldLabel: '',
            width: 650,
            style: 'margin-left:30px; margin-top:10px;',
    
            items: [
                {
                    xtype: 'textfield',
                    width: 600,
                    height: 25,
                    fieldLabel: 'Name',
                    labelWidth: 150,
                    fieldStyle: 'background-color: White; background-image: none; border: 1px solid #B5B8C8; border-radius:5px;'
                },
                {
                    xtype: 'textareafield',
                    height: 140,
                    width: 600,
                    fieldLabel: 'Brief Description',
                    labelWidth: 150,
                    labelStyle: 'padding-top:10px',
                    fieldStyle: 'background-color: White; background-image: none; border: 1px solid #B5B8C8; border-radius:5px;'
                },
                {
                    xtype: 'container',
                    flex: 1,
                    height: 20,
                    width: 700,
                    layout: {
                        type: 'column'
                    },
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            height: 20,
                            width: 155,
                            fieldLabel: ''
                        },
                        {
                            xtype: 'fieldcontainer',
                            height: 20,
                            width: 300,
                            layout: {
                                type: 'column'
                            },
                            fieldLabel: '',
                            items: [
                                {
                                    xtype: 'label',
                                    height: 20,
                                    width: 50,
                                    text: 'SN 123:',
                                    style: 'font-weight: bold'
                                },
                                {
                                    xtype: 'label',
                                    height: 20,
                                    width: 60,
                                    text: '4172'
                                },
                                {
                                    xtype: 'label',
                                    height: 20,
                                    width: 60,
                                    text: 'Revision:',
                                    style: 'font-weight: bold'
                                },
                                {
                                    xtype: 'label',
                                    height: 20,
                                    width: 60,
                                    text: '1'
                                }
                            ]
                        }
                    ]
                }
            ]
        };

        var generalVerticalTabNameDiplay = {
            xtype: 'label',
            text: 'Properties',
            id: 'generalVerticalTabNameDiplayID',
            cls:'generalVerticalTabNameDiplayCSS'
        };

        var propertyPanel = {
            xtype:'panel',
            id: 'propertyCardLayoutGeneral',
            items: generalPropertiesTabFormPanel,
            autoScroll:true,
        };

        var attachementsPanel = {
            xtype:'panel',
            html:'Attachements Panel',
            id:'attachementsCardLayoutGeneral'
        };

        var notesNDiscussionsPanel = {
            xtype:'panel',
            html:'Notes & Discussions Panel',
            id:'notesNDiscussionsCardLayoutGeneral'
        };

        var activitiesPanel = {
            xtype:'panel',
            html:'Activity Panel',
            id:'activitiesCardLayoutGeneral'
        };
         
        var stackholdersPanel = {
            xtype:'panel',
            html:'Stackholders Panel',
            id:'stackholdersCardLayoutGeneral'
        };

        var revisionsPanel = {
            xtype:'panel',
            html:'Revisions Panel',
            id:'revisionsCardLayoutGeneral'
        };

        var historyPanel = {
            xtype:'panel',
            html:'History Panel',
            id:'historyCardLayoutGeneral'
        };

        function tabUnSelection(tabName) {
            Ext.getCmp('generalVerticalTabNameDiplayID').setText(tabName);
            Ext.fly('propertiesGeneralBtnID').removeCls('propertiesGeneralBtnSelected');
            Ext.fly('attachementsGeneralBtnID').removeCls('attachementsGeneralBtnSelected');
            Ext.fly('notesNDiscussionsGeneralBtnID').removeCls('notesNDiscussionsGeneralBtnSelected');
            Ext.fly('activitiesGeneralBtnID').removeCls('activitiesGeneralBtnSelected');
            Ext.fly('stackholdersGeneralBtnID').removeCls('stackholdersGeneralBtnSelected');
            Ext.fly('revisionsGeneralBtnID').removeCls('revisionsGeneralBtnSelected');
            Ext.fly('historyGeneralBtnID').removeCls('historyGeneralBtnSelected');
        }
        var a1= {
            xtype:'button',
            height:35,
            textAlign:'left',
            text: 'Properties',
            cls: 'propertiesGeneralBtn',
            id: 'propertiesGeneralBtnID',
            handler: function () {
                tabUnSelection(this.getText());
                Ext.getCmp('cardLayoutGeneral').getLayout().setActiveItem('propertyCardLayoutGeneral');
                this.addClass('propertiesGeneralBtnSelected');
            }
        };
        var a2 = {
            xtype: 'button',
            height: 35,
            textAlign: 'left',
            text: 'Attachements',
            cls: 'attachementsGeneralBtn',
            id: 'attachementsGeneralBtnID',
            handler: function () {
                tabUnSelection(this.getText());
                Ext.getCmp('cardLayoutGeneral').getLayout().setActiveItem('attachementsCardLayoutGeneral');
                this.addClass('attachementsGeneralBtnSelected');
            }
        };
        var a3 = {
            xtype:'button',
            height:35,
            textAlign:'left',
            text: 'Notes & Discussions',
            cls:'notesNDiscussionsGeneralBtn',
            id: 'notesNDiscussionsGeneralBtnID',
            handler: function () {
                tabUnSelection(this.getText());
                Ext.getCmp('cardLayoutGeneral').getLayout().setActiveItem('notesNDiscussionsCardLayoutGeneral');
                this.addClass('notesNDiscussionsGeneralBtnSelected');
            }
        };
        var a4 = {
            xtype:'button',
            height:35,
            textAlign:'left',
            text: 'Activities',
            cls:'activitiesGeneralBtn',
            id: 'activitiesGeneralBtnID',
            handler: function () {
                tabUnSelection(this.getText());
                Ext.getCmp('cardLayoutGeneral').getLayout().setActiveItem('activitiesCardLayoutGeneral');
                this.addClass('activitiesGeneralBtnSelected');
            }
        };
        var a5 = {
            xtype:'button',
            height:35,
            textAlign:'left',
            text: 'Stackholders',
            cls:'stackholdersGeneralBtn',
            id: 'stackholdersGeneralBtnID',
            handler: function () {
                tabUnSelection(this.getText());
                Ext.getCmp('cardLayoutGeneral').getLayout().setActiveItem('stackholdersCardLayoutGeneral');
                this.addClass('stackholdersGeneralBtnSelected');
            }
        };
        var a6 = {
            xtype:'button',
            height:35,
            textAlign:'left',
            text: 'Revisions',
            cls:'revisionsGeneralBtn',
            id: 'revisionsGeneralBtnID',
            handler: function () {
                tabUnSelection(this.getText());
                Ext.getCmp('cardLayoutGeneral').getLayout().setActiveItem('revisionsCardLayoutGeneral');
                this.addClass('revisionsGeneralBtnSelected');
            }
        };
        var a7 = {
            xtype:'button',
            height:35,
            textAlign:'left',
            text: 'History',
            cls:'historyGeneralBtn',
            id: 'historyGeneralBtnID',
            handler: function () {
                tabUnSelection(this.getText());
                Ext.getCmp('cardLayoutGeneral').getLayout().setActiveItem('historyCardLayoutGeneral');
                this.addClass('historyGeneralBtnSelected');
            }
        }         