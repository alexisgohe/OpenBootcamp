const miFuncion = val =>{
    if(val === 10){
        return true;
    }
    throw new Error("El valor debe ser de tipo numero");
}

var numero = "10";

try{
    console.log("Se esta ejecutando de manera correcta");
    const minumero = miFuncion(numero);
    console.log(minumero)
} catch(e){
    console.log("ERROR!!")
}