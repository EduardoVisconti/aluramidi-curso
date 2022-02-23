function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla'); //Variável constante/fixa.

let contador = 0; //Variável que pode ser alterada.

while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = tocaSomPom;
    
    contador = contador + 1;

    console.log(contador);
}