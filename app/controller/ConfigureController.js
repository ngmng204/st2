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
            'bottomToolbar': '#bottom-toolbar',
            'doneButton': '#done-btn',
            'diseaseListView': 'diseaselistview',
            'cardView': 'cardview'
		},
		control:{
			xmlListView:{
                itemtap: 'onItemSelect'
			},
            mineralButton: {
                tap: 'onMineralButtonTap'
            },
            acidButton: {
                tap: 'onAcidButtonTap'
            },
            vitaminButton: {
                tap: 'onVitaminButtonTap'
            },
            precausionButton: {
                    tap: 'onPrecausionButtonTap'
            },
            navigationView:{
                push: "onNavigationPush",
                pop: "onNavigationPop"
            },
            doneButton: {
                tap: 'onDoneButtonTap'
            },
            diseaseListView:{
                itemtap: 'onItemDiseaseTap'
            }
		}
		
	},
   onMineralButtonTap: function(){
            
            this.getNavigationView().push({xtype: 'minerallistview'});
   },
   onAcidButtonTap: function(){
   
            this.getNavigationView().push({xtype: 'acidlistview'});
   },
   onVitaminButtonTap: function(){
   
            this.getNavigationView().push({xtype: 'vitaminlistview'});
   },
   onPrecausionButtonTap: function(){
   
            this.getNavigationView().push({xtype: 'precausionlistview'});
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
           console.log("hide")
            mineralBUtton = this.getMineralButton();
            mineralBUtton.hide();
            this.getVitaminButton().hide();
            this.getPrecausionButton().hide();
            this.getAcidButton().hide();
            this.getBottomToolbar().hide();
           Ext.getCmp("bottom-toolbar").hide();
   },
    onDoneButtonTap: function(){
           console.log("onDoneButtonTap");
           //Get all condition and query
           //get vitamin condition
           var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
           db.transaction(queryConditions, error);
           this.getCardView().setActiveItem(1);
    },
    onItemDiseaseTap: function(list, index, node, record) {
           console.log("selected")
           console.log("selected");
           //save
           //alert(record.data.id);
           sencha.app.diseaseSelect = record.data.id
           console.log("selected");
           var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
           db.transaction(queryDisease, error);

    },
    onItemSelect: function(list, index, node, record) {
           console.log("selected");
           //save
           alert(record.data.id);
           sencha.app.diseaseSelect = record.data.id
           console.log("selected");
           var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
           db.transaction(queryDisease, error);
           console.log("done")
           
    }
});


function queryDisease(tx){
        console.log("queryDisease")
        tx.executeSql("select * from diseases where choose=1", [], successDisease, errorCondition);
        
}
function successDisease(tx){
    console.log("save");
    tx.executeSql("update diseases set choose=0", [], sucessSave, errorCondition);
    tx.executeSql("update diseases set choose=1 where id=" + sencha.app.diseaseSelect, [], sucessSave, errorCondition)
    
}
function sucessSave(){
    console.log("save success")
}
function queryConditions(tx){
    tx.executeSql("select * from vitamins where choose=1", [], sucessVitaminsCondition, errorCondition);
    tx.executeSql("select * from minerals where choose=1", [], sucessMineralsCondition, errorCondition);
    tx.executeSql("select * from acids where choose=1", [], sucessAcidsCondition, errorCondition);
    tx.executeSql("select * from precausions where choose=1", [], sucessPrecausionsCondition, errorCondition);
    tx.executeSql("select * from diseases where choose=1", [], successDiseaseCondition, errorCondition)
    tx.executeSql("update done_status  set done_status=1", [], sucessSave, errorCondition)
}

function sucessVitaminsCondition(tx, result){
    console.log(result.rows.length)
    var res = new Array();
    for(var i=0; i<result.rows.length; i++){
        res[i] = result.rows.item(i).id;
    }
    sencha.app.vitaminsCondition = res;
    console.log(sencha.app.vitaminsCondition)
}
function sucessMineralsCondition(tx, result){
    console.log(result.rows.length)
    var res = new Array();
    for(var i=0; i<result.rows.length; i++){
        res[i] = result.rows.item(i).id;
    }
    sencha.app.mineralsCondition = res;
    console.log(sencha.app.mineralsCondition)
}
function sucessAcidsCondition(tx, result){
    console.log(result.rows.length)
    var res = new Array();
    for(var i=0; i<result.rows.length; i++){
        res[i] = result.rows.item(i).id;
    }
    sencha.app.acidsCondition = res;
    console.log(sencha.app.acidsCondition)
}
function sucessPrecausionsCondition(tx, result){
    console.log(result.rows.length)
    var res = new Array();
    for(var i=0; i<result.rows.length; i++){
        res[i] = result.rows.item(i).id;
    }
    sencha.app.precausionsCondition = res;
    console.log(sencha.app.precausionsCondition)
}
function successDiseaseCondition(tx, result){
    if(result.rows.length > 0)
        sencha.app.diseaseCondition = result.rows.item(0).id
    else{
        alert("you have to set up for configuration")
    }
}
function errorCondition(err){
    console.log("error")
}