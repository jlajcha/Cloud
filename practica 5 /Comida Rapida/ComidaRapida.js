const readline = require('readline');
const Restaurant = require('./Restaurant')


class Person {
    constructor(_name,_id,_restaurant) {
        this.name = _name;
        this.id = _id;
        this.isAttended = false ;
        this.restaurant = _restaurant;
        this.timeWaiting=0;
    }
  
    esperar(){
        setTimeout(this.showImpantience.bind(this), 1000);
    }
  showImpantience(){
    if (this.restaurant.estaSiendoAtendido(this.id)){
        console.log("ya te dejamos libre ")
        this.restaurant.sacarCliente(this)
    }
    else{this.timeWaiting = this.timeWaiting+1
        console.log(`[ ${this.name} | nro° ${this.id} ] : "¿Qué? ¿Mi plata no vale? Estoy esperando hace ${this.timeWaiting++} .. !!"`);
        this.esperar.bind(this)
    }
 }
}
module.exports = Person