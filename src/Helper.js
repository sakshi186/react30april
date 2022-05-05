const BASE_URL ="http://localhost:1337"//local address
const TOKEN ="abdf5df2796e60d4557fd708d89297a153a7957eaf7e80ac4522d9d5701c868dbdb0deb8bb00655c09bd0fd0690fad23019307207c7a707f87336d9eb829aa5f5b8b34830459f3c16f86c736a330aa81323ebecd99eb0da8b87913e747117ff18b244960e3887cf3848d5d5e877d5570617557926a81c708280966bdf1650679";
let headers = {
    'Authorization':'Bearer '+ TOKEN,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
   }
//how to export data
//1.default export
//2.named export
module.exports={BASE_URL ,TOKEN, headers}