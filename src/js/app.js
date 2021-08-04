// Variables
const contadorParrafo = document.querySelector('#counter');
const button = document.querySelectorAll('.button');

// contador
let contador = 0;

button.forEach( boton => {
    boton.addEventListener('click', e => {
        switch (boton.value) {
            case 'decrease':
                contador--;
                break;

            case 'restart':
                contador = 0;
                break;

            case 'increase':
                contador++;
            break;

            default:
                break;
        }

        contadorParrafo.textContent = contador;
    })
})

