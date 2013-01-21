Ext.define('sencha.view.NavigationView', {
    extend: 'Ext.navigation.View',
    xtype: 'navigationview',
    id: 'navigationview-id',
    config: {
        iconCls: 'home',
        //title: 'Navigation View',
        defaults: {
            styleHtmlContent: true
        },
        navigationBar: {
        	id: 'navigation-bar-id',
        	ui: 'sencha',
            
            text: "A",
        	items: [
                    {
                    xtype: "button",
                    ui:'action-small',
                    id: "done-btn",
                    text: "Done",
                    align: 'right',
                    hidden: false,
                    },
                    {
                    xtype: "button",
                    id: "acid-btn",
                    text: "Acid",
                    align: 'right',
                    hidden: false,
                    },
                    {
                    xtype: "button",
                    id: "mineral-btn",
                    text: "Mineral",
                    align: 'center',
                    hidden: false,
                    },
                    
            ]
        },
        items: [{
        	xtype: 'diseaselistview',
        	//html: 'test'
        },
        {
        xtype: 'toolbar',
        docked: 'bottom',
                id: 'bottom-toolbar',
                items: [{
                        xtype: "button",
                        id: "vitamin-btn",
                        text: "Vitamin",
                        align: 'right',
                        hidden: false,
                        },
                        
                        
                        {
                        xtype: "button",
                        id: "precausion-btn",
                        text: "Precausion",
                        align: 'left',
                        hidden: false,
                        }]
        
        //html: 'test'
        },
//                {
//                xtype: 'toolbar',
//                docked: 'top',
//                id: 'bottom-toolbar1',
//                items: [{
//                        xtype: "button",
//                        id: "vitamin-btn",
//                        text: "vitamin",
//                        align: 'right',
//                        hidden: false,
//                        },
//                        {
//                        xtype: "button",
//                        id: "precausion-btn",
//                        text: "precausion",
//                        align: 'left',
//                        hidden: false,
//                        }]
//                
//                //html: 'test'
//                }
        ]
    }
});
