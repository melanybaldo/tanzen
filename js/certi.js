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

  function actualizarNombre() {
    const nombre = nombreInput.value.trim() || "[Nombre del Alumno]";
    nombreTexto.textContent = nombre;
  }

  nombreInput.addEventListener("input", actualizarNombre);

  document.getElementById("btnDescargar").addEventListener("click", function () {
    actualizarNombre();
    fechaTexto.textContent = formatearFechaHoy();

    const element = document.getElementById("certificado");
    const nombre = nombreInput.value.trim() || "certificado";

    const opt = {
      margin: 0,
      filename: `certificado-${nombre.replace(/\s+/g, "_")}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
    };

    html2pdf().set(opt).from(element).save();
  });
  actualizarNombre();
  fechaTexto.textContent = "[Fecha]";