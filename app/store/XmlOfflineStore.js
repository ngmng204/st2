Ext.define("sencha.store.XmlOfflineStore",{
	extend: "Ext.data.Store",
	requires: 'Ext.data.reader.Xml',
	config: {
		autoLoad: true,
		model: 'sencha.model.XmlModel',
		
		storeId: 'XmlOfflineStore',
		proxy: {
	        type: 'localstorage',
	        id: 'xmlofflinestore'
	    }
	}
})