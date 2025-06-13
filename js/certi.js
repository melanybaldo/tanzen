  const inputNombre = document.getElementById('nombreInput');
  const nombreGenerado = document.getElementById('nombreGenerado');

  inputNombre.addEventListener('input', () => {
    const valor = inputNombre.value.trim();
    nombreGenerado.textContent = valor || '[Nombre del Alumno]';
  }); 
 
 
 const nombreInput = document.getElementById("nombreAlumno");
  const nombreTexto = document.getElementById("nombreGenerado");
  const fechaTexto = document.getElementById("fechaGenerada");

  function formatearFechaHoy() {
    const hoy = new Date();
    return hoy.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }

 /*  const Users = JSON.parse(localStorage.getItem("user")) || []

  const nombreGenerado = document.querySelector("#nombreGenerado")

    for (let i = 0; i < Users.length; i++) {
       
        if (Users[i].logged) {
            nombreGenerado.textContent = Users[i].nombre
        }
        
    } */


/*   nombreInput.addEventListener("input", actualizarNombre);  */

    document.getElementById("btnDescargar").addEventListener("click", function () {
    /* actualizarNombre(); */
    fechaTexto.textContent = formatearFechaHoy();

    const element = document.getElementById("certificado");
    /* const nombre = nombreInput.value.trim() || "certificado"; */

    const opt = {
      margin: 0,
      filename: `certificado.pdf`,     /* -${nombre.replace(/\s+/g, "_")} */
      image: { type: 'pdf', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
    };

    html2pdf().set(opt).from(element).save();
  });
  /* actualizarNombre(); */
  fechaTexto.textContent = "[Fecha]";

  

 /*  document.getElementById ("btnDescargar").addEventListener ("click", () => {
    const certificado = document.querySelector (".certificate")
  } ) */