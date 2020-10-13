const util = require('util')
const fs = require('fs')
const readFilePromise = util.promisify(fs.readFile)
const file = require('./students.json')


//const data = {username:os.userInfo('username').username,hostname:os.hostname()}


class DataManager{
    constructor(){
        const readFilePromise = null
    }
    getData(){
        if (this.readFilePromise == null){
            const prom = readFilePromise('./students.json')
            this.readFilePromise = prom
            console.log("entro por aca por que no tiene cacheado")
        }
        return this.readFilePromise
    }

}

const dataM = new DataManager()
dataM.getData().then((student)=>console.log(JSON.parse(student)))
dataM.getData().then((student)=>console.log(JSON.parse(student)[0]))

//.catch((err)=> console.log("hubo un error "))

