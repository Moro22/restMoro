const dbCon = require("../Configuracion/Config");


function listaOrganizer(req, res, next){
    dbCon.any('SELECT * FROM Organizer')
    .then(function(data){
        res.json({
            status:"ok",
            result:data,
            mensaje:"Lista de Organizer"
        })
    })
}


module.exports = {
    listaOrganizer:listaOrganizer
}