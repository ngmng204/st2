Ext.define("sencha.controller.XmlController", {
	extend: "Ext.app.Controller",
	config:{
		refs:{
			'xmlListView': 'xmllistview'	
		},
		control:{
			xmlListView:{
				
			}
		}
		
	},
	init:function(){
		var xmlStore = Ext.getStore('XmlOnlineStore');
		var me = this;
		var xmlOfflineStore = Ext.getStore('XmlOfflineStore');
		
		xmlStore.addListener('load', function(){
			//me.getXmlListView().setStore('XmlLocalStore');
			
			this.each(function (record) {
				console.log(record.data)
		        var item = xmlOfflineStore.add(record.data)[0];
		        xmlModel = Ext.create('sencha.model.XmlModel', record);
		        console.log(xmlModel)
		        xmlModel.setUrl(record.data);
		    });
			xmlOfflineStore.sync();
			me.getXmlListView().setStore(xmlOfflineStore);
			
		});
		xmlStore.load();
	}
});