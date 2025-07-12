//superTateti
var user = true // true for user1 false for user2
const ResetButton = document.getElementById("reset-button");
const casillas = document.querySelectorAll(".cell");
const cellPrincipal = document.querySelectorAll(".cell_principal");


function switchUser() {
    user = !user;

}

function userWins() {
    // Lógica para determinar si el usuario ha ganado

    
    // Aquí puedes implementar la lógica de verificación de combinaciones ganadoras
    console.log("Usuario ha ganado");
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
        });

    } else if (cellString === "1") {
        console.log("Casilla principal 1 seleccionada");


        cellPrincipal.forEach((cell) => {
            cell.style.pointerEvents = "auto"; // habilitar todas las casillas principales
            cell.classList.remove("cell_principal_desactivada"); // agregar clase para deshabilitar visualmente
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
        });

    } else if (cellString === "2") {
        console.log("Casilla principal 2 seleccionada");


        cellPrincipal.forEach((cell) => {
            cell.style.pointerEvents = "auto"; // habilitar todas las casillas principales
            cell.classList.remove("cell_principal_desactivada"); // agregar clase para deshabilitar visualmente
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
        });
    } else if (cellString === "3") {
        console.log("Casilla principal 3 seleccionada");


        cellPrincipal.forEach((cell) => {
            cell.style.pointerEvents = "auto"; // habilitar todas las casillas principales
            cell.classList.remove("cell_principal_desactivada"); // agregar clase para deshabilitar visualmente
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
        });

    } else if (cellString === "4") {
        console.log("Casilla principal 4 seleccionada");


        cellPrincipal.forEach((cell) => {
            cell.style.pointerEvents = "auto"; // habilitar todas las casillas principales
            cell.classList.remove("cell_principal_desactivada"); // agregar clase para deshabilitar visualmente
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
        });
    } else if (cellString === "5") {
        console.log("Casilla principal 5 seleccionada");


        cellPrincipal.forEach((cell) => {
            cell.style.pointerEvents = "auto"; // habilitar todas las casillas principales
            cell.classList.remove("cell_principal_desactivada"); // agregar clase para deshabilitar visualmente
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
        });
    } else if (cellString === "6") {
        console.log("Casilla principal 6 seleccionada");


        cellPrincipal.forEach((cell) => {
            cell.style.pointerEvents = "auto"; // habilitar todas las casillas principales
            cell.classList.remove("cell_principal_desactivada"); // agregar clase para deshabilitar visualmente
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
        });
    } else if (cellString === "7") {
        console.log("Casilla principal 7 seleccionada");


        cellPrincipal.forEach((cell) => {
            cell.style.pointerEvents = "auto"; // habilitar todas las casillas principales
            cell.classList.remove("cell_principal_desactivada"); // agregar clase para deshabilitar visualmente
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
        });
    } else if (cellString === "8") {
        console.log("Casilla principal 8 seleccionada");


        cellPrincipal.forEach((cell) => {
            cell.style.pointerEvents = "auto"; // habilitar todas las casillas principales
            cell.classList.remove("cell_principal_desactivada"); // agregar clase para deshabilitar visualmente
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
        });
    }





}




casillas.forEach((casilla) => {
    casilla.addEventListener('click', () => {
        if (casilla.textContent === "") {
            casilla.textContent = user ? "X" : "O";
            switchUser();
            NextCell(detectCasilla(casilla));
        }


    });
});



ResetButton.addEventListener("click", () => {
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
});