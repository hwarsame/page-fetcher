const request = require('request');
const fs = require('fs');
// const readline = require('readline');
// const  FILE  = require('dns');
let URL = process.argv[2];
let filePath = process.argv[3];
const getData = function (url, filePath){
  request(URL, (error, response, body) =>{
    if (response){
      console.log('Data has successfully been retrieved');
      printData(filePath, body);
    } else{
      console.log(`No website was found. ${error}`);
    }
  })
}

const printData = function (filePath, body){
  fs.writeFile(filePath, body, err => {
    if (err){
      console.error(err);
      return
    } else{
      console.log('New file has been created');
      const length = (new TextEncoder(). encode('body')).length;
      console.log(`Downloaded and saved ${length} bytes to ${filePath}`);
    }
  })
}
getData(URL, filePath);
