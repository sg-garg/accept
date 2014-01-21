var topMenuBar = {
    xtype: 'panel',
    dock: 'top',
    bodyCls: 'sub_top_nav_T',
    layout: {
        type: 'hbox',
        pack: 'left',
        align: 'center'
    },
    items: [
                        {
                            xtype: 'button',
                            text: 'New',
                            cls: "sub_top_nav_T_item",
                            handler: function () {
                                console.log('New:  icon clicked');
                            },
                            menu: rms_New_Menu,
                            listeners: {
                                mouseover: function () {
                                    this.showMenu();
                                },
                                click: function () {
                                    this.showMenu();
                                }
                            }
                        },
                        {
                            xtype: 'box',
                            autoEl: {
                                tag: "img",
                                src: "images/nav_sperator.png"
                            },
                            cls: "sub_top_nav_T_separator"
                        },
                        {
                            xtype: 'button',
                            text: 'Edit',
                            cls: "sub_top_nav_T_item",
                            handler: function () {
                                console.log('Edit:  icon clicked');
                            },
                            menu: rms_Edit_Menu,
                            listeners: {
                                mouseover: function () {
                                    this.showMenu();
                                },
                                click: function () {
                                    this.showMenu();
                                }
                            }
                        },
                        {
                            xtype: 'box',
                            autoEl: {
                                tag: "img",
                                src: "images/nav_sperator.png"
                            },
                            cls: "sub_top_nav_T_separator"
                        },
                        {
                            xtype: 'button',
                            text: 'Actions',
                            cls: "sub_top_nav_T_item",
                            handler: function () {
                                console.log('Actions:  icon clicked');
                            },
                            menu: rms_Actions_Menu,
                            listeners: {
                                mouseover: function () {
                                    this.showMenu();
                                },
                                click: function () {
                                    this.showMenu();
                                }
                            }
                        },
                        {
                            xtype: 'box',
                            autoEl: {
                                tag: "img",
                                src: "images/nav_sperator.png"
                            },
                            cls: "sub_top_nav_T_separator"
                        },

                        {
                            xtype: 'button',
                            text: 'Tools',
                            cls: "sub_top_nav_T_item",
                            scale: 'small',
                            handler: function () {
                                console.log('Tools:  icon clicked');
                            },
                            id: 'btnTools',
                            menu: rms_Tools_Menu,
                            listeners: {
                                mouseover: function () {
                                    this.showMenu();
                                },
                                click: function () {
                                    this.showMenu();
                                }
                            }
                        },
                        {
                            xtype: 'box',
                            autoEl: {
                                tag: "img",
                                src: "images/nav_sperator.png"
                            },
                            cls: "sub_top_nav_T_separator"
                        },
                        {
                            xtype: 'button',
                            text: 'Table Views',
                            cls: "sub_top_nav_T_item",
                            handler: function () {
                                console.log('Table Views:  icon clicked');
                            },
                            menu: rms_TableViews_Menu,
                            listeners: {
                                mouseover: function () {
                                    this.showMenu();
                                },
                                click: function () {
                                    this.showMenu();
                                }
                            }
                        },
                        {
                            xtype: 'box',
                            autoEl: {
                                tag: "img",
                                src: "images/nav_sperator.png"
                            },
                            cls: "sub_top_nav_T_separator"
                        },
                        {
                            xtype: 'button',
                            text: 'Module',
                            cls: "sub_top_nav_T_item",
                            handler: function () {
                                console.log('Module:  icon clicked');
                            },
                            menu: rms_Module_Menu,
                            listeners: {
                                mouseover: function () {
                                    this.showMenu();
                                },
                                click: function () {
                                    this.showMenu();
                                }
                            }
                        },
                        {
                            xtype: 'box',
                            autoEl: {
                                tag: "img",
                                src: "images/nav_sperator.png"
                            },
                            cls: "sub_top_nav_T_separator"
                        },
                        {
                            xtype: 'button',
                            text: 'Help',
                            cls: "sub_top_nav_T_item",
                            handler: function () {
                                console.log('Help:  icon clicked');
                            },
                            menu: rms_Help_Menu,
                            listeners: {
                                mouseover: function () {
                                    this.showMenu();
                                },
                                click: function () {
                                    this.showMenu();
                                }
                            }
                        },
                        {
                            xtype: 'box',
                            autoEl: {
                                tag: "img",
                                src: "images/nav_sperator.png"
                            },
                            cls: "sub_top_nav_T_separator"
                        },
                    ]
}