/* const fromRegistro = document.querySelector("#fromRegistro") 
const nombre = document.getElementById("exampleInputName1")
const contraseña = document.getElementById("exampleInputPassword1")

const Users = JSON.parse(localStorage.getItem("user")) || []

console.log(Users)

function validarUsuario (e) {

    e.preventDefault()

    console.log(nombre.value)
    console.log(contraseña.value)

    for (let i = 0; i < Users.length; i++) {

        console.log(Users[i].contraseña)
       
        if (Users[i].user == nombre.value && Users[i].contraseña == contraseña.value) {
            alert()
            console.log("Bienvenido")
            Users[i].logged = true
            localStorage.setItem("user", Users)
            window.location.href = "../Pages/introduccion.html";

            return
        }
        
    }
 */
   
    //const tex = Users.find(user => user.nombre  === nombre && user.contraseña === contraseña)

     

/* }

fromRegistro.addEventListener("submit", validarUsuario) */