const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
    localStorage.setItem("tema", "dark");
}

const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
    localStorage.setItem("tema", "light");
}

const cambiarTema = () => {
    const temaActual = document.querySelector("body").getAttribute("data-bs-theme");
    temaActual === "light" ? temaOscuro() : temaClaro();
}

window.addEventListener("DOMContentLoaded", () => {
    const temaGuardado = localStorage.getItem("tema");

    if (temaGuardado === "dark") {
        temaOscuro();
    } else {
        temaClaro();
    }
});

//Modo oscuro y claro (arriba)

//Examen y tiempo

document.addEventListener('DOMContentLoaded', function () {
    // Temporizador
    let tiempo = 6 * 60; // 6 minutos en segundos
    const intervalo = setInterval(() => {
        if (tiempo <= 0) {
            clearInterval(intervalo);
            alert("¡Tiempo terminado! El examen ha finalizado.");
            evaluarRespuestas();
        } else {
            tiempo--;
            // Opcional: mostrar el temporizador en pantalla
            const minutos = Math.floor(tiempo / 60);
            const segundos = tiempo % 60;
            document.getElementById('timer').textContent = `${minutos}:${segundos.toString().padStart(2, '0')}`;
        }
    }, 1000);

    // Respuestas correctas por nombre de input
    const respuestasCorrectas = {
        q1: 'q1a1', // Kenneth H. Cooper
        q2: 'q2a1', // 1968
        q3: 'q3a1', // Primera opción
        q4: 'q4a1', // Salsa y Rumba
        q5: 'q5a1', // Bachata y merengue 
        q8: 'q8a1', // Mila
        q9: 'q9a1', // Shopie
    };

    // Relación pregunta - módulo
    const preguntaModulo = {
        q1: 1,
        q2: 1,
        q3: 1,
        q4: 2,
        q5: 3,
        q8: 2,
        q9: 3
    };

    // Evaluar cuando el usuario termine (puedes poner esto en un botón "Finalizar Examen")
    window.evaluarRespuestas = function () {
        const erroresPorModulo = {};

        for (const [pregunta, respuestaCorrecta] of Object.entries(respuestasCorrectas)) {
            const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);
            if (!seleccionada || seleccionada.id !== respuestaCorrecta) {
                const modulo = preguntaModulo[pregunta];
                erroresPorModulo[modulo] = (erroresPorModulo[modulo] || 0) + 1;
            }
        }

        // Guardar en localStorage
        localStorage.setItem('modulos_con_errores', JSON.stringify(erroresPorModulo));

        // Mostrar alert personalizado
        if (Object.keys(erroresPorModulo).length === 0) {

            // Busca el modal en el DOM
            const modalElement = document.getElementById('miModal');

            // Crea una instancia del modal de Bootstrap
            const modalBootstrap = new bootstrap.Modal(modalElement);

            // Muestra el modal
            modalBootstrap.show();


            //alert("¡Felicidades! No necesitas reforzar ningún módulo.");
            //window.location.href = "../Pages/diploma.html";
        } else {
            let mensaje = "Debes reforzar los siguientes módulos:\n<br>";
            //window.location.href = "../Pages/modulo.html";
            for (const modulo in erroresPorModulo) {
                mensaje += `- Módulo ${modulo} (${erroresPorModulo[modulo]} error(es))\n<br>`;
            }
            //alert(mensaje);

            // Busca el modal en el DOM
            const modalElement = document.getElementById('miModalLost');
            const mensajePerdido = document.getElementById('mensajePerdido');

            // Crea una instancia del modal de Bootstrap
            const modalBootstrap = new bootstrap.Modal(modalElement);

            mensajePerdido.innerHTML = mensaje

            // Muestra el modal
            modalBootstrap.show();



        }
    };
});