function updateTopMenuSelectedItemDisplayText(newText) {
    Ext.getCmp('topMenuSelectedItemDisplayID').setText(newText);
}

var topMenuSelectedItemDisplay = {
    xtype: 'label',
    text: 'Home',
    id: 'topMenuSelectedItemDisplayID',
    height: 35,
    cls: 'topMenuSelectedItemDisplayCSS'
};

var logoBar = {
    xtype: 'panel',
    //bodyCls: 'header-top',
    dock: 'top',
    height: 74,
    html: '<div class="header-top clearfix"><div class="header-top-l"> <a href="home.html"><img src="images/amiran-logo.png" alt="" /></a></div><div class="header-top-r"> <a href="home.html"><img src="images/accept-logo.png" alt="" /></a><ul><li>Logged in as <a href="#">Accept Support</a></li><li><span>|</span></li><li><a href="#">Logout</a></li></ul></div></div>'
};


var BreadCrumBar = {
    xtype: 'panel',
    height: 57,
    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'start'
    },
    items: [
        topMenuSelectedItemDisplay,
         {
             xtype: 'tbtext',
             id: 'breadCrumTextID',
             style: 'margin-left:5px;text-transform:capitalize;',
             text: '<a class="breadCrumTextLinkCSS" href="#">Home</a>'
         }
    ]
};

var mainTopMenuBar = {
    xtype: 'panel',
    bodyCls: 'top_nav_T',
    layout: {
        type: 'hbox',
        pack: 'left',
        align: 'center'
    },
    items: [
                        {
                            xtype: 'button',
                            text: 'Home',
                            cls: "homeTopMenuButtonCSS",
                            icon: '/images/home-icon.png',
                            handler: function () {
                                updateTopMenuSelectedItemDisplayText(this.text);
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Dashboard',
                            cls: "dashboardTopMenuButtonCSS",
                            icon: '/images/dashboard-icon.png',
                            handler: function () {
                                updateTopMenuSelectedItemDisplayText(this.text);
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Portfolio & Roadmap',
                            cls: "prTopMenuButtonCSS",
                            icon: '/images/pr-icon.png',
                            handler: function () {
                                updateTopMenuSelectedItemDisplayText(this.text);
                            },
                            menu: {
                                plain: true,
                                items: [
                                    {
                                        text: 'Portfolio',
                                        handler: function () {
                                            updateTopMenuSelectedItemDisplayText(this.text);
                                        }
                                    },
                                    {
                                        text: 'Roadmaps',
                                        handler: function () {
                                            updateTopMenuSelectedItemDisplayText(this.text);
                                        }
                                    },
                                    {
                                        text: 'Product & Offerings',
                                        handler: function () {
                                            updateTopMenuSelectedItemDisplayText(this.text);
                                        }
                                    },
                                    {
                                        text: 'Markets',
                                        handler: function () {
                                            updateTopMenuSelectedItemDisplayText(this.text);
                                        }
                                    },
                                    {
                                        text: 'Strategies',
                                        handler: function () {
                                            updateTopMenuSelectedItemDisplayText(this.text);
                                        }
                                    },
                                    {
                                        text: 'Analytics',
                                        handler: function () {
                                            updateTopMenuSelectedItemDisplayText(this.text);
                                        }
                                    }
                                ]
                            },
                            listeners: {
                                mouseover: function (me) {
                                    me.showMenu();
                                },
                                click: function (me) {
                                    me.showMenu();
                                }
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Product Content',
                            cls: "pcTopMenuButtonCSS",
                            icon: '/images/product-content-icon.png',
                            handler: function () {
                                updateTopMenuSelectedItemDisplayText(this.text);
                            },
                            menu: {
                                plain: true,
                                items: [
                                    {
                                        text: 'Requirements',
                                        handler: function () {
                                            updateTopMenuSelectedItemDisplayText(this.text);
                                        }
                                    },
                                    {
                                        text: 'Ideas',
                                        handler: function () {
                                            updateTopMenuSelectedItemDisplayText(this.text);
                                        }
                                    },
                                    {
                                        text: 'Enhancement Portal',
                                        handler: function () {
                                            updateTopMenuSelectedItemDisplayText(this.text);
                                        }
                                    },
                                    {
                                        text: 'Use Cases',
                                        handler: function () {
                                            updateTopMenuSelectedItemDisplayText(this.text);
                                        }
                                    }
                                ]
                            },
                            listeners: {
                                mouseover: function (me) {
                                    me.showMenu();
                                },
                                click: function (me) {
                                    me.showMenu();
                                }
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Execution',
                            cls: "executionTopMenuButtonCSS",
                            icon: '/images/execution-icon.png',
                            handler: function () {
                                updateTopMenuSelectedItemDisplayText(this.text);
                            },
                            menu: {
                                plain: true,
                                items: [
                                    {
                                        text: 'Defects',
                                        handler: function () {
                                            updateTopMenuSelectedItemDisplayText(this.text);
                                        }
                                    },
                                    {
                                        text: 'Teams',
                                        handler: function () {
                                            updateTopMenuSelectedItemDisplayText(this.text);
                                        }
                                    },
                                    {
                                        text: 'Tasks',
                                        handler: function () {
                                            updateTopMenuSelectedItemDisplayText(this.text);
                                        }
                                    },
                                    {
                                        text: 'Agile Task Board',
                                        handler: function () {
                                            updateTopMenuSelectedItemDisplayText(this.text);
                                        }
                                    }
                                ]
                            },
                            listeners: {
                                mouseover: function (me) {
                                    me.showMenu();
                                },
                                click: function (me) {
                                    me.showMenu();
                                }
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Reporting',
                            cls: "reportingTopMenuButtonCSS",
                            icon: '/images/report-icon.png',
                            handler: function () {
                                updateTopMenuSelectedItemDisplayText(this.text);
                            },
                            menu: {
                                plain: true,
                                items: [
                                    {
                                        text: 'Reporting',
                                        handler: function () {
                                            updateTopMenuSelectedItemDisplayText(this.text);
                                        }
                                    },
                                    {
                                        text: 'Report Builder',
                                        handler: function () {
                                            updateTopMenuSelectedItemDisplayText(this.text);
                                        }
                                    }
                                ]
                            },
                            listeners: {
                                mouseover: function (me) {
                                    me.showMenu();
                                },
                                click: function (me) {
                                    me.showMenu();
                                }
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Admin',
                            cls: "adminTopMenuButtonCSS",
                            icon: '/images/admin-icon.png',
                            handler: function () {
                                updateTopMenuSelectedItemDisplayText(this.text);
                            },
                            menu: {
                                plain: true,
                                items: [
                                    {
                                        text: 'Users & Groups',
                                        handler: function () {
                                            updateTopMenuSelectedItemDisplayText(this.text);
                                        }
                                    },
                                    {
                                        text: 'Studio',
                                        handler: function () {
                                            updateTopMenuSelectedItemDisplayText(this.text);
                                        }
                                    }
                                ]
                            },
                            listeners: {
                                mouseover: function (me) {
                                    me.showMenu();
                                },
                                click: function (me) {
                                    me.showMenu();
                                }
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Advanced Settings & Actions',
                            cls: "top_nav_T_item",
                            handler: function () {
                                updateTopMenuSelectedItemDisplayText(this.text);
                            },
                            menu: {
                                plain: true,
                                items: [
                                    {
                                        text: 'Clear Application Cache',
                                        handler: function () {
                                            updateTopMenuSelectedItemDisplayText(this.text);
                                        }
                                    },
                                    {
                                        text: 'Uninstall Application',
                                        handler: function () {
                                            updateTopMenuSelectedItemDisplayText(this.text);
                                        }
                                    },
                                    {
                                        text: 'Show Log',
                                        handler: function () {
                                            updateTopMenuSelectedItemDisplayText(this.text);
                                        }
                                    }
                                ]
                            },
                            listeners: {
                                mouseover: function (me) {
                                    me.showMenu();
                                },
                                click: function (me) {
                                    me.showMenu();
                                }
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Help & Support',
                            cls: "top_nav_T_item",
                            handler: function () {
                                updateTopMenuSelectedItemDisplayText(this.text);
                            },
                            menu: {
                                plain: true,
                                items: [
                                    {
                                        text: 'Help',
                                        handler: function () {
                                            updateTopMenuSelectedItemDisplayText(this.text);
                                        }
                                    },
                                    {
                                        text: 'What\'s New',
                                        handler: function () {
                                            updateTopMenuSelectedItemDisplayText(this.text);
                                        }
                                    },
                                    {
                                        text: 'Release Notes',
                                        handler: function () {
                                            updateTopMenuSelectedItemDisplayText(this.text);
                                        }
                                    },
                                    {
                                        text: 'Security Notice',
                                        handler: function () {
                                            updateTopMenuSelectedItemDisplayText(this.text);
                                        }
                                    },
                                    {
                                        text: 'Submit Your Ideas',
                                        handler: function () {
                                            updateTopMenuSelectedItemDisplayText(this.text);
                                        }
                                    },
                                    {
                                        text: 'Customer Solution Center',
                                        handler: function () {
                                            updateTopMenuSelectedItemDisplayText(this.text);
                                        }
                                    }
                                ]
                            },
                            listeners: {
                                mouseover: function (me) {
                                    me.showMenu();
                                },
                                click: function (me) {
                                    me.showMenu();
                                }
                            }
                        }
                    ]
}