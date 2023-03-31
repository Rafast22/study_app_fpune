const  {sequelize}  = require("../../connection")


const listar = async function(req, res){
    console.log("Listar usuarios")
    const users = await sequelize.query('select * from users where deleted is false')
    console.log("users", users)
    if(users && users[0]){

        res.json({
            success:true,
            usuarios : users[0] 
        })
    }else{
        res.json({
            success:true,
            usuarios : [] 
        })
        
    }
    
}

const busquedaPorCodigo = async function(req, res){
    console.log("Listar usuarios")
    try{
    const users = await sequelize.query('select * from users ')
    console.log("users", users)
    -
    if(users && users[0]){

        res.json({
            success:true,
            usuarios : users[0] 
        })
    }else{
        res.json({
            success:true,
            usuarios : [] 
        })
        
    }
}catch[error]{



}
    
}

const actualizar = function(req, res){
    console.log("actualizar usuario")
    res.send("Actualizar  usuarios")
}

const eliminar = function(req, res){
    console.log("Eliminar de usuario")
    res.send("Eliminar de usuarios")
}


module.exports = function(req, res){
    console.log("Control de Usuarios");
    res.send("listado de usuarios");

}

module.exports = {listar, busquedaPorCodigo ,actualizar, eliminar}