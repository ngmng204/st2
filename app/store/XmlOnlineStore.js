Ext.define("sencha.store.XmlOnlineStore",{
	extend: "Ext.data.Store",
	requires: 'Ext.data.reader.Xml',
	config: {
		autoLoad: true,
		model: 'sencha.model.XmlModel',
		
		storeId: 'XmlOnlineStore',
		proxy: {
	        type: 'ajax',
	        url : 'music.xml',
	        reader: {
	            type: 'xml',
	            record: 'song',
	        }
	    }
	}
})