// YAN KEM PO EN JAVASCRIPT

// Mensaje de Victoria o Derrota
function recordPartida (puntajeGamer, puntajePc) {
    if (puntajeGamer === 3) {
        console.log ('\n\nFELICIDADES!\nHas ganado la partida!\n\n');
    } else if (puntajePc === 3) {
        console.log ('\n\nLASTIMA!\nHas perdido la partida.\n\n');
    }
}


// Impresión de marcador
function marcador (ronda, puntajeGamer, puntajePc) {
    var empates = ronda - (puntajeGamer + puntajePc);
    recordPartida(puntajeGamer, puntajePc);
    console.log ('\nRonda: ' + ronda + '\nPuntaje = [ Tu: ' + puntajeGamer + ' | Pc: ' + puntajePc + ' | Empates: ' + empates + ' ]')
}


// Función de Partida
function yankempo (manoGamer, manoPc) {
    let ronda = 0, puntajeGamer = 0, puntajePc = 0;
    switch (true) {
        case (manoGamer === manoPc):
            ronda ++;
            console.log('\n\nRonda Empatada!\n');
            marcador (ronda, puntajeGamer, puntajePc);
            break;
        
        case (manoGamer === 'piedra' && manoPc === 'tijera' || manoGamer === 'tijera' && manoPc === 'papel' || manoGamer === 'papel' && manoPc === 'piedra'):
            puntajeGamer ++;
            ronda ++;
            console.log('\n\nGanas + UN punto!\n');
            marcador (ronda, puntajeGamer, puntajePc);
            break;
        
        case (manoGamer === 'piedra' && manoPc === 'papel' || manoGamer === 'papel' && manoPc === 'tijera' || manoGamer === 'tijera' && manoPc === 'piedra'):
            puntajePc += 1;
            ronda ++;
            console.log('\n\nPierdes esta ronda!.\n');
            marcador (ronda, puntajeGamer, puntajePc);
            break;
        
        default:
            console.log('Parece que te has equivocado de mano... ');
    }
}

var manoGamer = 'piedra';
var manoPc = 'piedra';

yankempo (manoGamer, manoPc);