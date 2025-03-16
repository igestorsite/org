//loading.js - Powered by Alex
//ver 1.0 - dez/2023
//esse loading pode ser todo automático, bantando descomentar bloco 1 e bloco 2.
//caso esses módulos etiverem comentado deve acrescentar a div no index.html o style no custom.css

document.addEventListener("DOMContentLoaded", function() {
  // Bloco 1 - Adiciona o elemento de carregamento ao corpo da página (OPCIONAL)
  //document.body.insertAdjacentHTML('afterbegin', "<div id='preloader'></div>");
  //document.body.insertAdjacentHTML('beforeend', "<div id='preloader'></div>");

  // Define as propriedades de estilo para o elemento de carregamento
  var loadingElement = document.getElementById('preloader');
  if (loadingElement) {
    // Bloco 2 - gera o css, mas pode ser colocado no custom.css (OPCIONAL)
    /*loadingElement.style.cssText = `
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      background-color: var(--loadding);
      background-image: url(assets/images/loading3.gif);
      background-size: 90px;
      background-position: center;
      background-repeat: no-repeat;
      display: flex;
    `;*/

    // Bloco 3 -  Adiciona um ouvinte para esconder o elemento de carregamento quando a página estiver totalmente carregada
    window.addEventListener('load', function() {
      setTimeout(function() {
        $(document).ready( function() {
          $("#preloader").fadeOut("slow");
        });
      }, 500);
    });
  }
});