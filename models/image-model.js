var db=require('../database');
module.exports={ 
  index:function(callback){
   // check unique email address
   var sql='SELECT file_name FROM users_file';
   db.query(sql,function (err, data, fields) {
   if(err) throw err
   return callback(data);
  })
  }

}