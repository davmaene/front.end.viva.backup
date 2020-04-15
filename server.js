//Install express server
// const mysql = require('mysql');
const express = require('express');
const app = express();
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: '_viva_db_ver_0_'
// });
// db.connect(function(error){
//   if (error) {
//     throw error;
//   }else{
//     console.log('connection succefuly');
//   }
// });
// app.get('/create-db', function(req, res){
//   let sql = 'CREATE DATABASE _viva_db_tst_';
//   db.query(sql, function(err, result){
//     if (err) throw err;
//     console.log(result);
//     res.send('database created :: OK');
//   });
// });
app.use(express.static('./dist/vivaRDC'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/vivaRDC/'});
});
app.listen(process.env.PORT || 3000, function(){
  console.log("Server is listening at ::==:: ",this.address().port, app.settings.env);
});
