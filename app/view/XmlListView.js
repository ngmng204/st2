Ext.define('sencha.view.XmlListView', {
    extend: 'Ext.List',
    xtype: 'xmllistview',

    config: {
        title: 'Products',
		iconCls: 'user',
        //grouped: true, 
        store: 'XmlOnlineStore',
        onItemDisclosure: true,
        useTitleAsBackText: true,
        itemTpl: '{title}'//'<img id="{id}"src={thumb_url} />'
           
        
    }
});
