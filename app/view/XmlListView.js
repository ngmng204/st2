Ext.define('sencha.view.XmlListView', {
    extend: 'Ext.List',
    xtype: 'xmllistview',

    config: {
        title: 'Xml List View',
		iconCls: 'user',
        //grouped: true, 
        store: null,
        onItemDisclosure: true,
        useTitleAsBackText: true,
        itemTpl: '<img id="{id}"src={thumb_url} />{title}'
        
    }
});
