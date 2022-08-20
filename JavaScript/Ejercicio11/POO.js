class Estudiante{
    nombre = "Alexis";
    asignaturas = ["JavaScrip", "HTML", "CSS"];

    obtenDatos(){
        console.log(`Hola mi nombre es ${this.nombre} y curso: ${this.asignaturas}.`);
    }
}

const estudiante = new Estudiante()
estudiante.obtenDatos()