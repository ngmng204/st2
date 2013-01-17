Ext.define('sencha.view.AcidListView', {
    extend: 'Ext.List',
    xtype: 'acidlistview',

    config: {
        title: 'Acid List View',
		iconCls: 'user',
        //grouped: true, 
        store: 'AcidStore',
        onItemDisclosure: true,
        useTitleAsBackText: true,
        itemTpl: '{acid_name}'
        
    }
});
