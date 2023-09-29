

class Persona{

    nombre = '';
    codigo = '';
    frase = '';
    
    constructor( nombre='Sin Nombre', codigo='Sin Codigo', frase='Sin Frase' ) {

        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;
        
    }
}

const spiderman = new Persona();