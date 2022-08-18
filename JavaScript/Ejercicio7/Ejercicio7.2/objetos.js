const datos = {
    nombre: "Alexis",
    apellido: "Gómez",
    edad: 25,
    altura: 170,
    eresDesarrollador: true
}

var edad = datos.edad;
console.log(edad);

const datosAmigos =[
    {
        ...datos
    },
    {
        nombre: "Esmeralda",
        apellido: "Tereso",
        edad: 25,
        altura: 168,
        eresDesarrollador: false
    },
    {
        nombre: "Kevin",
        apellido: "Gomez",
        edad: 18,
        altura: 17,
        eresDesarrollador: false
    }
]

datosAmigos.sort((a,b) => a.edad - b.edad);
console.log(datosAmigos)