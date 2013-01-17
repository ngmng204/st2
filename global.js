
function initialize(tx){
    tx.executeSql('DROP TABLE IF EXISTS diseases');
    tx.executeSql('CREATE TABLE IF NOT EXISTS diseases(id INTEGER PRIMARY KEY AUTOINCREMENT, disease_name)');
    tx.executeSql('DROP TABLE IF EXISTS vitamins');
    tx.executeSql('CREATE TABLE IF NOT EXISTS vitamins(id INTEGER PRIMARY KEY AUTOINCREMENT, vitamin_name)');
    //Create table acids
    tx.executeSql('DROP TABLE IF EXISTS acids');
    tx.executeSql('CREATE TABLE IF NOT EXISTS acids(id INTEGER PRIMARY KEY AUTOINCREMENT, acid_name)');
    //Create table minerals
    tx.executeSql('DROP TABLE IF EXISTS minerals');
    tx.executeSql('CREATE TABLE IF NOT EXISTS minerals(id INTEGER PRIMARY KEY AUTOINCREMENT, mineral_name)');
    //Create table precausions
    tx.executeSql('drop table if exists precausions');
    tx.executeSql('create table if not exists precausions(id INTEGER PRIMARY KEY AUTOINCREMENT, precausion_name)');
    
    tx.executeSql('INSERT INTO diseases (disease_name) VALUES ("Disease name0"),("Disease name1"),("Disease name 2"),("Disease name 3"),("Disease name 4"),("Disease name 5")');
    tx.executeSql('INSERT INTO vitamins (vitamin_name) VALUES ("vitamin name0"),("vitamin name1"),("vitamin name 2"),("vitamin name 3"),("vitamin name 4"),("vitamin name 5")');
    tx.executeSql('INSERT INTO minerals (mineral_name) VALUES ("mineral_name name0"),("mineral_name name1"),("mineral_name name 2"),("mineral_name name 3"),("mineral_name name 4"),("mineral_name name 5")');
    tx.executeSql('INSERT INTO precausions (precausion_name) VALUES ("precausions name0"),("precausions name1"),("precausions name 2"),("precausions name 3"),("precausions name 4"),("precausions name 5")');
    tx.executeSql('INSERT INTO acids (acid_name) VALUES ("acid_name name0"),("acid_name name1"),("acid_name name 2"),("acid_name name 3"),("acid_name name 4"),("acid_name name 5"),("acid_name name0"),("acid_name name1"),("acid_name name 2"),("acid_name name 3"),("acid_name name 4"),("acid_name name 5")');
}
function bindStore(tx, results, storeName){
    console.log("bind store");
    console.log(results.rows.item(0))
    
    var store = Ext.getStore(storeName);
    console.log(storeName)
    switch(storeName){
            case "DiseaseStore":
                    for(var i=0; i<results.rows.length; i++){
                        console.log(results.rows.item(i));
                        var diseaseObject = new Object();
                        diseaseObject.id = results.rows.item(i).id
                        diseaseObject.disease_name = results.rows.item(i).disease_name;
                        var diseaseModel = Ext.create("sencha.model.DiseaseModel", diseaseObject)
                        store.add(diseaseModel)
                    }
                    break;
            case "VitaminStore":
                    for(var i=0; i<results.rows.length; i++){
                        console.log(results.rows.item(i));
                        var diseaseObject = new Object();
                        diseaseObject.id = results.rows.item(i).id
                        diseaseObject.vitamin_name = results.rows.item(i).vitamin_name;
                        var model = Ext.create("sencha.model.VitaminModel", diseaseObject)
                        store.add(model)
                    }
                    break;
            case "PrecausionStore":
                for(var i=0; i<results.rows.length; i++){
                    console.log(results.rows.item(i));
                    var diseaseObject = new Object();
                    diseaseObject.id = results.rows.item(i).id
                    diseaseObject.precausion_name = results.rows.item(i).precausion_name;
                    var model = Ext.create("sencha.model.PrecausionModel", diseaseObject)
                    store.add(model)
                }
                break;
            case "MineralStore":
                for(var i=0; i<results.rows.length; i++){
                    console.log(results.rows.item(i));
                    var diseaseObject = new Object();
                    diseaseObject.id = results.rows.item(i).id
                    diseaseObject.mineral_name = results.rows.item(i).mineral_name;
                    var model = Ext.create("sencha.model.MineralModel", diseaseObject)
                    store.add(model)
                }
                break;
            case "AcidStore":
                for(var i=0; i<results.rows.length; i++){
                    console.log(results.rows.item(i));
                    var diseaseObject = new Object();
                    diseaseObject.id = results.rows.item(i).id
                    diseaseObject.acid_name = results.rows.item(i).acid_name;
                    var model = Ext.create("sencha.model.AcidModel", diseaseObject)
                    store.add(model)
                }
                break;
            default:  break;

            
            
    }
    
}