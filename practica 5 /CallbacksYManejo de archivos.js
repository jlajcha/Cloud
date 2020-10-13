const fs = require('fs');
const filename = 'students.json';


function studentAvg(courses){

    const sum = courses.reduce((a, b) => a + b.mark, 0);
    const avg = (sum / courses.length) || 0;

    return avg 
    }

function studentAverageCalification(student){
    return{name: student.name, avg: studentAvg(student.courses)}
}


fs.readFile(filename, (err, data) => {
       if (err) {
           console.log('Ouch! Error!');
           throw err;
        }
       console.log('The file was correctly read.');
       const students = JSON.parse(data)
       console.log(students[0])
       const avg = students.map(studentAverageCalification);
       const obj =  JSON.stringify(avg)
       fs.writeFile('obj.json',obj,function(err){
           if(err){
               console.log('no se guardo ni mierda')
           }
           console.log("Todos los promedios exportados exitosamente")

       })
    })    
