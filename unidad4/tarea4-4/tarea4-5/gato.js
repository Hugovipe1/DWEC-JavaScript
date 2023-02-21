/**
 * @author Hugo Vicente Peligro
 */

function Gato(nombre, fechaNac, raza, peso) {
    this.nombre = nombre;
    this.fechaNac = fechaNac;
    this.raza = raza;
    this.setPeso(Number(peso));
    this.muerto = false;
}

Gato.prototype.PESO_MIN = 1;
Gato.prototype.PESO_MAX = 15;

Gato.prototype.juega = 
    function() {
        if (this.muerto) return;
        this.setPeso(this.peso - 1);
        console.log("El gato pesa " + this.peso);
    }

Gato.prototype.comer = 
    function() {
        if (this.muerto) return;
        this.setPeso(this.peso + 1);
        console.log("El gato pesa " + this.peso);
    }


Gato.prototype.getNombre = 
    function() {
        return this.nombre;
    }


Gato.prototype.getFechaNac = 
    function() {
        return this.fechaNac;
    }


Gato.prototype.getRaza = 
    function() {
        return this.raza;
    }


Gato.prototype.getPeso = 
    function() {
        return this.peso;
    }


Gato.prototype.getMuerto = 
    function() {
        return this.muerto;
    }


Gato.prototype.setPeso = 
    function(peso) {
        if (this.muerto) return;
        this.peso = Number(peso);
        if (peso < Gato.prototype.PESO_MIN || peso > Gato.prototype.PESO_MAX) {
            this.muerto = true;
            throw new Error("El gato no puede estar por debajo de 0kg o por encima 15kg. ESTA MUERTO");
        }
    
}


