const readline = require('readline');
const Person = require('./ComidaRapida')


class Restaurant {
    constructor() {
        this.idCustomersCounter = 0;
        this.customers = []
        this.idAtendiendo = null
    }
    addCustomer(customerName) {
        console.log("se va a agregar el usuario de mierda")
       const newCustomer =new  Person(customerName,this.currentIdCounter(),this)
       this.customers.push(newCustomer)
       console.log("se agrego la persona de mierda " + newCustomer.id + newCustomer.name)
        newCustomer.showImpantience()
    }  

    currentIdCounter(){
        const id = this.idCustomersCounter
        this.idCustomersCounter++
        return id
    }

    perteneceAlosCustomers(id){
        return this.customers.some((customer)=> customer.id == id )
    }

    tomarPedido(id){
        const n = parseInt(id)
        if(this.perteneceAlosCustomers(n)){
            this.idAtendiendo = n
            
            const cli = this.customers.filter((cliente)=>cliente.id == n)
            console.log("a ver que encuenta en customers  nombre : "+ cli.name +"id: "+ cli.id )
            this.sacarCliente(cli)
        }
        else{
            console.log("agregaste cualquier banana")
        }
    }

    empezarAAtender(){
    let rl = readline.createInterface(process.stdin, process.stdout);          
    rl.on('line',this.tomarPedido.bind(this));
    }

    estaSiendoAtendido(id){
       return this.idAtendiendo === id 
    }

    sacarCliente(unCliente){
        console.log(` ======== Fue atendido el cliente ${unCliente.name} con el ticket nro° ${unCliente.id}! Graziaz, vuelvaz prontoz!! ======== `);
        this._clientes = this.customers.filter(cliente => cliente !== unCliente);
        console.log("");
        //console.log(omitKeys(unCliente, ["restaurant"]));
        console.log("");
        console.log(" --------------------------------------------------------------------- ");
        console.log(`[ ${unCliente.name} ] has left the building!!"`);
        console.log(" --------------------------------------------------------------------- ");            
        console.log( " --------------------------------------------------------------------- ");
        if(this.customers.length === 0){
            console.log("");
            console.log(" ------------------------------ CERRADO ------------------------------ ");
                          
            console.log("");
            this._rl.close();
        }
    }   
 }
 module.exports = Restaurant