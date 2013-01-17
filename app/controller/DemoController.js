Ext.define('sencha.controller.DemoController', {
  extend: 'Ext.app.Controller',
  
  config: {
    
    
    refs: {
      main: 'mainview',
      listContainer: 'mainviewn #listContainer',
      list: 'mainview #listContainer list',
      addBtn: 'mainview #listContainer #addBtn',
      editPerson: 'mainview editpersonview',
      editPersonBtn: 'mainview editpersonview #saveBtn'
    },
    
    control: {
          addBtn: {
            tap: 'newPerson'
          },
          editPersonBtn: {
            tap: 'savePerson'
          },
          list: {
            itemtap: 'editPerson'
          },
          listContainer: {
            activate: 'deselectList'
          }
        }
   },
   init: function(){
           console.log("init");
           //query database;
           //document.addEventListener("deviceready", this.onDeviceReady(), false);
           
          /// db.transaction(this.queryDB(), this.errorCB());
   },
   onDeviceReady: function(){
           alert("query");
           //var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
   },
   errorCB: function(){
        alert("error")
   }
});