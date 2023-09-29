
const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const Melissa = {
    nombre: 'Melissa',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

function Persona( nombre, edad ){
    console.log('Se ejecuto esta linea');
    this.nombre = nombre;
    this.edad   = edad;

    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }

}

const Maria = new Persona( 'Maria', 30 );
const Selena = new Persona( 'Selena', 19 );

Maria.imprimir();
Selena.imprimir();