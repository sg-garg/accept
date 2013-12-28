var tabsBar = {
    xtype: 'customtabpanel1',
    flex: 1,
    activeTab: 0,
    tabitems: [
        {
            title: 'General',
            layout: {
                type: 'border'
            },
            items: [
                {
                    region: 'north',
                    height: 30,
                    dockedItems: [generalSubToolbar]
                },
                {
                    region: 'center',
                    layout:'fit',
                    xtype: 'panel',
                    cls:'removeBorder',
                    flex: 4,
                    items: [generalDescriptionFormPanel]
                },
                {
                    region: 'south',
                    flex: 5,
                    layout: 'border',
                    items: [
                            {
                                region: 'west',
                                border: false,
                                width: 128,
                                layout: {
                                    type: 'vbox',
                                    align: 'stretch',
                                    pack: 'start'
                                },
                                items: [
                                    a1, a2, a3, a4, a5, a6, a7
                                ]
                            },
                            {
                                region: 'center',
                                border: false,
                                layout: 'border',
                                items: [
                                {
                                    region: 'north',
                                    border: false,
                                    height: 34,
                                    items: generalVerticalTabNameDiplay
                                },
                                {
                                    region: 'center',
                                    border: false,
                                    layout: 'card',
                                    id: 'cardLayoutGeneral',
                                    flex: 1,
                                    activeItem: 'propertyCardLayoutGeneral',
                                    items: [propertyPanel, attachementsPanel, notesNDiscussionsPanel, activitiesPanel, stackholdersPanel, revisionsPanel, historyPanel]
                                }]
                            }
                    ]
                }
            ]
        },
        {
            title: 'Content',
            layout: {
                type: 'border'
            },
            items: [
                {
                    region: 'north',
                    height: 30,
                    dockedItems: [contentSubToolbar]
                },
                {
                    region: 'center',
                    html: 'Center',
                    flex: 1
                },
                {
                    region: 'east',
                    width: '20%',
                    split: true,
                    collapsible: true,
                    title: 'Starts at width 30%',
                    html: 'east<br>I am collapsible'
                }
            ]
        },
        {
            title: 'Properties',
            layout: {
                type: 'border'
            },
            items: [
                {
                    region: 'center',
                    items: propertiesTabFormPanel,
                    autoScroll:true
                }
            ]
        },
        {
            title: 'Plans',
            layout: {
                type: 'border'
            },
            items: [
                {
                    region: 'north',
                    height: 40,
                    split: true,
                    //collapsible: true,
                    dockedItems: [plansSubToolbar]
                },
                {
                    region: 'center',
                    html: 'Center',
                    title: 'Additional Release Containing this Requirement',
                    flex: 1,
                    dockedItems: [planAdditionalReleaseSubToolbar]
                },
                {
                    region: 'south',
                    flex: 1,
                    title: 'Scenarios containing this Requirement',
                    split: true,
                    collapsible: true,
                    dockedItems: [planScenariosReleaseSubToolbar]
                }
            ]
        },
        {
            title: 'Relationships',
            layout: {
                type: 'border'
            },
            items: [
                {
                    region: 'north',
                    height: 30,
                    dockedItems: [relationshipsSubToolbar1]
                },
                {
                    region: 'center',
                    flex: 1,
                    layout: {
                        type: 'border'
                    },
                    items: [
                        {
                            region: 'north',
                            height: 50
                        },
                        {
                            region: 'center',
                            html: 'Center',
                            flex: 1,
                            dockedItems: [relationshipsSubToolbar2]
                        }
                    ]
                },
                {
                    region: 'south',
                    flex: 1,
                    split: true,
                    collapsible: true,
                    xtype: 'tabpanel',
                    flex: 1,
                    activeTab: 2,
                    items: [
                        {
                            title: 'Relationship Details',
                            iconCls: 'relationshipsRelationshipDetailsTab',
                            html: 'Create Relationship Details Form Here'
                        },
                        {
                            title: 'Attachments',
                            iconCls: 'relationshipsAttachmentsTab',
                            dockedItems: [relationshipsAttachmentsSubToolbar]
                        },
                        {
                            title: 'History',
                            iconCls: 'relationshipsHistoryTab',
                            dockedItems: [relationshipsHistorySubToolbar]
                        }
                    ]
                }
            ]
        },
        {
            title: 'Resourcings',
            xtype: 'tabpanel',
            flex: 1,
            activeTab: 2,
            items: [
            {
                title: 'Resource Rollup',
                iconCls: 'resourcingResourceRollupTab',
                layout: {
                    type: 'border'
                },
                items: [
                    {
                        region: 'center',
                        title: 'Summary Of Rolled Up Resources From Descendent Requirements and Tasks',
                        flex: 1,
                        dockedItems: [resourceRollupSummarySubToolbar]
                    },
                    {
                        region: 'south',
                        title: 'Resources',
                        flex: 1,
                        split: true,
                        collapsible: true,
                        dockedItems: [resourceRollupResourcesSubToolbar]
                    }
                ]

            },
            {
                title: 'Resource Assignment',
                iconCls: 'resourcingResourceAssignmentTab',
                layout: {
                    type: 'border'
                },
                items: [
                    {
                        region: 'center',
                        title: 'Resource Assignment',
                        flex: 3,
                        dockedItems: [resourceAssignmentSubToolbar]
                    },
                    {
                        region: 'south',
                        flex: 2,
                        split: true,
                        collapsible: true
                    }
                ]
            },
            {
                title: 'Task Assignment',
                iconCls: 'resourcingTaskAssignmentTab',
                layout: {
                    type: 'border'
                },
                items: [
                    {
                        region: 'center',
                        title: 'Assigned Tasks',
                        flex: 1,
                        dockedItems: [taskAssignmentSubToolbar]
                    }
                ]
            },
            {
                title: 'History',
                iconCls: 'resourcingHistoryTab',
                layout: {
                    type: 'border'
                },
                items: [
                    {
                        region: 'center',
                        title: 'History',
                        flex: 1,
                        dockedItems: [historySubToolbar]
                    }
                ]
            }
            ]
        },
        {
            title: 'Requirement Dependencies',
            layout: {
                type: 'border'
            },
            items: [
                {
                    region: 'north',
                    title: 'Direct Upstream Elements(this item cannot be implemented without the following items implemented first)',
                    flex: 1,
                    split: true,
                    collapsible: true,
                    dockedItems: [rdUpStreamSubToolbar]
                },
                {
                    region: 'center',
                    title: 'Direct Downstream Elements(the following items cannot be implemented without this one being implemented first)',
                    flex: 1,
                    dockedItems: [rdDownStreamSubToolbar]
                },
                {
                    region: 'south',
                    title: 'Co-dependent Elements(the following items have co-dependencies)',
                    flex: 1,
                    split: true,
                    collapsible: true,
                    dockedItems: [rdCoDependentSubToolbar]
                }
            ]
        },
        {
            title: 'Issues',
            layout: {
                type: 'border'
            },
            items: [
                {
                    region: 'north',
                    height: 30,
                    dockedItems: [issuesTopSubToolbar1]
                },
                {
                    region: 'center',
                    flex: 1,
                    layout: {
                        type: 'border',
                        padding: 5
                    },
                    items: [
                        {
                            region: 'north',
                            height: 40,
                            dockedItems: [issuesTopSubToolbar2]
                        },
                        {
                            region: 'center',
                            html: 'Center',
                            flex: 1
                        }
                    ]
                }
            ]
        }
    ]
};


        var tabsHeaderInfoDisplay = { 
                xtype: 'label',
                text: 'Nothing Selected',
                id: 'tabsHeaderInfoDisplayID',
                height: 35,
                cls: 'tabsHeaderInfoDisplayCSS'
            };

