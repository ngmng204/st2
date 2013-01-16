Ext.define('sencha.store.PeopleStore', {
  
  extend: 'Ext.data.Store',
  
  requires: ['sencha.model.PersonModel'],
  
  config: {
    model: 'sencha.model.PersonModel',
    autoLoad: true,
    storeId: 'PeopleStore',
    pageSize: 1000
  }
});
