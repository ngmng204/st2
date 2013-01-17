Ext.define("sencha.controller.ConfigureController", {
	extend: "Ext.app.Controller",
	config:{
		refs:{
			'navigationView': 'navigationview',
            'xmlListView': 'xmllistview',
            'mineralButton': '#mineral-btn',
            'vitaminButton': '#vitamin-btn',
            'acidButton': '#acid-btn',
            'precausionButton': '#precausion-btn',
            'bottomToolbar': '#bottom-toolbar'
		},
		control:{
			xmlListView:{
				
			},
            mineralButton: {
                tap: 'onMineralButtonTap'
            },
            navigationView:{
                push: "onNavigationPush",
                pop: "onNavigationPop"
            },
		}
		
	},
   onMineralButtonTap: function(){
            
            this.getNavigationView().push({xtype: 'acidlistview'});
   },
   onNavigationPush: function(){
           console.log("onNavigationPush")
           this.hideButtons();
    },
   onNavigationPop: function(){
            console.log("on navigation pop");
           mineralBUtton = this.getMineralButton();
           mineralBUtton.show();
           this.getVitaminButton().show();
           this.getPrecausionButton().show();
           this.getAcidButton().show();
           this.getBottomToolbar().show();
   },
   hideButtons: function(){
            mineralBUtton = this.getMineralButton();
            mineralBUtton.hide();
            this.getVitaminButton().hide();
            this.getPrecausionButton().hide();
            this.getAcidButton().hide();
           this.getBottomToolbar().hide();
   }
});