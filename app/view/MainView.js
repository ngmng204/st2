Ext.define("sencha.view.MainView", {
  extend: 'Ext.NavigationView',
  requires: ['Ext.NavigationView', 'Ext.dataview.List'],
  xtype: 'mainview',
  
  config: {
    items: [
    {
      title: 'List of People',
      layout: 'fit',
      xtype: 'container',
      itemId: 'listContainer',
      items: [
      {
        xtype: 'list',
        store: 'PeopleStore',
        itemTpl: '{name}',
        emptyText: 'No people added yet'
      },
      {
        xtype: 'container',
        docked: 'bottom',
        padding: '5px',
        items: [{ xtype: 'button', itemId: 'addBtn', text: 'Add Person', ui: 'confirm' }]
      }
      ]
    }
    ]
  }
});