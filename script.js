//superTateti
var user = true // true for user1 false for user2
const ResetButton = document.getElementById("reset-button");
const casillas = document.querySelectorAll(".cell");
const cellPrincipal = document.querySelectorAll(".cell_principal");
const divPrincipal = document.querySelector(".game-board")
const casillaId = [];
const text = [];
const contenidoCasilla = [];
const divJuego = document.querySelectorAll(".cell_game");
const divGanador = document.querySelectorAll(".win")


function switchUser() {
    user = !user;

}

function userWins() {
    

    const combinacionesGanadoras = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    text.length = 0; // Limpiar el array de textos

    divGanador.forEach((div) => {
        text.push(div.textContent);
        console.log(text);
    });

    for (let combinacion of combinacionesGanadoras) {
        const [a, b, c] = combinacion

        if (text[a] && text[a] === text[b] && text[a] === text[c]) {
            console.log("el ganador es " + text[a]);
            divPrincipal.style.display = "none"; // Ocultar el tablero principal
            return; // Salir de la función si hay un ganador
        }

    }


}




function CasillaWins(cell) {
    // Lógica para determinar si el usuario ha ganado
    const cellString = cell.split("_")[1];

    const combinacionesGanadoras = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    casillaId.length = 0; // Limpiar el array de IDs
    contenidoCasilla.length = 0; // Limpiar el array de contenidos

    casillas.forEach((casilla) => {
        if (casilla.id.startsWith(`cell_${cellString}`)) {
            casillaId.push(casilla.id);
            contenidoCasilla.push(casilla.textContent);
           
            

        }
    });

    for (let combinacion of combinacionesGanadoras) {
        const [a, b, c] = combinacion;

        if (contenidoCasilla[a] && contenidoCasilla[a] === contenidoCasilla[b] && contenidoCasilla[a] === contenidoCasilla[c]) {

            divJuego[cellString].style.display = "none"
            divGanador[cellString].style.display = "block"
            divGanador[cellString].textContent = contenidoCasilla[a]
            cellPrincipal[cellString].classList.remove("cell_principal_desactivada")
            return; // Salir de la función si hay un ganador
        }
    }


}



function detectCasilla(casilla) {
    // Lógica para detectar la casilla
    const id = casilla.id;
    return id;
}

function NextCell(id) {
    //solo se pueda clickear una vez por casilla y dependiendo de la celda se escoja en que celda principal se puede clickear

    const cellString = id.split("_")[2];

    if (cellString === "0") {
        console.log("Casilla principal 0 seleccionada");

        cellPrincipal.forEach((cell) => {
            cell.style.pointerEvents = "auto"; // habilitar todas las casillas principales
            cell.classList.remove("cell_principal_desactivada"); // agregar clase para deshabilitar visualmente

            if (divJuego[0].style.display == "none") {
                casillas.forEach((cas) => {
                    cas.classList.remove("cell_dessactivada");
                    cas.classList.add("cell");
                });
                console.log("casilla ganada")
            } else {
                if (cell.id !== "cell_0") {
                    cell.style.pointerEvents = "none"; // deshabilitar las otras casillas principales
                    cell.classList.add("cell_principal_desactivada"); // agregar clase para deshabilitar visualmente

                    casillas.forEach((casilla) => {
                        casilla.classList.remove("cell_dessactivada"); // quitar clase para habilitar visualmente

                        casilla.classList.add("cell"); // agregar clase para deshabilitar visualmente
                        if (casilla.id.startsWith("cell_0")) {

                        } else {
                            casilla.classList.remove("cell"); // quitar clase para habilitar visualmente
                            casilla.classList.add("cell_dessactivada"); // agregar clase para deshabilitar visualmente

                        }
                    });

                }
            }
        });

    } else if (cellString === "1") {
        console.log("Casilla principal 1 seleccionada");


        cellPrincipal.forEach((cell) => {
            cell.style.pointerEvents = "auto"; // habilitar todas las casillas principales
            cell.classList.remove("cell_principal_desactivada"); // agregar clase para deshabilitar visualmente

            if (divJuego[1].style.display == "none") {
                casillas.forEach((cas) => {
                    cas.classList.remove("cell_dessactivada");
                    cas.classList.add("cell");
                });
                console.log("casilla ganada")
            } else {
                if (cell.id !== "cell_1") {
                    cell.style.pointerEvents = "none"; // deshabilitar las otras casillas principales

                    cell.classList.add("cell_principal_desactivada"); // agregar clase para deshabilitar visualmente
                    casillas.forEach((casilla) => {
                        casilla.classList.remove("cell_dessactivada"); // quitar clase para habilitar visualmente
                        casilla.classList.add("cell"); // agregar clase para deshabilitar visualmente

                        if (casilla.id.startsWith("cell_1")) {

                        } else {
                            casilla.classList.remove("cell"); // quitar clase para habilitar visualmente
                            casilla.classList.add("cell_dessactivada"); // agregar clase para deshabilitar visualmente

                        }
                    });

                }
            }


        });

    } else if (cellString === "2") {
        console.log("Casilla principal 2 seleccionada");


        cellPrincipal.forEach((cell) => {
            cell.style.pointerEvents = "auto"; // habilitar todas las casillas principales
            cell.classList.remove("cell_principal_desactivada"); // agregar clase para deshabilitar visualmente

            if (divJuego[2].style.display == "none") {
                casillas.forEach((cas) => {
                    cas.classList.remove("cell_dessactivada");
                    cas.classList.add("cell");
                });
                console.log("casilla ganada")
            } else {

                if (cell.id !== "cell_2") {
                    cell.style.pointerEvents = "none"; // deshabilitar las otras casillas principales
                    cell.classList.add("cell_principal_desactivada"); // agregar clase para deshabilitar visualmente

                    casillas.forEach((casilla) => {
                        casilla.classList.remove("cell_dessactivada"); // quitar clase para habilitar visualmente
                        casilla.classList.add("cell"); // agregar clase para deshabilitar visualmente

                        if (casilla.id.startsWith("cell_2")) {

                        } else {
                            casilla.classList.remove("cell"); // quitar clase para habilitar visualmente
                            casilla.classList.add("cell_dessactivada"); // agregar clase para deshabilitar visualmente

                        }
                    });
                }
            }

        });
    } else if (cellString === "3") {
        console.log("Casilla principal 3 seleccionada");


        cellPrincipal.forEach((cell) => {
            cell.style.pointerEvents = "auto"; // habilitar todas las casillas principales
            cell.classList.remove("cell_principal_desactivada"); // agregar clase para deshabilitar visualmente

            if (divJuego[3].style.display == "none") {
                casillas.forEach((cas) => {
                    cas.classList.remove("cell_dessactivada");
                    cas.classList.add("cell");
                });
                console.log("casilla ganada")
            } else {
                if (cell.id !== "cell_3") {
                    cell.style.pointerEvents = "none"; // deshabilitar las otras casillas principales
                    cell.classList.add("cell_principal_desactivada"); // agregar clase para deshabilitar visualmente

                    casillas.forEach((casilla) => {
                        casilla.classList.remove("cell_dessactivada"); // quitar clase para habilitar visualmente
                        casilla.classList.add("cell"); // agregar clase para deshabilitar visualmente

                        if (casilla.id.startsWith("cell_3")) {

                        } else {
                            casilla.classList.remove("cell"); // quitar clase para habilitar visualmente
                            casilla.classList.add("cell_dessactivada"); // agregar clase para deshabilitar visualmente

                        }
                    });
                }
            }


        });

    } else if (cellString === "4") {
        console.log("Casilla principal 4 seleccionada");


        cellPrincipal.forEach((cell) => {
            cell.style.pointerEvents = "auto"; // habilitar todas las casillas principales
            cell.classList.remove("cell_principal_desactivada"); // agregar clase para deshabilitar visualmente
            if (divJuego[4].style.display == "none") {
                casillas.forEach((cas) => {
                    cas.classList.remove("cell_dessactivada");
                    cas.classList.add("cell");
                });
                console.log("casilla ganada")
            } else {
                if (cell.id !== "cell_4") {
                    cell.style.pointerEvents = "none"; // deshabilitar las otras casillas principales
                    cell.classList.add("cell_principal_desactivada"); // agregar clase para deshabilitar visualmente

                    casillas.forEach((casilla) => {
                        casilla.classList.remove("cell_dessactivada"); // quitar clase para habilitar visualmente
                        casilla.classList.add("cell"); // agregar clase para deshabilitar visualmente

                        if (casilla.id.startsWith("cell_4")) {

                        } else {
                            casilla.classList.remove("cell"); // quitar clase para habilitar visualmente
                            casilla.classList.add("cell_dessactivada"); // agregar clase para deshabilitar visualmente

                        }
                    });
                }
            }

        });
    } else if (cellString === "5") {
        console.log("Casilla principal 5 seleccionada");


        cellPrincipal.forEach((cell) => {
            cell.style.pointerEvents = "auto"; // habilitar todas las casillas principales
            cell.classList.remove("cell_principal_desactivada"); // agregar clase para deshabilitar visualmente
            if (divJuego[5].style.display == "none") {
                casillas.forEach((cas) => {
                    cas.classList.remove("cell_dessactivada");
                    cas.classList.add("cell");
                });
                console.log("casilla ganada")
            } else {
                if (cell.id !== "cell_5") {
                    cell.style.pointerEvents = "none"; // deshabilitar las otras casillas principales
                    cell.classList.add("cell_principal_desactivada"); // agregar clase para deshabilitar visualmente

                    casillas.forEach((casilla) => {
                        casilla.classList.remove("cell_dessactivada"); // quitar clase para habilitar visualmente
                        casilla.classList.add("cell"); // agregar clase para deshabilitar visualmente

                        if (casilla.id.startsWith("cell_5")) {

                        } else {
                            casilla.classList.remove("cell"); // quitar clase para habilitar visualmente
                            casilla.classList.add("cell_dessactivada"); // agregar clase para deshabilitar visualmente

                        }
                    });
                }
            }

        });
    } else if (cellString === "6") {
        console.log("Casilla principal 6 seleccionada");


        cellPrincipal.forEach((cell) => {
            cell.style.pointerEvents = "auto"; // habilitar todas las casillas principales
            cell.classList.remove("cell_principal_desactivada"); // agregar clase para deshabilitar visualmente
            if (divJuego[6].style.display == "none") {
                casillas.forEach((cas) => {
                    cas.classList.remove("cell_dessactivada");
                    cas.classList.add("cell");
                });
                console.log("casilla ganada")
            } else {
                if (cell.id !== "cell_6") {
                    cell.style.pointerEvents = "none"; // deshabilitar las otras casillas principales
                    cell.classList.add("cell_principal_desactivada"); // agregar clase para deshabilitar visualmente

                    casillas.forEach((casilla) => {
                        casilla.classList.remove("cell_dessactivada"); // quitar clase para habilitar visualmente
                        casilla.classList.add("cell"); // agregar clase para deshabilitar visualmente

                        if (casilla.id.startsWith("cell_6")) {

                        } else {
                            casilla.classList.remove("cell"); // quitar clase para habilitar visualmente
                            casilla.classList.add("cell_dessactivada"); // agregar clase para deshabilitar visualmente

                        }
                    });
                }
            }

        });
    } else if (cellString === "7") {
        console.log("Casilla principal 7 seleccionada");


        cellPrincipal.forEach((cell) => {
            cell.style.pointerEvents = "auto"; // habilitar todas las casillas principales
            cell.classList.remove("cell_principal_desactivada"); // agregar clase para deshabilitar visualmente
            if (divJuego[7].style.display == "none") {
                 casillas.forEach((cas) => {
                    cas.classList.remove("cell_dessactivada");
                    cas.classList.add("cell");
                });
                console.log("casilla ganada")
            } else {
                if (cell.id !== "cell_7") {
                cell.style.pointerEvents = "none"; // deshabilitar las otras casillas principales
                cell.classList.add("cell_principal_desactivada"); // agregar clase para deshabilitar visualmente

                casillas.forEach((casilla) => {
                    casilla.classList.remove("cell_dessactivada"); // quitar clase para habilitar visualmente
                    casilla.classList.add("cell"); // agregar clase para deshabilitar visualmente

                    if (casilla.id.startsWith("cell_7")) {

                    } else {
                        casilla.classList.remove("cell"); // quitar clase para habilitar visualmente
                        casilla.classList.add("cell_dessactivada"); // agregar clase para deshabilitar visualmente

                    }
                });
            }
            }
            
        });
    } else if (cellString === "8") {
        console.log("Casilla principal 8 seleccionada");


        cellPrincipal.forEach((cell) => {
            cell.style.pointerEvents = "auto"; // habilitar todas las casillas principales
            cell.classList.remove("cell_principal_desactivada"); // agregar clase para deshabilitar visualmente
            if (divJuego[8].style.display == "none") {
                 casillas.forEach((cas) => {
                    cas.classList.remove("cell_dessactivada");
                    cas.classList.add("cell");
                });
                console.log("casilla ganada")
            } else {
                 if (cell.id !== "cell_8") {
                cell.style.pointerEvents = "none"; // deshabilitar las otras casillas principales
                cell.classList.add("cell_principal_desactivada"); // agregar clase para deshabilitar visualmente

                casillas.forEach((casilla) => {
                    casilla.classList.remove("cell_dessactivada"); // quitar clase para habilitar visualmente
                    casilla.classList.add("cell"); // agregar clase para deshabilitar visualmente

                    if (casilla.id.startsWith("cell_8")) {

                    } else {
                        casilla.classList.remove("cell"); // quitar clase para habilitar visualmente
                        casilla.classList.add("cell_dessactivada"); // agregar clase para deshabilitar visualmente

                    }
                });
            }
            }
           
        });
    }





}




casillas.forEach((casilla) => {
    casilla.addEventListener('click', () => {
        if (casilla.textContent === "") {
            casilla.textContent = user ? "X" : "O";
           
            CasillaWins(detectCasilla(casilla));
             userWins()
            switchUser();
            NextCell(detectCasilla(casilla));

        }


    });
});



ResetButton.addEventListener("click", reinicio);

function reinicio() {
    casillas.forEach((casilla) => {
        casilla.textContent = "";
        casilla.classList.remove("cell_dessactivada"); // quitar clase para habilitar visualmente
        casilla.classList.add("cell"); // agregar clase para deshabilitar visualmente

    });

    cellPrincipal.forEach((cell) => {
        cell.style.pointerEvents = "auto"; // habilitar todas las casillas principales
        cell.classList.remove("cell_principal_desactivada"); // agregar clase para deshabilitar visualmente
    });
    user = true;
}