const nombre = "Alexis"
const apellido = "Gómez"

const estudie = nombre.concat(" ", apellido)
console.log(estudie)

const estudianteMayus = estudie
console.log(estudianteMayus.toUpperCase());

const estudianteMinus = estudie
console.log(estudianteMayus.toLowerCase());

const estudieLength = estudie.length
console.log(estudieLength)

const primeraLetra = nombre.substring(0, 1)
console.log(primeraLetra);

const ultimaLetra = apellido[apellido.length -1]
console.log(ultimaLetra)

const espacios = estudie.replace(/ /g, "")
console.log(espacios)

const nombreBoolean = estudie.includes(nombre)
console.log(nombreBoolean)