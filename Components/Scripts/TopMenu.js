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
                            menu: {
                                plain: true,
                                items: [
                                {
                                    text: 'History',
                                    icon: '\/images\/history-dd-icon.png',
                                    handler: function () {
                                        console.log('Actions:  icon clicked');
                                    },
                                    menu: {
                                        plain: true,
                                        items: [
                                        {
                                            text: 'Sub Navigation 1',
                                            icon: '\/images\/history-dd-icon.png',
                                            handler: function () {
                                                console.log('Sub Navigation 1:  icon clicked');
                                            }
                                        },
                                        {
                                            text: 'Sub Navigation 2',
                                            icon: '\/images\/history-dd-icon.png',
                                            handler: function () {
                                                console.log('Sub Navigation 2:  icon clicked');
                                            }
                                        },
                                        {
                                            text: 'Sub Navigation 3',
                                            icon: '\/images\/history-dd-icon.png',
                                            handler: function () {
                                                console.log('Sub Navigation 3:  icon clicked');
                                            }
                                        }
                                    ]
                                    }
                                },
                                {
                                    text: 'Find',
                                    icon: '\/images\/find-icon.png',
                                    handler: function () {
                                        console.log('Actions:  icon clicked');
                                    },
                                    menu: {
                                        plain: true,
                                        items: [
                                        {
                                            text: 'Sub Navigation 1',
                                            icon: '\/images\/history-dd-icon.png',
                                            handler: function () {
                                                console.log('Sub Navigation 1:  icon clicked');
                                            }
                                        },
                                        {
                                            text: 'Sub Navigation 2',
                                            icon: '\/images\/history-dd-icon.png',
                                            handler: function () {
                                                console.log('Sub Navigation 2:  icon clicked');
                                            }
                                        },
                                        {
                                            text: 'Sub Navigation 3',
                                            icon: '\/images\/history-dd-icon.png',
                                            handler: function () {
                                                console.log('Sub Navigation 3:  icon clicked');
                                            }
                                        }
                                    ]
                                    }
                                },
                                {
                                    text: 'Export Data',
                                    icon: '\/images\/xl-icon.png',
                                    handler: function () {
                                        console.log('Actions:  icon clicked');
                                    },
                                    menu: {
                                        plain: true,
                                        items: [
                                        {
                                            text: 'Sub Navigation 1',
                                            icon: '\/images\/history-dd-icon.png',
                                            handler: function () {
                                                console.log('Sub Navigation 1:  icon clicked');
                                            }
                                        },
                                        {
                                            text: 'Sub Navigation 2',
                                            icon: '\/images\/history-dd-icon.png',
                                            handler: function () {
                                                console.log('Sub Navigation 2:  icon clicked');
                                            }
                                        },
                                        {
                                            text: 'Sub Navigation 3',
                                            icon: '\/images\/history-dd-icon.png',
                                            handler: function () {
                                                console.log('Sub Navigation 3:  icon clicked');
                                            }
                                        }
                                    ]
                                    }
                                },
                                '-',
                                {
                                    text: 'Relationships Table',
                                    icon: '\/images\/relations_icon.png',
                                    handler: function () {
                                        console.log('Actions:  icon clicked');
                                    },
                                    menu: {
                                        plain: true,
                                        items: [
                                        {
                                            text: 'Sub Navigation 1',
                                            icon: '\/images\/history-dd-icon.png',
                                            handler: function () {
                                                console.log('Sub Navigation 1:  icon clicked');
                                            }
                                        },
                                        {
                                            text: 'Sub Navigation 2',
                                            icon: '\/images\/history-dd-icon.png',
                                            handler: function () {
                                                console.log('Sub Navigation 2:  icon clicked');
                                            }
                                        },
                                        {
                                            text: 'Sub Navigation 3',
                                            icon: '\/images\/history-dd-icon.png',
                                            handler: function () {
                                                console.log('Sub Navigation 3:  icon clicked');
                                            }
                                        }
                                    ]
                                    }
                                },
                                '-',
                                {
                                    text: 'Add Ins',
                                    handler: function () {
                                        console.log('Actions:  icon clicked');
                                    },
                                    menu: {
                                        plain: true,
                                        items: [
                                        {
                                            text: 'Sub Navigation 1',
                                            icon: '\/images\/history-dd-icon.png',
                                            handler: function () {
                                                console.log('Sub Navigation 1:  icon clicked');
                                            }
                                        },
                                        {
                                            text: 'Sub Navigation 2',
                                            icon: '\/images\/history-dd-icon.png',
                                            handler: function () {
                                                console.log('Sub Navigation 2:  icon clicked');
                                            }
                                        },
                                        {
                                            text: 'Sub Navigation 3',
                                            icon: '\/images\/history-dd-icon.png',
                                            handler: function () {
                                                console.log('Sub Navigation 3:  icon clicked');
                                            }
                                        }
                                    ]
                                    }
                                },
                                {
                                    text: 'Report Builder',
                                    handler: function () {
                                        console.log('Actions:  icon clicked');
                                    },
                                    menu: {
                                        plain: true,
                                        items: [
                                        {
                                            text: 'Sub Navigation 1',
                                            icon: '\/images\/history-dd-icon.png',
                                            handler: function () {
                                                console.log('Sub Navigation 1:  icon clicked');
                                            }
                                        },
                                        {
                                            text: 'Sub Navigation 2',
                                            icon: '\/images\/history-dd-icon.png',
                                            handler: function () {
                                                console.log('Sub Navigation 2:  icon clicked');
                                            }
                                        },
                                        {
                                            text: 'Sub Navigation 3',
                                            icon: '\/images\/history-dd-icon.png',
                                            handler: function () {
                                                console.log('Sub Navigation 3:  icon clicked');
                                            }
                                        }
                                    ]
                                    }
                                },
                                {
                                    text: 'Profile',
                                    handler: function () {
                                        console.log('Actions:  icon clicked');
                                    },
                                    menu: {
                                        plain: true,
                                        items: [
                                        {
                                            text: 'Sub Navigation 1',
                                            icon: '\/images\/history-dd-icon.png',
                                            handler: function () {
                                                console.log('Sub Navigation 1:  icon clicked');
                                            }
                                        },
                                        {
                                            text: 'Sub Navigation 2',
                                            icon: '\/images\/history-dd-icon.png',
                                            handler: function () {
                                                console.log('Sub Navigation 2:  icon clicked');
                                            }
                                        },
                                        {
                                            text: 'Sub Navigation 3',
                                            icon: '\/images\/history-dd-icon.png',
                                            handler: function () {
                                                console.log('Sub Navigation 3:  icon clicked');
                                            }
                                        }
                                    ]
                                    }
                                }
                            ]
                            },
                            listeners: {
                                mouseover: function () {
                                    this.showMenu();
                                    console.log('mouse over')
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
                                alert("hello");
                                console.log('Help:  icon clicked');
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