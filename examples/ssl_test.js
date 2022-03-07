// check if SSL certificate is valid

let sslChecker = require("ssl-checker");

sslChecker('google.com', 'GET', 443).then(result => console.log(`The site SSL certificate is valid? ${result.valid}\nHow many days left in the certificate validity? ${result.daysRemaining} days`));