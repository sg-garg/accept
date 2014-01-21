var rms_New_Menu = new Ext.menu.Menu({
    items: [
        {
            text: 'Requirements',
            id: 'rms_New_Requirements',
            iconCls: 'rms_New_Requirements'
        },
        {
            text: 'Sibling',
            id: 'rms_New_Sibling',
            iconCls: 'tcm_NewSibling',
            menu: {
                items: [
                    {
                        text: 'Requirement (S)',
                        id: 'rms_New_Sibling_Requirement',
                        icon: '/images/Old_Images/entities/Feature_menu.png'
                    },
                    {
                        text: 'Folder',
                        id: 'rms_New_Sibling_Folder',
                        icon: '/images/Old_Images/entities/Folder_menu.png'
                    },
                    {
                        text: 'Functional Area',
                        id: 'rms_New_Sibling_FunctionalArea',
                        icon: '/images/Old_Images/entities/ProductDomain_menu.png'
                    }
                ]
            }
        },
        {
            text: 'Child',
            id: 'rms_New_Child',
            iconCls: 'tcm_NewChild',
            menu: {
                items: [
                    {
                        text: 'Requirement (C)',
                        id: 'rms_New_Child_Requirement',
                        icon: '/images/Old_Images/entities/Feature_menu.png'
                    },
                    {
                        text: 'Folder',
                        id: 'rms_New_Child_Folder',
                        icon: '/images/Old_Images/entities/Folder_menu.png'
                    },
                    {
                        text: 'Functional Area',
                        id: 'rms_New_Child_FunctionalArea',
                        icon: '/images/Old_Images/entities/ProductDomain_menu.png'
                    }
                ]
            }
        }
    ]
});

var rms_Edit_Menu = new Ext.menu.Menu({
    items: [
        {
            text: 'Spell Check',
            id: 'rms_Edit_SpellCheck'
        },'-',
        {
            text: 'Copy',
            id: 'rms_Edit_Copy',
            iconCls: 'tcm_Copy'
        },
        {
            text: 'Paste',
            id: 'rms_Edit_Paste',
            iconCls: 'tcm_Paste'
        },'-',
        {
            text: 'Move/Link',
            id: 'rms_Edit_MoveLink',
            iconCls: 'tcm_MoveLink'
        },
        {
            text: 'Up',
            id: 'rms_Edit_Up',
            iconCls: 'tcm_Up'
        },
        {
            text: 'Down',
            id: 'rms_Edit_Down',
            iconCls: 'tcm_Down'
        }, '-',
        {
            text: 'Unlink',
            id: 'rms_Edit_Unlink',
            iconCls: 'tcm_Unlink'
        }, '-',
        {
            text: 'Delete',
            id: 'rms_Edit_Delete',
            iconCls: 'tcm_Delete'
        }, '-',
        {
            text: 'Copy Link',
            id: 'rms_Edit_CopyLink',
            iconCls: 'tcm_CopyLink'
        }
    ]
});


var rms_Actions_Menu = new Ext.menu.Menu({
    items: [
        {
            text: 'Add/Remove Stackholders',
            id: 'rms_Actions_AddRemoveSH'
        },
        {
            text: 'Update Assigned to',
            id: 'rms_Actions_UpdateAT'
        }, '-',
        {
            text: 'Activities',
            id: 'rms_Actions_Activities'
        }, '-',
        {
            text: 'Convert Folder Type',
            id: 'rms_Actions_ConvertFT'
        }, '-',
        {
            text: 'Promote to Functional Area',
            id: 'rms_Actions_PromoteToFA',
            iconCls: 'tcm_PromoteToFA'
        },
        {
            text: 'Demote to Requirement',
            id: 'rms_Actions_DemoteToR'
        },
        {
            text: 'Split Requirement',
            id: 'rms_Actions_SplitR',
            iconCls: 'tcm_SplitR'
        },
        {
            text: 'Create Task from template',
            id: 'rms_Actions_CreaterTFT',
            iconCls: 'tcm_CreaterTFT'
        },
        {
            text: 'Merger Requirements',
            id: 'rms_Actions_MergeR',
            iconCls: 'tcm_MergeR'
        }, '-',
        {
            text: 'Assign/Unassign',
            id: 'rms_Actions_AnU'
        }, '-',
        {
            text: 'Relationships',
            id: 'rms_Actions_Relationships'
        }, '-',
        {
            text: 'Update',
            id: 'rms_Actions_Update'
        }, '-',
        {
            text: 'Create New Revision',
            id: 'rms_Actions_CNR'
        },
        {
            text: 'Freeze Current Revision',
            id: 'rms_Actions_FCR'
        },
        {
            text: 'Unfreeze Current Revision',
            id: 'rms_Actions_UCR'
        }, '-',
        {
            text: 'Import Requirements',
            id: 'rms_Actions_IR'
        }
    ]
});


var rms_TableViews_Menu = new Ext.menu.Menu({
    items: [
        {
            text: 'Any element type',
            id: 'rms_TableViews_AET'
        }, '-',
        {
            text: 'Competitors',
            id: 'rms_TableViews_Competitors'
        },
        {
            text: 'Ideas',
            id: 'rms_TableViews_Ideas'
        },
        {
            text: 'Implementation Sites',
            id: 'rms_TableViews_IS'
        },
        {
            text: 'Releases',
            id: 'rms_TableViews_Releases'
        },
        {
            text: 'Requirements',
            id: 'rms_TableViews_Requirements'
        },
        {
            text: 'Tasks',
            id: 'rms_TableViews_Tasks'
        },
        {
            text: 'More',
            id: 'rms_TableViews_More',
            menu: {
                items: [
                    {
                        text: 'Approvals',
                        id: 'rms_TableViews_Approvals'
                    },
                    {
                        text: 'Approval Requests',
                        id: 'rms_TableViews_ApprovalRequests'
                    },
                    {
                        text: 'Companies',
                        id: 'rms_TableViews_Companies'
                    },
                    {
                        text: 'Contacts',
                        id: 'rms_TableViews_Contacts'
                    },
                    {
                        text: 'Defects',
                        id: 'rms_TableViews_Defects'
                    },
                    {
                        text: 'Deleted Elements',
                        id: 'rms_TableViews_DeletedElements'
                    },
                    {
                        text: 'Fixed Cost Types',
                        id: 'rms_TableViews_FCT'
                    },
                    {
                        text: 'Functional Areas',
                        id: 'rms_TableViews_FA'
                    },
                    {
                        text: 'Geographies',
                        id: 'rms_TableViews_Geographies'
                    },
                    {
                        text: 'Groups',
                        id: 'rms_TableViews_Groups'
                    },
                    {
                        text: 'Internal Projects',
                        id: 'rms_TableViews_InternalProjects'
                    },
                    {
                        text: 'Market Segments',
                        id: 'rms_TableViews_MarketSegments'
                    },
                    {
                        text: 'Milestones',
                        id: 'rms_TableViews_Milestones'
                    },
                    {
                        text: 'Offerings',
                        id: 'rms_TableViews_Offerings'
                    },
                    {
                        text: 'Opportunities',
                        id: 'rms_TableViews_Opportunities'
                    },
                    {
                        text: 'Organizations',
                        id: 'rms_TableViews_Organizations'
                    },
                    {
                        text: 'Personas',
                        id: 'rms_TableViews_Personas'
                    },
                    {
                        text: 'Product Lines',
                        id: 'rms_TableViews_ProductLines'
                    },
                    {
                        text: 'Reports',
                        id: 'rms_TableViews_Reports'
                    },
                    {
                        text: 'Risks',
                        id: 'rms_TableViews_Risks'
                    },
                    {
                        text: 'Scenarios',
                        id: 'rms_TableViews_Scenarios'
                    },
                    {
                        text: 'Sprints',
                        id: 'rms_TableViews_Sprints'
                    },
                    {
                        text: 'Strategies',
                        id: 'rms_TableViews_Strategies'
                    },
                    {
                        text: 'Targets',
                        id: 'rms_TableViews_Targets'
                    },
                    {
                        text: 'Target Types',
                        id: 'rms_TableViews_TargetTypes'
                    },
                    {
                        text: 'Teams',
                        id: 'rms_TableViews_Teams'
                    },
                    {
                        text: 'Themes',
                        id: 'rms_TableViews_Themes'
                    },
                    {
                        text: 'Use Cases',
                        id: 'rms_TableViews_UseCases'
                    },
                    {
                        text: 'Users',
                        id: 'rms_TableViews_Users'
                    },
                    {
                        text: 'Versions',
                        id: 'rms_TableViews_Versions'
                    }
                ]
            }
        },'-',
        {
            text: 'Recently Selected',
            id: 'rms_TableViews_RS'
        }
    ]
});


var rms_Module_Menu = new Ext.menu.Menu({
        items: [
        {
            text: 'Show Module Sidebar',
            id: 'rms_Module_SMS'
        },'-',
        {
            text: 'Dashboard',
            id: 'rms_Module_Dashboard'
        },
        {
            text: 'Portfolio',
            id: 'rms_Module_Portfolio'
        },
        {
            text: 'Requirements',
            id: 'rms_Module_Requirements'
        },
        {
            text: 'Roadmaps',
            id: 'rms_Module_Roadmaps'
        },
        {
            text: 'Products & Offerings',
            id: 'rms_Module_PnO'
        },
        {
            text: 'Ideas',
            id: 'rms_Module_Ideas'
        },
        {
            text: 'Enhancements Portal',
            id: 'rms_Module_EnhancementsPortal'
        },
        {
            text: 'Use Cases (D)',
            id: 'rms_Module_UseCases'
        },
        {
            text: 'Defects',
            id: 'rms_Module_Defects'
        },
        {
            text: 'Markets',
            id: 'rms_Module_Markets'
        },
        {
            text: 'Strategies',
            id: 'rms_Module_Strategies'
        },
        {
            text: 'Analytics',
            id: 'rms_Module_Analytics'
        },
        {
            text: 'Teams',
            id: 'rms_Module_Teams'
        },
        {
            text: 'Tasks',
            id: 'rms_Module_Tasks'
        },
        {
            text: 'Agile Task Board',
            id: 'rms_Module_AgileTaskBoard'
        },
        {
            text: 'Reporting',
            id: 'rms_Module_Reporting'
        },
        {
            text: 'Users & Groups',
            id: 'rms_Module_UsersNGroups'
        },
        {
            text: 'Studio',
            id: 'rms_Module_Studio'
        }
    ]
});

var rms_Tools_Menu = new Ext.menu.Menu({
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
});

var rms_Help_Menu = new Ext.menu.Menu({
    items: [
        {
            text: 'Help Topics',
            id: 'rms_Help_HelpTopics'
        },
        {
            text: 'Tip of the Day',
            id: 'rms_Help_TipOfTheDay'
        }, '-',
        {
            text: 'This Module',
            id: 'rms_Help_ThisModule'
        }, '-',
        {
            text: 'Submit Your Ideas',
            id: 'rms_Help_SubmitYourIdeas'
        },
        {
            text: 'Customer Solutions Center',
            id: 'rms_Help_CustomerSolutionsCenter'
        },'-',
        {
            text: 'About Accept',
            id: 'rms_Help_AboutAccept'
        }
    ]
});

