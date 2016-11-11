//Run this web server with node.js
//  C:\nodejs> node .\server.js
//Then
//  http://localhost:5000/sportsStore/app.html
var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("../VirtualBox/education/github/effective-angularjs"));

app.listen(5000);

