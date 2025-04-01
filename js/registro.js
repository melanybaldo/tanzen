const formRegistro = document.getElementById("formRegistro");

formRegistro.addEventListener("submit", function(re) {

    re.preventDefault();

    const nombre = document.getElementById("exampleInputName1").value;
    const email = document.getElementById("exampleInputEmail1").value;
    const contraseña = document.getElementById("exampleInputPassword1").value;

   
    const Users = JSON.parse(localStorage.getItem("user")) || [];

    for (let i = 0; i < Users.length; i++) {
       
        if (Users[i].user === Users.user) {

            alert("El usuario ya existe")
            return
        }
        
    }

    const regi = Users.find(user => user.nombre === nombre);

    if (regi) {
        return alert("El usuario ya está registrado");
    }

    Users.push({
        apodo: "pepe",
        nombre: nombre, 
        email: email, 
        contraseña: contraseña,
        certificado: false,
        logged: false
    });

    localStorage.setItem("user", JSON.stringify(Users));
    
    alert("Registro exitoso");
    window.location.href = "../Pages/login.html";
});
