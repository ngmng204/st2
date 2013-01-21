Ext.define('sencha.view.ProductContainerView', {
    extend: 'Ext.navigation.View',
    xtype: 'productcontainerview',
    id: 'productcontainerview-id',
    config: {
        iconCls: 'home',
        
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
                    id: "setting-btn",
                    text: "setting",
                    align: 'right',
                    hidden: false,
                    },
                    
                    
            ]
        },
        items: [{
        	xtype: 'xmllistview',        	
        }]
    }
});
