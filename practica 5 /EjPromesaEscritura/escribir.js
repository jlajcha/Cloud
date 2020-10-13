const util = require('util')
const fs = require('fs')
const writeFilePromise = util.promisify(fs.writeFile)
const os = require('os')


const data = {username:os.userInfo('username').username,hostname:os.hostname()}

const p1 = writeFilePromise('ejemplo.json',JSON.stringify(data))

p1.then((data)=> console.log("se escribió correctamente el archivo"))
    .catch((err)=>console.log("hubo error"))