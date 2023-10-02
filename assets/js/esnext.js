
//Propiedades privadas se agrega # antes del nombre de la propiedad
class Rectangulo {
   
    #area = 0;

    constructor(base = 0, altura =0){
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }
}

