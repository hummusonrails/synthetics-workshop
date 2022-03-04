// check if SSL certificate is valid

let sslChecker = require("ssl-checker");

sslChecker('google.com', 'GET', 443).then(result => console.log(result.valid));