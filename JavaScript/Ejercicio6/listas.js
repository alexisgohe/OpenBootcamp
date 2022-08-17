let lista = ["Frijol", "Leche", "Tortillas", "Arroz", "Agua"];

lista.push("Aceite de Girasol");
console.log(lista)

lista.pop();
console.log(lista);

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const listaPeli = [
    {
        titulo: "Free Guy",
        director: "Shawn Levy", 
        fecha: new Date("2021, 08, 13")
    },
    {
        titulo: "The Black Phone",
        director: "Scott Derrickson", 
        fecha: new Date("2022, 1, 03")
    },
    {
        titulo: "Avengers: Infinity War", 
        director: "Anthony Russo", 
        fecha: new Date("2018, 04, 27")
    }
]

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = listaPeli.map(listaPeli =>{
    return listaPeli.director
});
console.log(directores)
// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const lista2 = [];

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
console.log(lista1.concat(lista2));

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const factor = [...lista1, ...lista2];
console.log(factor)