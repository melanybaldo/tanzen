const fromRegistro = document.querySelector("#fromRegistro") 
const nombre = document.getElementById("exampleInputName1")
const contraseña = document.getElementById("exampleInputPassword1")

const Users = JSON.parse(localStorage.getItem("user")) || []

function validarUsuario (e) {

    e.preventDefault()

    for (let i = 0; i < Users.length; i++) {
       
        if (Users [i].user === nombre.value && Users[i].pass === contraseña.value) {
            console.log("Bienvenido")
            Users[i].logged = true
            localStorage.getItem("activo", JSON.stringify(Users))
        }
        
    }

   
    const tex = Users.find(user => user.nombre  === nombre && user.contraseña === contraseña)

     window.location.href = "../Pages/introduccion.html";

}

fromRegistro.addEventListener("submit", validarUsuario)