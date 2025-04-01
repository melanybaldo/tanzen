const Users = JSON.parse (localStorage.getItem ("user")) || [];

function verificarUsuario () {
    
    for (let i = 0; i < Users.length; i++) {
        
        if (Users[i].logged == true) {
            console.log("puedes cerrar sesión")
            return
        }
        
    }

    console.log("Debes iniciar sensión")

}
verificarUsuario()