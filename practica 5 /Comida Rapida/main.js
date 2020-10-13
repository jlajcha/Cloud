const readline = require('readline');
const Restaurant = require('./Restaurant.js');
const Person = require('./ComidaRapida')
const { config } = require('process');

let rl = readline.createInterface(process.stdin, process.stdout);  

const names = ["rick", "morty"]
const rest = new Restaurant()
names.forEach((name)=> rest.addCustomer(name))
console.log("a ver si esta mierda para por aca ")
rest.empezarAAtender()
