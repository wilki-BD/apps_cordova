let b = document.getElementById('b');
let r = document.getElementById('r');
let d = document.getElementById('d');
let body = document.body ;



document.addEventListener('deviceready', () => {

    b.addEventListener('click', () => {

        let nombre = d.value;

      let db = sqlitePlugin.openDatabase({name: 'base23.db', location:'default'});

      db.transaction((tx) => {

        tx.executeSql('CREATE TABLE IF NOT EXISTS datos (nombres TEXT);');
        tx.executeSql('INSERT INTO datos (nombres) VALUES (?);',[nombre]);

      },() => body.style.background = 'red',body.style.background = 'green');

    });

});