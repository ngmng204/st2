Ext.define("sencha.view.EditPersonView", {
  extend: 'Ext.form.Panel',
  requires: ['Ext.form.FieldSet', 'Ext.field.Text'],
  xtype: 'editpersonview',
  
  config: {
    layout: 'vbox',
    items: [
    {
      xtype: 'fieldset',
      items: [
      {
        xtype: 'textfield',
        label: 'Name',
        name: 'name'
      },
              {
              xtype: 'textfield',
              label: 'Name',
              name: 'name'
              },
              {
              xtype: 'textfield',
              label: 'Age',
              name: 'age'
              },
              {
              xtype: 'textfield',
              label: 'Career',
              name: 'career'
              }
      ]
    },
    {
      xtype: 'button',
      ui: 'confirm',
      text: 'Save',
      itemId: 'saveBtn'
    }
    ]
  }
});
