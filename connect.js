const mysql = require('mysql2');
require('dotenv').config();

const host = process.env.host//document.getElementById('host').value;
const user = process.env.user//document.getElementById('user').value;
const password = process.env.password //document.getElementById('password').value;
const database = process.env.database //document.getElementById('database').value;
const port = process.env.port //document.getElementById('port').value; 
// Agregamos los parametros de conexión 
const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database, 
    port: port
});
// Conectamos al manejador de base de datos 
connection.connect(function (err) {
    if (err) {
        document.getElementById('txtData').value = err.code+'\n'+err.fatal+'\nerror';
        //console.log(err.code);
        //console.log(err.fatal);
        //console.log('Error');
    } else {
        setTimeout(function(){location.href='intertabla.html'}, 3000); 
        //document.getElementById('txtData').value = 'host: '+host+' User: '+user+'Password: '+password+' Database: '+database+' Port: '+port+'\nConexion exitosa';
        console.log('conexion exitosa');
    }
});

module.exports = connection