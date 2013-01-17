Ext.define('sencha.view.DiseaseListView', {
    extend: 'Ext.List',
    xtype: 'diseaselistview',

    config: {
        title: 'Disease List View',
		iconCls: 'user',
        //grouped: true, 
        store: 'DiseaseStore',
        onItemDisclosure: true,
        useTitleAsBackText: true,
        itemTpl: '{disease_name}'
        
    }
});
