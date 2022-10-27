
let mysql = require('mysql');
let connection = mysql.createConnection({
       host:"sql55555.eu",
       user:"u2555555n",
       password:"B555553",
       database:"u266666_db"
   })

describe('MYSQL Test', function() {

    it('DataBase testing in Playwright', async() => {
        let sql = "delete from node_testing where name='vikas'"
         let queryreslut = await connection.connect()
        console.log(await queryreslut.query(sql))
        //  let queryreslut = await connectionvar.query(sql);

         Object.keys(queryreslut).forEach(function(keyItem){
            let row = queryreslut[keyItem]
            console.log(row.name +" "+ row.designation)
        })
        connection.end();
    })

});