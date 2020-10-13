const {
    cocinarCarneLadoA,
    cocinarCarneLadoB,
    obtenerPan,
    obtenerPapas,
    obtenerCarne,
    tostarPan,
    freirPapas,
    empaquetarPapas,
    salarPapas,
    obtenerVaso,
    prepararBebida,
} = require('./promesas');

/*
    Continuando con el ejemplo anterior, ahora se desea modelar el armado de un pedido completo,
    el cual esta compuesto por: bebida, papas fritas y una hamburguesa.

    Los pasos para armar el pedido son:
        1. Preparar las papas fritas
        2. Preparar la bebida.
        3. Preparar la hamburguesa (ya lo tiene resuelto por el ejemplo provisto).
        4. Poner todo en la bandeja. (1, 2 y 3 deben estar terminados)

    Preparar las papas implica
      a. Obtener las papas
      b. Freir las papas (depende de b)
      c. Empaquetarlas (depende de c)
      d. salarlas (depende de d)

    Preparar la bebida implica:
      a. Obtener un vaso
      b. Servir la bebida en el vaso.


    Además, se disponen de 3 empleados: uno que prepara las papas, otro que prepara hambuerguesas y otro
    que prepara bebidas. Cada empleado trabaja de manera independiente.

    Usted dispone de las siguientes funciones:
        obtenerVaso
            => retorna una promesa que se resolverá con el string "Vaso"
        prepararBebida
            => espera el string "Vaso" como parametro
            => retorna una promesa que se resolverá con el string "Vaso servido"
        obtenerPapas
            => retorna una promesa que se resolverá con el string "Papas"
        freirPapas
            => espera el string "Papas" como parametro
            => retorna una promesa que se resolverá con el string "Papas fritas"
        empaquetarPapas
            => espera el string "Papas fritas" como parametro
            => retorna una promesa que se resolverá con el string "Papas fritas empaquetadas"
        salarPapas
            => espera el string "Papas fritas empaquetadas" comop parametro
            => retorna una promesa que se resolverá con el string "Papas fritas empaquetadas con con sal"

    El pedido debera ser un objeto javascript de la forma:
    {
        papas: 'Papas fritas empaquetadas con sal',
        hamburguesa: ["Pan tostado", "Carne cocida", "Pan tostado"],
        bebida: 'Vaso servido',
    }
*/

class Empleado {

    carneCocida() {
        // Retorna una promesa de una carne cocida
        return obtenerCarne()
        .then(
            carneCruda => cocinarCarneLadoA(carneCruda)
        ).then(
            carneSemicocida => cocinarCarneLadoB(carneSemicocida)
        );
    }

    panTostado() {
        // Retorna una promesa de un pan tostado
        return obtenerPan().then(
            pan => tostarPan(pan)
        );
    }

    prepararHamburguesa() {
        // Retorna una promesa de una Hamburguesa
        return Promise.all(
            [this.panTostado(), this.carneCocida(), this.panTostado()]
        );
    }
        // Retorna una promesa de una papas
    prepararPapas() {
        return obtenerPapas()
            .then(lasPapas => freirPapas(lasPapas))
            .then(lasFritas => empaquetarPapas(lasFritas))
            .then(lasFritasEmpaquedas => salarPapas(lasFritasEmpaquedas))
            .catch(err => console.log("se te quemaron las fritas " + err ))
    }

         // Retorna una promesa de una Bebida
    prepararBebida() {
        return obtenerVaso()
                .then(elVaso => prepararBebida(elVaso))
                .catch(err => console.log("se rompió el vaso amigo " + err ))
    }
}

class Restaurante {
    constructor() {
        this.empleados = [new Empleado(), new Empleado(), new Empleado()]
    }

    armarPedido() {
        return Promise.all(
                [this.empleados[0].prepararBebida(), this.empleados[1].prepararPapas(), 
                this.empleados[2].prepararHamburguesa()]
                )
        }
}


// Cliente del restaurante pidiendo la hamburguesa
const restaurante = new Restaurante();

// Cliente 1 solicita un Menu
restaurante.armarPedido()
    .then((pedido) => {
        console.log("[CLIENTE 1]-----------");
        console.log("[CLIENTE 1] Gracias! este es mi pedido: ");
        console.log(pedido);
    }).catch((error) => {
        console.log("[CLIENTE 1] -----------");
        console.log("[CLIENTE 1] Oops, algo malo pasó con el pedido");
        console.log(error);
    });
