const cambiarImagenesTema = (modo) => {
    document.querySelectorAll(".tema-img").forEach(img => {
        const nuevaSrc = modo === "dark" ? img.dataset.dark : img.dataset.light;
        img.setAttribute("src", nuevaSrc);
    });
};

const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
    cambiarImagenesTema("dark");
    localStorage.setItem("tema", "dark");
};

const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
    cambiarImagenesTema("light");
    localStorage.setItem("tema", "light");
};

const cambiarTema = () => {
    const temaActual = document.querySelector("body").getAttribute("data-bs-theme");
    temaActual === "light" ? temaOscuro() : temaClaro();
};

window.addEventListener("DOMContentLoaded", () => {
    const temaGuardado = localStorage.getItem("tema");
    if (temaGuardado === "dark") {
        temaOscuro();
    } else {
        temaClaro();
    }
});
