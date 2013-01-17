Ext.define('sencha.view.DemoListView', {
    extend: 'Ext.List',
    xtype: 'demolistview',

    config: {
        title: 'Xml List View',
		iconCls: 'user',
        //grouped: true, 
        store: 'DemoStore',
        onItemDisclosure: true,
        useTitleAsBackText: true,
        itemTpl: '{Data}'
        
    }
});
