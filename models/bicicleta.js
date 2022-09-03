
function Bicicleta(id,color,modelo,ubicacion){
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}


Bicicleta.prototype.toString = function(){
    return `id: ${this.id} | color: ${this.color}`
}

Bicicleta.allBicis = [];
Bicicleta.add = function(aBici){
    Bicicleta.allBicis.push(aBici);
}

Bicicleta.findById = function(aBiciId){
    const aBici = Bicicleta.allBicis.find( x => x.id == aBiciId);
    if(aBici){
        return aBici;
    }
    else{
        throw new Error("no existe una bicicletaa con el id "+aBiciId);
    }
}

Bicicleta.removeById = function(aBiciId){
    //Bicicleta.findById(aBiciId);
    for(let i = 0;i<=Bicicleta.allBicis.length-1;i++){
        if(Bicicleta.allBicis[i].id==aBiciId){
            Bicicleta.allBicis.splice(i,1);
            break;
        }
    }
}


const a = new Bicicleta(1,"rojo","urbana",[-12.045498,-77.030261]);
const b = new Bicicleta(2,"blanca","urbana",[-12.045653,-77.031095]);

Bicicleta.add(a);
Bicicleta.add(b);

module.exports = Bicicleta;