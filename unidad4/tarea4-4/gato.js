/**
 * Clase LindoGatito
 * @author Hugo Vicente Peligro
 */
class Gato{
    static PESO_MIN = 1;
    static PESO_MAX = 15;
    nombre;
    fechaNac;
    raza ;
    #peso;
    #muerto;

    constructor(nombre = "Garfield",fechaNac = "2022/12/10",raza = "Asiático", peso = 5){
        this.nombre = nombre;
        this.fechaNac = fechaNac;
        this.raza = raza;
        this.#setPeso = peso;
        this.#muerto = false ;
    }
    juega(){
        if(this.#muerto) return;
        this.#setPeso = Number(this.#peso) - 1;
        console.log("El gato pesa "+ this.#peso);
    }

    get getNombre(){
        return this.nombre;
    }

    get getFechaNac(){
        return this.fechaNac;
    }
    
    get getRaza(){
        return this.raza;
    }

    get getPeso(){
        return this.#peso;
    }

    get getMuerto(){
        return this.#muerto;
    }

    set #setPeso(peso){
        if(this.#muerto) return;
        this.#peso = peso; 
        if(peso <= 0 || peso > 15){
            this.#muerto = true;
            throw new Error("El gato no puede estar por debajo de 0kg o por encima 15kg. ESTA MUERTO");
        }    
    }
    
    comer(){
        if(this.#muerto) return;
        this.#setPeso = Number(this.#peso) + 1;
        console.log("El gato pesa "+ this.#peso);
    }
}


