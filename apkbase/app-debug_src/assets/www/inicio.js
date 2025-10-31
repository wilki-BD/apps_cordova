let b = document.getElementById('b');
let r = document.getElementById('r');
let d = document.getElementById('d');
let body = document.body ;
let tit = document.getElementById('tit');



document.addEventListener('deviceready', () => {

    b.addEventListener('click', () => {

        let nombre = d.value;

      let db = sqlitePlugin.openDatabase({name: 'base23.db', location:'default'});

      db.transaction((tx) => {

        tx.executeSql('CREATE TABLE IF NOT EXISTS datos (contra TEXT);');
        tx.executeSql('INSERT INTO datos (contra) VALUES (?);',[nombre]);

      },() => b.innerHTML = 'error',() => b.innerHTML = 'listo');

    });
    
    tit.addEventListener('click', () => {
        
        db.transaction((tx) => {
        
            tx.executeSql('SELECT * FROM datos;',[], (tx,res) => {
                
                
                tit.innerHTML = res.rows.item(0).contra;
                
                
            });
            
            },() => tit.innerHTML = 'no hay nada en la base', () => document.body.style = 'green');
        
    });

});
