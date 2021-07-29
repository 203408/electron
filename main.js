var con;
var forma;
var apar;

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}
require('dotenv').config();

function sendParams() {
    con = require('./connect');
    localStorage.setItem('con', con);
}

function clickLogin(){
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    if(user == 'merjoso' && password == '987654321'){
        
        if(process.env.host != null || process.env.host != ''){
            location.href="intertabla.html";
        } else {
            location.href="interconectar.html";
        }
        
    }
    else if(user != 'merjoso' || password != '987654321'){
        alert ("Usuario o contraseña incorrectos");   
    }
}

function addData() {
    // Crear query para INSERT, SELECT, UPDATE O DELETE
    con = require('./connect');
    const nombre = document.getElementById('nombre').value;
    const ap_pat = document.getElementById('ap_pat').value;
    const ap_mat = document.getElementById('ap_mat').value;
    const edad = document.getElementById('edad').value;

    $query = `INSERT INTO persona (nombre, ap_pat, ap_mat, edad) VALUES ( "${nombre}","${ap_pat}","${ap_mat}","${edad}")`;

    con.query($query, function (err, rows, fields) {

        if (err) {
            console.log('Error Query');
            console.log(err);
            alert(err);
            return;
        }

        console.log("Query exitoso", rows);
        alert(rows);
    });

    forma="<tr><td>" + nombre + "</td><td>" + ap_pat + "</td><td>" + ap_mat+ "</td><td>" + edad + "</td></tr>";
    apar = document.createElement("TR");
   	apar.innerHTML=forma;
    document.getElementById("tabladatos").appendChild(apar);

    con.end(function () {
        // Conexión Finalizada 
    });

    // Input data conection database
}


