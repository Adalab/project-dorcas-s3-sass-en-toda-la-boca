'use strict';

//mete en la variable todos las clases que existen collapsible__container
const collapsibleContainer = document.querySelectorAll('.collapsible__container');
//mete en la variable todos las clases que existen collapsible__label
const collapsibleLabel = document.querySelectorAll('.collapsible__label');


const updateCollapsibles = (e) => {

  //se le pasa el evento del click en el collapsible que se haya clicado
  // y mete en la variable el padre de ese collapsible
  const padreCollapsibleLabel = e.currentTarget.parentElement;


  //si el padre del collapsible que se ha clicado tiene la clase
  //collapsible--visible la borra y sino la añade, esta clase hace que
  //el display pase de none a block
  if (padreCollapsibleLabel.classList.contains('collapsible--visible')) {
    padreCollapsibleLabel.classList.remove('collapsible--visible');
  } else {
    //si no  está la clase collapsible--visible entonces llama a la funcion
    //y despues añade la clase
    closeAllCollapsibles();
    padreCollapsibleLabel.classList.add('collapsible--visible');
  }

  const dataCol = padreCollapsibleLabel.getAttribute('data-valor');
  const dataIcon = document.querySelectorAll('.icon-collapsible');

  for (let i = 0; i < dataIcon.length; i++) {
    if (dataIcon[i].getAttribute('data-valor') == dataCol) {
      if (dataIcon[i].classList.contains('fa-chevron-down')) {

        dataIcon[i].classList.remove('fa-chevron-down');
        dataIcon[i].classList.add('fa-chevron-up');

      } else if (dataIcon[i].classList.contains('fa-chevron-up')) {
        console.log("abajo");
        dataIcon[i].classList.remove('fa-chevron-up');
        dataIcon[i].classList.add('fa-chevron-down');

      }
    }
  }

  console.log("data", dataCol);


};

//funcion que va elimininando la clase collapsible--visible
const closeAllCollapsibles = () => {
  for (let i = 0; i < collapsibleContainer.length; i++) {
    collapsibleContainer[i].classList.remove('collapsible--visible');
  }
};


//recorre el array de clases de collapsible__label y cada vez que
// se clica en un collapsible llama a la funcion updateCollapsibles
for (let i = 0; i < collapsibleContainer.length; i++) {

  collapsibleLabel[i].addEventListener('click', updateCollapsibles);
}
