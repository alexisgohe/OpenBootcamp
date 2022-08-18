var fecha = new Date();
console.log(fecha)

const fechaN = new Date(1997, 03, 17);
console.log(fechaN)

console.log(fecha > fechaN);

var dia = fechaN.getDate();
console.log(dia);

var mes = fechaN.getMonth();
console.log(mes+1);

var anio = fechaN.getFullYear();
console.log(anio);