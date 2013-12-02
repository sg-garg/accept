Ext.define("CustomTabPanel", {

    xtype: 'customtabpanel1',
    extend: 'Ext.Panel',
    cls : 'custom-tab-panel1',
    layout: { type: 'fit', pack: 'start', align: 'stretch' },

    items: [
        {
            xtype: 'panel',
            layout: { type: 'vbox', pack: 'start', align: 'stretch' },
            itemId: 'basepanel',
            items: [
                { xtype: 'panel', itemId: 'headerpanel' },
                { xtype: 'tabpanel', itemId: 'contenttabpanel', items: [], cls: 'content-panel', flex: 1 }
            ]
        }
    ],

    onRender: function () {
        //call panel's render function
        this.callParent(arguments);

        //populate 'custom' header component        
        this.query("#headerpanel")[0].add(this.getTabHeader(this));

        //populate tabpanel.
        this.populateTabPanel(this);
    },

    getTabHeader: function (that) {
        var tpl = new Ext.XTemplate([
                    '<div>',
                    '   <ul class="nav">',
                    '       <li><div class="nav_L"></div></li>',
                    '       <tpl for="tabsarr">',
                    '           <li class="{liclass}">',
                    '               <a href="#" class="{aclass}">',
                    '                   <span>{title}</span>',
                    '               </a>',
                    '           </li>',
                    '       </tpl>',
                    '       <li class="hl-last"><div class="nav_R"></div></li>',
                    '       <div class="clear"></div>',
                    '   </ul>',
                    '   <div class="tabl_btm_bar"></div>',
                    '   <div class="clear"></div>',
                    '</div>'
                ]);

        return Ext.create('Ext.Component', {
            html: tpl.apply(this.data),
            basepanel: that,
            tabpanel: that.query("#contenttabpanel")[0],
            listeners: {
                afterrender: function () {
                    //add click event handler on tabs
                    var tabs = this.el.query("a"), i, locali;
                    if (tabs && tabs.length) {
                        for (i = 0; i < tabs.length; i++) {
                            (function (locali, that1) {
                                tabs[locali].onclick = function (e) {
                                    var tabIndex = locali, that = that1;
                                    that.setActiveTab(that, tabIndex);
                                }
                            } (i, this));
                        }
                    }
                }
            },

            setActiveTab: function (that, tabIndex) {
                
                //change tabs css
                that.setActiveTabCss(that, tabIndex);

                //change tab content
                that.setActiveTabContent(that, tabIndex);
            },

            setActiveTabCss: function (that, tabIndex) {
                var els = that.el.query("a"), i;

                if (els && els.length) {
                    for (i = 0; i < els.length; i++) {
                        if (i === tabIndex) {
                            Ext.fly(els[i]).addCls('current');
                        } else {
                            Ext.fly(els[i]).removeCls('current');
                        }
                    }
                }
            },

            setActiveTabContent: function (that, tabIndex) {
                //set active tab on actual tab panel                
                that.tabpanel.setActiveTab(tabIndex);                
            }
        });
    },

    populateTabPanel: function (that) {
        var i,
            items = that.customdata.items,
            activeTab = that.customdata.activeTab,
            tp = that.query("#contenttabpanel")[0];

        //add items
        for (i = 0; i < items.length; i++) {
            tp.add(items[i]);
        }

        //set activetab
        tp.activeTab = activeTab;
    },

    initComponent: function () {

        //prepare renderdata object consumed by render template
        (this.data = function (context) {
            var str, items, tabsContent, i, activeTabIndex, tabsArr = [], rd = {};

            items = context.tabitems;
            activeTabIndex = (typeof context.activeTab === "number" && context.activeTab >= 0) ? context.activeTab : 0; //default is first tab;

            //create render object items collection
            if (items && typeof items.length === "number" && items.length > 0) {
                activeTabIndex = (activeTabIndex >= items.length) ? items.length - 1 : activeTabIndex; //if activetab index exceeds length, set it to last tab's index
                for (i = 0; i < items.length; i++) {
                    tabsArr[i] = {
                        liclass: "",
                        aclass: "",
                        title: items[i].title
                    };
                }
                tabsArr[activeTabIndex].aclass = "current";
                tabsArr[0].liclass = "nav-one";
            }

            //create renderdata object
            rd.tabsarr = tabsArr; //tabs array
            rd.items = items; //content array
            rd.activeTab = activeTabIndex; //active tab. First tab has index 1.

            return rd;
        } (this));

        //headerTpl.apply(this.data);
        this.customdata = this.data;

        this.callParent(arguments);
    }
});
