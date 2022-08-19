// - Una función sin parámetros que devuelva siempre "true"
function Ptrue(objeto = true){
    console.log(objeto);
}

Ptrue();

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
async function promesa(){
    return setTimeout(() => console.log("Hola soy una promersa"), 500)
}

promesa()

// - Una función generadora de índices pares automáticos
function* idPar(){
    let id = 0;
    while(true){
        if(id === 10){
            return id;
        }
        yield id += 2;
    }
}

const par = idPar();
console.log(par.next());
console.log(par.next());
console.log(par.next());
console.log(par.next());
console.log(par.next());
console.log(par.next());
console.log(par.next());