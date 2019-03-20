var mysql = require('mysql'); 
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'wjddncks!', 
    database : 'o2'
});

connection.connect();

// var sql = 'SELECT * FROM topic';
// connection.query(sql, (err, rows, fields) => {
//     if(err) {
//         console.log(err);
//     } else {
//         for(var i = 0; i < rows.length; i++) {
//             console.log(rows[i].author);
//         }
//     }
// });

// var sql = 'INSERT INTO topic (title, description, author) VALUES (?, ?, ?)';
// var params = ['Supervisor', 'Watcher', 'graphtitle'];
// connection.query(sql, params, (err, rows, fields) => {
//     if(err) { 
//         console.log(err); 
//     } else {
//         console.log(rows);
//     }
// });


// var sql = 'UPDATE topic SET title=?, author=? WHERE id=?';
// var params = ['Javascript', 'woochan2', 1];
// connection.query(sql, params, (err, rows, fields) => {
//     if(err) { 
//         console.log(err); 
//     } else {
//         console.log(rows);
//     }
// });

var sql = 'DELETE FROM topic WHERE id=?';
var params = [2];
connection.query(sql, params, (err, rows, fields) => {
    if(err) { 
        console.log(err); 
    } else {
        console.log(rows);
    }
});

connection.end();