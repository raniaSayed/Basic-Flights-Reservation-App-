
<h2>Basic Flight Reservation API</h2>
NodeJs-MonogDB API single page application for booking flight seats.



<h2>Getting Started</h2>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


<h2>Prerequisites (Used Technologies) </h2>

<a href="https://nodejs.org/en/docs/">Node.js</a> v8.10.0 or above

<a href="https://docs.mongodb.com/">MongoDB</a> database engine v3.6.3

<h2>Installation</h2>

<h3>To run App on Ububtu:</h3> 
follow this commands

$ sudo service mongod start

$ cd {project_folder}/

$ npm install

$ npm start

$ mongo

Execute this script on mongo shell

<h4> Add inital seats to system with this script </h4>


    use fligth_reservation313; 

    let  seats = []; 

    let chars = ["A","B","C","D","E","F"]; 

    for(var i = 1 ;i < 11 ;i++){ 

      for(var j = 0 ;j < 6 ;j++){ 

        seats.push({_id:(i+chars[j]),available:true}); 
       }
    } 
    db.seats.insert(seats) 


start app via https://localhost:9090/

<h3>To run App on Windows</h3>

Start mongoDB server :

mongod.exe --config="C:\mongodb\mongo.config"

Connect to localhost MongoDB server via command line

mongo --port 27017

open project directory

open cmd and type this commands

$ npm install

$ npm start

$ mongo

Execute this script on mongo shell

<h4> Add inital seats to system with this script </h4>

    use fligth_reservation313; 

    let  seats = []; 

    let chars = ["A","B","C","D","E","F"]; 

    for(var i = 1 ;i < 11 ;i++){ 

      for(var j = 0 ;j < 6 ;j++){ 

        seats.push({_id:(i+chars[j]),available:true}); 
       }
    } 
    db.seats.insert(seats) 


start app via https://localhost:9090/


<h2>Author</h2>
<a href="https://github.com/raniaSayed">Rania Sayed</a>
