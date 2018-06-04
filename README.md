

To start API

install required modules ===> npm install \n
Start Mongo Server ===> sudo service mongod start (for ubntu) & mongod (for windwos) \n
Start mongo client ===> mongo \n

add inital seats to system with this script===> \n
 use fligth_reservation313; \n
 let  seats = []; \n
 let chars = ["A","B","C","D","E","F"]; \n
for(var i = 1 ;i < 11 ;i++){ \n
    for(var j = 0 ;j < 6 ;j++){ \n
      seats.push({_id:(i+chars[j]),available:true}); \n
    }\n
}
db.seats.insert(seats) \n

Start App ===> npm start \n