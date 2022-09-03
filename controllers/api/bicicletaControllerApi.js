const Bicicleta = require("../../models/bicicleta");

// get
exports.bicicleta_list = function(req,res){
    res.status(200).json({
        bicicletas: Bicicleta.allBicis
    })
}

//post
exports.bicicleta_create = function(req,res){
    const bici = new Bicicleta(req.body.id,req.body.color,req.body.modelo);
    bici.ubicacion = [req.body.lat,req.body.lng];

    Bicicleta.add(bici);

    res.status(200).json({
        bicicleta: bici 
    })
}

//delete
exports.bicicleta_delete = function(req,res){
    Bicicleta.removeById(req.body.id);

    res.status(204).send();
}

//put
exports.bicicleta_update = function(req,res){
    const bici = Bicicleta.findById(req.params.id)
    bici.color= req.body.color;
    bici.modelo = req.body.modelo;
    bici.ubicacion = [req.body.lat,req.body.lng];

    Bicicleta.removeById(req.params.id);
    Bicicleta.add(bici);

    res.status(200).json({
        bici
    })
}