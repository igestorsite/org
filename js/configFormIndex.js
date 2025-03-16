//*******************configura o SRC do iframe do formulario*******************//
//para configurar basta alterar o conjunto de constantes correspondente ao servidor que estiver sendo usado

//const novoSrc = 'http://localhost:3000'; //localhost

//const novoSrc = 'https://qa-www.eicon.com.br/server'; //QA

const novoSrc = 'https://www.eicon.com.br/server'; //Eicon

if (document.getElementById('carregaFomulario')) {
    const iframe = document.getElementById('carregaFomulario');
    let src = iframe.getAttribute('src');
    src = novoSrc+src;
    iframe.src = src;
}
//*******************configura o SRC do iframe do formulario*******************//