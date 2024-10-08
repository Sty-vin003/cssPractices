const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'1234',
    database: 'expense_tracker'
});

connection.connect((error) => {
    if(error){
        console.error('Error connecting to database:', error);
    }else{
        console.log('seccessfully connected to database!');

        const sql = 'SELECT * FROM Expenses;';

        connection.query(sql, (error, results) =>{
            if(error){
                console.error('Error executing query:', error);
            }else{
                console.log('Retrieved expense data:', results);
            }
        });
    }
});