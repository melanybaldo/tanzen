document.getElementById("examen").addEventListener("submit", function(event) {
      event.preventDefault();

      const respuestasCorrectas = {
        p1: "1000",
        p2: "madrid",
        // Asegúrate de añadir las otras respuestas correctas aquí
        p10: "8"
      };

      let puntaje = 0;

      for (let pregunta in respuestasCorrectas) {
        const contenedor = document.querySelector(`input[name="${pregunta}"]`).closest(".pregunta");
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);
        const correcta = respuestasCorrectas[pregunta];

        // Limpia respuestas anteriores si el usuario reintenta
        let anterior = contenedor.querySelector(".respuesta-correcta");
        if (anterior) anterior.remove();

        let mensaje = document.createElement("div");
        mensaje.classList.add("respuesta-correcta");

        if (seleccionada && seleccionada.value.toLowerCase() === correcta) {
          puntaje++;
          mensaje.innerHTML = `<span class="correcta">✔ Correcto</span>`;
        } else {
          mensaje.innerHTML = `<span class="incorrecta">✘ Incorrecto</span>. La respuesta correcta es: <strong class="correcta">${correcta}</strong>`;
        }

        contenedor.appendChild(mensaje);
      }

      const aprobado = puntaje >= 7;
      alert(`Tu puntaje fue de ${puntaje}/10. ${aprobado ? "¡Felicidades! Aprobaste." : "Lo siento, no aprobaste."}`);
    });