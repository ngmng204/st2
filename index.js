function onDeviceReady(){
   
    
    if(window.localStorage.getItem('runned')==null){
        // First RUN
        console.log('============first running=========');
        var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
        db.transaction(populateDB, error);
        window.localStorage.setItem('runned','1')
        db.transaction(queryforGetCondition, error);
        
    }else{
        console.log('======= already launched ===========');        
        var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
        db.transaction(queryForCheckingDoneConfig, error)
    }
}
function populateDB(tx){
    console.log("pop pulate")
    tx.executeSql('DROP TABLE IF EXISTS done_status');
    tx.executeSql('CREATE TABLE IF NOT EXISTS done_status(id INTEGER NOT NULL, done_status INTEGER(1), PRIMARY KEY(id))');
    tx.executeSql('INSERT INTO done_status (id, done_status) VALUES (1,0)');   
    
    tx.executeSql('DROP TABLE IF EXISTS DEMO');
    
    
    tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
    tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "Premier enregistrement")');
    tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Seconde enregistrement")');
    
    tx.executeSql('DROP TABLE IF EXISTS diseases');
    tx.executeSql('CREATE TABLE IF NOT EXISTS diseases (id INTEGER NOT NULL, name VARCHAR(25),  choose INTEGER(1), PRIMARY KEY (id))');
    tx.executeSql('INSERT INTO diseases (id, name, choose) VALUES (1, "Premier diseases", 0)');
    tx.executeSql('INSERT INTO diseases (id, name, choose) VALUES (2, "Seconde diseases", 0)');
    tx.executeSql('INSERT INTO diseases (id, name, choose) VALUES (3, "Seconde diseases", 0)');
    tx.executeSql('INSERT INTO diseases (id, name, choose) VALUES (4, "Seconde diseases", 0)');
    tx.executeSql('INSERT INTO diseases (id, name, choose) VALUES (5, "Seconde diseases", 0)');
    tx.executeSql('INSERT INTO diseases (id, name, choose) VALUES (6, "Seconde diseases", 0)');
    
    
    tx.executeSql('DROP TABLE IF EXISTS vitamins');
    tx.executeSql('CREATE TABLE if not exists vitamins(id INTEGER NOT NULL, name VARCHAR(25),  choose INTEGER(1), PRIMARY KEY (id))');
    tx.executeSql('INSERT INTO vitamins (id, name, choose) VALUES (1, "Premier vitamins", 0)');
    tx.executeSql('INSERT INTO vitamins (id, name, choose) VALUES (2, "Seconde vitamins", 0)');
    tx.executeSql('INSERT INTO vitamins (id, name, choose) VALUES (3, "Seconde vitamins", 0)');
    tx.executeSql('INSERT INTO vitamins (id, name, choose) VALUES (4, "Seconde vitamins", 0)');
    tx.executeSql('INSERT INTO vitamins (id, name, choose) VALUES (5, "Seconde vitamins", 0)');
    tx.executeSql('INSERT INTO vitamins (id, name, choose) VALUES (6, "Seconde vitamins", 0)');
    
    
    tx.executeSql('DROP TABLE IF EXISTS minerals');
    tx.executeSql('CREATE TABLE IF NOT EXISTS minerals (id INTEGER NOT NULL, name VARCHAR(25),  choose INTEGER(1), PRIMARY KEY (id))');
    tx.executeSql('INSERT INTO minerals (id, name, choose) VALUES (1, "Premier minerals",0)');
    tx.executeSql('INSERT INTO minerals (id, name, choose) VALUES (2, "Seconde minerals",0)');
    tx.executeSql('INSERT INTO minerals (id, name, choose) VALUES (3, "Seconde minerals",0)');
    tx.executeSql('INSERT INTO minerals (id, name, choose) VALUES (4, "Seconde minerals",0)');
    tx.executeSql('INSERT INTO minerals (id, name, choose) VALUES (5, "Seconde minerals",0)');
    tx.executeSql('INSERT INTO minerals (id, name, choose) VALUES (6, "Seconde minerals",0)');
    
    
    tx.executeSql('DROP TABLE IF EXISTS acids');
    
    //tx.executeSql('CREATE TABLE if not exists  acids(id INTEGER(11) PRIMARY KEY, name VARCHAR(255), check varchar(1))');
    tx.executeSql('CREATE TABLE if not exists acids(id INTEGER NOT NULL, name VARCHAR(25),  choose INTEGER(1), PRIMARY KEY (id))');
    
    
    tx.executeSql('INSERT INTO acids (id, name, choose) VALUES (1, "Premier acids", 1)');
    tx.executeSql('INSERT INTO acids (id, name, choose) VALUES (2, "Premier acids", 1)');
    tx.executeSql('INSERT INTO acids (id, name, choose) VALUES (3, "Seconde acids", 1)');
    tx.executeSql('INSERT INTO acids (id, name, choose) VALUES (4, "Seconde acids", 0)');
    tx.executeSql('INSERT INTO acids (id, name, choose) VALUES (5, "Seconde acids", 0)');
    tx.executeSql('INSERT INTO acids (id, name, choose) VALUES (6, "Seconde acids", 0)');
    
    tx.executeSql('DROP TABLE IF EXISTS precausions');
    tx.executeSql('CREATE TABLE IF NOT EXISTS precausions (id INTEGER NOT NULL, name VARCHAR(25),  choose INTEGER(1), PRIMARY KEY (id))');
    tx.executeSql('INSERT INTO precausions (id, name, choose) VALUES (1, "Premier precausions", 0)');
    tx.executeSql('INSERT INTO precausions (id, name, choose) VALUES (2, "Seconde precausions", 0)');
    tx.executeSql('INSERT INTO precausions (id, name, choose) VALUES (3, "Seconde precausions", 0)');
    tx.executeSql('INSERT INTO precausions (id, name, choose) VALUES (4, "Seconde precausions", 0)');
    tx.executeSql('INSERT INTO precausions (id, name, choose) VALUES (5, "Seconde precausions", 0)');
    tx.executeSql('INSERT INTO precausions (id, name, choose) VALUES (6, "Seconde precausions", 0)');
    
    
    //create product list
    tx.executeSql('DROP TABLE IF EXISTS products');
    tx.executeSql('CREATE TABLE IF NOT EXISTS products (id INTEGER NOT NULL, name VARCHAR(255),  disease INTEGER(11), vitamins VARCHAR(255), acids VARCHAR(255), minerals VARCHAR(255), precausions VARCHAR(255), PRIMARY KEY (id))');
    
    
    tx.executeSql('INSERT INTO products (id, name, disease, vitamins, acids, minerals, precausions) VALUES (1, "Product 1",1, "[1,2]", "[1]", "[2]", "[3]")');
    tx.executeSql('INSERT INTO products (id, name, disease, vitamins, acids, minerals, precausions) VALUES (2, "Product 2",1, "[1,3]", "[1]", "[2]", "[3]")');
    tx.executeSql('INSERT INTO products (id, name, disease, vitamins, acids, minerals, precausions) VALUES (3, "Product 3",1, "[1]", "[1]", "[2]", "[3]")');
    tx.executeSql('INSERT INTO products (id, name, disease, vitamins, acids, minerals, precausions) VALUES (4, "Product 4",1, "[]", "[1]", "[]", "[1]")');
    tx.executeSql('INSERT INTO products (id, name, disease, vitamins, acids, minerals, precausions) VALUES (5, "Product 5",4, "[]", "[2]", "[]", "[3]")');
    tx.executeSql('INSERT INTO products (id, name, disease, vitamins, acids, minerals, precausions) VALUES (6, "Product 6",4, "[0]", "[1]", "[2]", "[4]")');
}

function queryForCheckingDoneConfig(tx){
    tx.executeSql('select * from done_status', [], success, error)
}
function queryForShowingConfig(tx){
    console.log("queryForShowingConfig")
    tx.executeSql('SELECT * FROM diseases', [], queryDiseaseSuccess, error);
    tx.executeSql('SELECT * FROM acids', [], queryAcidSuccess, error);
    tx.executeSql('SELECT * FROM precausions', [], queryPrecausionSuccess, error);
    tx.executeSql('SELECT * FROM vitamins', [], queryVitaminSuccess, error);
    tx.executeSql('SELECT * FROM minerals', [], queryMineralSuccess, error);
    
    
}
function test(tx, results){
    console.log("taaaaaaa")
    console.log(results.rows.length)
}
function queryforGetCondition(tx){
    //tx.executeSql("select * from product where disease=3 and acids like '%1%' or acids or like '%2%' or acids like '%3%' or acids like '%4%'", [], test, error)
    console.log("queryforGetCondition")
    
    tx.executeSql('SELECT * FROM diseases where choose=1', [], function(tx, results){                  
                  
                  sencha.app.diseaseFilter = results.rows.item(0).id;                              
                  
                  //bindStore(results, 'DiseaseStore')
    }, error);
//    tx.executeSql('select * from vitamins where choose=1',[], function(tx, results){
//                  
//                  console.log("success of queryforGetCondition")
//                  bindConditionToArray('vitamins', results)
//                  console.log(sencha.app.vitaminFilter)
//                 
//                  if(sencha.app.vitaminFilter.length==0){
//                  console.log("null")
//                  }else{
//                  Ext.Array.each(sencha.app.vitaminFilter, function(e,i,l){
//                                 console.log(e)
//                                // sencha.app.queryStatement += " vitamins like '%"+e +"%'"
//                        })
//                  }
//                  
//                  bindStore(results, 'VitaminStore')
//                  }, error);
//    tx.executeSql('select * from minerals where choose=1',[], function(tx, results){
//                  
//                  console.log("success of queryforGetCondition")
//                  bindConditionToArray('minerals', results)
//                  if(sencha.app.mineralFilter.length==0){
//                  console.log("null")
//                  }else{
//                  Ext.Array.each(sencha.app.mineralFilter, function(e,i,l){
//                                 console.log(e)
//                                 })
//                  }
//                  bindStore(results, 'MineralStore')
//                  }, error);
//    tx.executeSql('select * from acids where choose=1',[], function(tx, results){
//                  
//                  console.log("success of queryforGetCondition")
//                  bindConditionToArray('acids', results)
//                  console.log(sencha.app.acidFilter)
//                  if(sencha.app.acidFilter.length==0){
//                  console.log("null")
//                  }else{
//                  Ext.Array.each(sencha.app.acidFilter, function(e,i,l){
//                                 console.log(e)
//                                 //sencha.app.queryStatement += " or acids like '%"+e +"%'"
//                                 })
//                  }
//                  console.log(sencha.app.queryStatement)
//                  bindStore(results, 'AcidStore')
//                  }, error);
//    tx.executeSql('select * from precausions where choose=1',[], function(tx, results){
//                  
//                  console.log("success of queryforGetCondition")
//                  bindConditionToArray('precausions', results)
//                  if(sencha.app.precausionFilter.length==0){
//                  console.log("null")
//                  }else{
//                  Ext.Array.each(sencha.app.precausionFilter, function(e,i,l){
//                                 console.log(e)
//                                  //sencha.app.queryStatement += " precausions like '%"+e +"%'"
//                                 })
//                  }
//                  
//                  }, error);
//    
     tx.executeSql('SELECT * FROM diseases', [], function(tx, results){bindStore(results, 'DiseaseStore')}, error)
     tx.executeSql('SELECT * FROM vitamins', [], function(tx, results){bindStore(results, 'VitaminStore')}, error)
     tx.executeSql('SELECT * FROM acids', [], function(tx, results){bindStore(results, 'AcidStore')}, error)
     tx.executeSql('SELECT * FROM minerals', [], function(tx, results){bindStore(results, 'MineralStore')}, error)
     tx.executeSql('SELECT * FROM precausions', [], function(tx, results){bindStore(results, 'PrecausionStore')}, error)
}
function bindConditionToArray(name, results){
    var temp = new Array();
    for(var i=0; i< results.rows.length; i++){
        temp[i] = results.rows.item(i).id
    }
    switch(name){
        case 'vitamins':
            sencha.app.vitaminFilter = temp
            break;
        case 'minerals':
            sencha.app.mineralFilter = temp
            break
        case 'acids':
            sencha.app.acidFilter = temp
            
            break
        case 'precausions':
            sencha.app.precausionFilter = temp
            break
        default: break
            
    }
}
function success(tx, results){
    
    if(results.rows.item(0).done_status == 1) {
        sencha.app.checkDoneStatus = 1;
        //get condition
        var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
        db.transaction(queryforGetCondition, error)
        console.log(sencha.app.acidFilter)
        var indexPanel = Ext.create('sencha.view.CardView');
        Ext.Viewport.add(indexPanel)
        Ext.getCmp('cardview-id').setActiveItem(1);
    }else{
        
        //Show Configuration page
        var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
        db.transaction(queryForShowingConfig, error)
        var indexPanel = Ext.create('sencha.view.CardView');
        Ext.Viewport.add(indexPanel)
        Ext.getCmp('cardview-id').setActiveItem(0);
        
    }
}
function error(){
    console.log("error")
}

function queryDiseaseSuccess(tx, results) {
        console.log("queryDiseaseSuccess")
        bindStore(results, 'DiseaseStore')
}
function queryVitaminSuccess(tx, results) {
        bindStore(results, 'VitaminStore')
}
function queryMineralSuccess(tx, results) {
        bindStore(results, 'MineralStore')
}
function queryAcidSuccess(tx, results) {
        console.log("queryAcidSuccess")
        bindStore(results, 'AcidStore')
}
function queryPrecausionSuccess(tx, results) {
        bindStore(results, 'PrecausionStore')
}
function bindStore(results, storeName){
    console.log(storeName)
    var len = results.rows.length;
    console.log("Table Diseases : " + len + " enregistrements trouvés.");
    for (var i=0; i<len; i++){
        console.log("Disease = " + i + " ID = " + results.rows.item(i).id + " Données =  " + results.rows.item(i).name);
    }
    var store = Ext.getStore(storeName)
    switch(storeName){
        case "DiseaseStore":
            for(var i=0; i<len; i++){
                var object = new Object();
                object.id = results.rows.item(i).id
                object.name = results.rows.item(i).name;
                var model = Ext.create("sencha.model.DiseaseModel", object)
                store.add(model)
            }
            break;
            
        case "AcidStore":
            for(var i=0; i<len; i++){
                var object = new Object();
                console.log(results.rows.item(i).name)
                object.id = results.rows.item(i).id
                object.name = results.rows.item(i).name;
                object.choose  = results.rows.item(i).choose;
                var model = Ext.create("sencha.model.AcidModel", object)
                store.add(model)
            }
            break;
        case "VitaminStore":
            for(var i=0; i<results.rows.length; i++){
                var object = new Object();
                object.id = results.rows.item(i).id
                object.name = results.rows.item(i).name;
                object.choose  = results.rows.item(i).choose;
                var model = Ext.create("sencha.model.VitaminModel", object)
                store.add(model)
            }
            break;
        case "MineralStore":
            for(var i=0; i<results.rows.length; i++){
                var object = new Object();
                object.id = results.rows.item(i).id
                object.name = results.rows.item(i).name;
                object.choose  = results.rows.item(i).choose;
                var model = Ext.create("sencha.model.MineralModel", object)
                store.add(model)
            }
            break;
        case "PrecausionStore":
            for(var i=0; i<results.rows.length; i++){
                var object = new Object();
                object.id = results.rows.item(i).id
                object.name = results.rows.item(i).name;
                object.choose  = results.rows.item(i).choose;
                var model = Ext.create("sencha.model.PrecausionModel", object)
                store.add(model)
            }
            break;
        default: break;
    }
}


function saveByStore(id, storeName){
    
    var acidStore = Ext.getStore(sencha.app.storeName);
    var currentRecord = acidStore.findRecord('id', id)
    
    
    var check = currentRecord.get("choose");
    if(check == 1) currentRecord.set('choose', 0)
        else currentRecord.set('choose', 1);
    
    
    sencha.app.checkAcid = id;
    var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
    db.transaction(queryForSaving, error);
    
}

function queryForSaving(tx){
    console.log("save")
    console.log(sencha.app.checkAcid)
    console.log("====store: " + sencha.app.storeName + "------")
    
    console.log("=======id: " +sencha.app.checkAcid + "========")
    if(sencha.app.storeName == 'MineralStore'){
        tx.executeSql("select * from minerals where id=" + sencha.app.checkAcid, [],successUpdate , error)
    }
    if(sencha.app.storeName == 'AcidStore') tx.executeSql("select * from acids where id=" + sencha.app.checkAcid, [],successUpdate , error)
        if(sencha.app.storeName == 'VitaminStore') tx.executeSql("select * from vitamins where id=" + sencha.app.checkAcid, [],successUpdate , error)
            if(sencha.app.storeName == 'PrecausionStore') tx.executeSql("select * from precausions where id=" + sencha.app.checkAcid, [],successUpdate , error)
                
                }



function successUpdate(tx, results){
    console.log(results.rows.item(0));
    var check = results.rows.item(0).choose;
    
    var status = !check;
    if(sencha.app.storeName == 'MineralStore')
            tx.executeSql("update minerals set choose=1 where id=" + results.rows.item(0).id, [], updateSuccess, error)
    if(sencha.app.storeName == 'AcidStore')
            tx.executeSql("update acids set choose=1 where id=" + results.rows.item(0).id, [], updateSuccess, error)
    if(sencha.app.storeName == 'VitaminStore')
            tx.executeSql("update vitamins set choose=1 where id=" + results.rows.item(0).id, [], updateSuccess, error)
    if(sencha.app.storeName == 'PrecausionStore')
            tx.executeSql("update precausions set choose=1 where id=" + results.rows.item(0).id, [], updateSuccess, error)
    console.log("success")
}
function updateSuccess(tx, results){
    //console.log(results.rows.item(0))
    console.log("update updateSuccess")
}