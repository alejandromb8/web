    function juego(jugador, maquina){
        const opciones = ["piedra", "tijera", "papel"];
        const maquina = Math.floor[(Math.random() * opciones.length)];
        let mensaje;


    if (jugador == maquina){
        console.log("Empate!");
    }

    else if( 
        (jugador == "piedra" && maquina == "tijera")    ||
        (jugador == "tijera" && maquina == "papel")     ||
        (jugador == "papel" && maquina == "piedra")

    ){
        mensaje = "!Gana el jugador!";
    }
    else{
        mensaje = "!Gana la maquina!";
    }
}

let jugador1 = "piedra"; let maquina1 = "piedra";
juego(jugador1, maquina1);

let jugador2 = "papel"; let maquina2 = "tijera";
juego(jugador2, maquina2);

juego("piedra", "tijera")