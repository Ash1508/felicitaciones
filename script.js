let pantallaActual = 0;

function siguientePantalla() {

    const pantallas = document.querySelectorAll(".pantalla");

    // Ocultar pantalla actual
    pantallas[pantallaActual].classList.remove("activa");

    // Pasar a la siguiente
    pantallaActual++;

    // Mostrar siguiente
    pantallas[pantallaActual].classList.add("activa");
}



function celebrar() {

    const mensaje = document.getElementById("sorpresa");

    mensaje.textContent =
        "Me quedó lindo verdad? jajajja";

    crearConfeti();
}




function crearConfeti() {

    const elementos = ["🌻", "🌷", "✨", "💛", "🍣"];

    for (let i = 0; i < 25; i++) {

        const confeti = document.createElement("div");

        confeti.textContent =
            elementos[Math.floor(Math.random() * elementos.length)];

        confeti.style.position = "fixed";
        confeti.style.left = Math.random() * 100 + "vw";
        confeti.style.top = "-40px";
        confeti.style.fontSize = "25px";
        confeti.style.zIndex = "9999";

        document.body.appendChild(confeti);

        const duracion = Math.random() * 2 + 2;

        confeti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh) rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duracion * 1000,
                easing: "ease-in"
            }
        );

        setTimeout(() => {
            confeti.remove();
        }, duracion * 1000);
    }
}
