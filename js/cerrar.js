const Users =JSON.parse(localStorage.getItem("user")) || []

for (let i = 0; i < array.length; i++) {
    
    if (Users [i].logged) {
        Users[i].logged = "false"
        localStorage.setItem("user", JSON.stringify(Users))
    }
    
}

window.location = "../index.html"