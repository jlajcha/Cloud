const util = require('util')
const fs = require('fs')
const readFilePromise = util.promisify(fs.readFile)
const writeFilePromise = util.promisify(fs.writeFile)
const file = require('./students.json')

 function reduceStudent(user){
    return {name: user.name , age: user.age}
}
readFilePromise('./students.json')
        .then((data)=>{return JSON.parse(data)} )
            .then((users)=>{
                let list= [];
                users.forEach(user => {
                list.push(reduceStudent(user));     
                            });      
                return  list })
                .then((usersReduced)=> {writeFilePromise('./studentsRed.json',JSON.stringify(usersReduced))})
                    .catch((err)=>{console.log("pasaron cosas" + err)})

