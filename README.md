

To start API

install required modules ===> npm install
Start Mongo Server ===> sudo service mongod start (for ubntu) & mongod (for windwos)
Start mongo client ===> mongo

add inital seats to system with this script===>
 use fligth_reservation313;
 let  seats = []; 
for(var i = 0 ;i < 20 ;i++){
    seats.push({number:i+1,available:true});
}
db.seats.insert(seats)

Start App ===> npm start