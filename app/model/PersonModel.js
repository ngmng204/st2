Ext.define('sencha.model.PersonModel', {
  extend: 'Ext.data.Model',
  
  config: {
    fields: [
    { name: 'id', type: 'int' }, // Every model must start with an id of type int
    { name: 'name', type: 'string' } // bools, floats, objects and arrays also supported
    ],
    
    validations: [
    {
      name: 'name',
      type: 'length',
      min: 4,
      message: 'Person\'s name must be at least 4 characters long'
    }
    ],
    
    proxy: {
      type: 'sqlitestorage',
      dbConfig: {
        tablename: 'people',
        dbConn: sencha.util.InitSQLite.getConnection()
      }
    }
  }
  
});