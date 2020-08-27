const fs = require('fs');

const request = require('request');

const URL = process.argv.slice(2);

const FILE = process.argv.slice(3);


request(URL.toString(), (error, response, body) => {
  fs.writeFile(FILE.toString(), body, function(err){

    if (err) return console.log(err);

    if (error) return console.log(error);

    const stats = fs.statSync(FILE.toString())
    const fileSizeInBytes = stats["size"]

    console.log('Downloaded ' + fileSizeInBytes + ' bytes to ' + FILE);
  
  })
});
