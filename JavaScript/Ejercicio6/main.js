let lista = ["Frijol", "Leche", "Tortillas", "Arroz", "Agua"];

lista.push("Aceite de Girasol");
console.log(lista)

lista.pop();
console.log(lista);

const listaPeli = [
    {
        titulo: "Free Guy",
        director: "Shawn Levy", 
        fecha: new Date(2021, 07, 13)
    },
    {
        titulo: "The Black Phone",
        director: "Scott Derrickson", 
        fecha: new Date(2022, 0, 03)
    },
    {
        titulo: "Avengers: Infinity War", 
        director: "Anthony Russo", 
        fecha: new Date(2009, 03, 27)
    }
]

const peliculas = listaPeli.filter(obj => obj.fecha > new Date(2010, 0, 1));
console.log(peliculas)

const directores = listaPeli.map(listaPeli =>{
    return listaPeli.fecha;
});
console.log(directores)

const titulos = listaPeli.map(listaPeli =>{
    return listaPeli.titulo;
})
console.log(titulos)

console.log(directores.concat(titulos));

const factor = [...directores, ...titulos];
console.log(factor)