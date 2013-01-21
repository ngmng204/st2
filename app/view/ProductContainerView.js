Ext.define('sencha.view.ProductContainerView', {
    extend: 'Ext.navigation.View',
    xtype: 'productcontainerview',
    id: 'productcontainerview-id',
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
        	xtype: 'productlistview',
        	//html: 'test'
        }
        
        ]
    }
});
