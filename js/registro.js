const formRegistro = document.getElementById("formRegistro");

formRegistro.addEventListener("submit", function(re) {

    re.preventDefault();

    const nombre = document.getElementById("exampleInputName1").value;
    const email = document.getElementById("exampleInputEmail1").value;
    const contraseña = document.getElementById("exampleInputPassword1").value;

    if (!nombre || !email || !contraseña) {
        return alert("Todos los campos son obligatorios");
    }

    const Users = JSON.parse(localStorage.getItem("user")) || [];
    const regi = Users.find(user => user.nombre === nombre);

    if (regi) {
        return alert("El usuario ya está registrado");
    }

    Users.push({ nombre: nombre, email: email, contraseña: contraseña });

    localStorage.setItem("user", JSON.stringify(Users));
    
    alert("Registro exitoso");
    window.location.href = "../Pages/login.html";
});
