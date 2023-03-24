var Connection = require('tedious').Connection;
var config = {
    server: 'HP_PAVILION_02',
    authentication : {
        type : 'default',
        options : {
            username : 'sa',
            password : 'sa123'
        }
    },
    options : {
        encrypt : true,
        database : 'Perpustakaan'
    }
};

var connection = new Connection(config);
connection.on('connect', function(err){
    console.log("Connected");
});

connection.connect();