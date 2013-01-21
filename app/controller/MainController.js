Ext.define("sencha.controller.MainController", {
	extend: "Ext.app.Controller",
	config:{
		refs:{
           settingButton: '#setting-btn',
           cardView: 'cardview'
		},
		control:{
           'settingButton':{
                tap:'onSettingButtonTap' 
           }
           
        }
    },
    init: function(){
            console.log("init")
    },
    onSettingButtonTap: function(){
            console.log("onSettingButtonTap")
            this.getCardView().setActiveItem(0)
    }
})
  