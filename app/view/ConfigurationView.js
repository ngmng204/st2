Ext.define('sencha.view.ConfigurationView', {
    extend: 'Ext.navigation.View',
    xtype: 'configurationview',
    id: 'configurationview-id',
    config: {
        
        defaults: {
            styleHtmlContent: true
        },
        navigationBar: {
        	id: 'navigation-bar-id',
        	ui: 'sencha',
            
            text: "A",
        },
        items: [{
        	xtype: 'diseaselistview',
        	//html: 'test'
        }],
    }
});
