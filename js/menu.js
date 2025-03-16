var loc = window.location.pathname;
var path = loc.substring(0, loc.lastIndexOf('/'));
var dir = path.split('/').pop();
var arqnome = window.location.pathname.split('/').pop();
var upperDir = "";
var sistema = "";
var sistemaMob = "";

var dirActoadministrativo = "actoadministrativo/index.html";
var dirActocidadao = "actocidadao/index.html";
var dirActocontratos = "actocontratos/index.html";
var dirActoespacopublico = "actoespacopublico/index.html";
var dirActoobrashabitese = "actoobrashabitese/index.html";
var dirActoobraspublicas = "actoobraspublicas/index.html";
var dirActoseguranca = "actoseguranca/index.html";
var dirActodefesacivil = "actodefesacivil/index.html";
var dirActoBeneficiosSociais = "actobeneficiossociais/index.html";
var dirCed = "ced/index.html";
var dirCidadeinteligente = "cidadeinteligente/index.html";
var dirGde = "gde/index.html";
var dirGier = "gier/index.html";
var dirGiex = "giex/index.html";
var dirGiss = "giss/index.html";
var dirGivaf = "givaf/index.html";
var dirIcad = "icad/index.html";
var dirPruc = "pruc/index.html";
var dirSiss = "siss/index.html";

//função para mudar de disretório cao esteja dentro de algum produto (aterar em 4 lugares: modal.js, menu.js, rodape.js e funções.js)
function getUpperDir(dir) {
  const dirMappings = {
      actoadministrativo: "../",
      actocidadao: "../",
      actocontratos: "../",
      actoespacopublico: "../",
      actoobrashabitese: "../",
      actoobraspublicas: "../",
      actoseguranca: "../",
      actodefesacivil: "../",
      actobeneficiossociais: "../",
      ced: "../",
      cidadeinteligente: "../",
      gde: "../",
      gier: "../",
      giex: "../",
      giss: "../",
      givaf: "../",
      icad: "../",
      pruc: "../",
      siss: "../"
  };
  return dirMappings[dir] || "";
}
upperDir = getUpperDir(dir);
console.log('upperDir' + upperDir);
upperDir = "../";
//função para mudar de disretório cao esteja dentro de algum produto (aterar em 4 lugares: modal.js, menu.js, rodape.js e funções.js)

if (window.innerWidth > 768) {
  if (dir == "giss") { 
    sistema = '<li class="nav-item"><a class="nav-link acessPrg" href="https://portal.gissonline.com.br/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Acesse o Sistema"><i class="fa fa-tv"></i></a></li>'
  } else if (dir == "giex" || dir == "ced") {
    sistema = '<li class="nav-item"><a class="nav-link acessPrg" href="https://portal.giexonline.com.br/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Acesse o Sistema"><i class="fa fa-tv"></i></a></li>'
  }
} else {
  if (dir == "giss") { 
    sistemaMob = '<a class="nav-link acessPrg" href="https://portal.gissonline.com.br/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Acesse o Sistema"><i class="fa fa-tv"></i></a>'
  } else if (dir == "giex" || dir == "ced") {
    sistemaMob = '<a class="nav-link acessPrg" href="https://portal.giexonline.com.br/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Acesse o Sistema"><i class="fa fa-tv"></i></a>'
  }
}

$(document).ready(function () {
  document.getElementById('menu').innerHTML =
'    <nav class="navbar navbar-expand-lg navbar-light">' +
'      <div class="container-fluid">' +
'        <a class="navbar-brand1" href="'+upperDir+'index.html"><img src="'+upperDir+'assets/images/logo__eicon.svg"></a>' +
'        <a class="navbar-brand2" href="'+upperDir+'index.html"><img src="'+upperDir+'assets/images/logo__eicon.svg"></a>' +
'        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
'          <span class="navbar-toggler-icon"></span>' +
'        </button>' +
'        <div class="collapse navbar-collapse" id="navbarSupportedContent">' +
'          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">' +
'            <li class="nav-item">' +
'              <a class="nav-link" aria-current="page" href="'+upperDir+'index.html">Home</a>' +
'            </li>' +
'            <li class="nav-item dropdown">' +
'              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">A Eicon</a>' +
'              <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">' +
'                <li><a class="dropdown-item" href="'+upperDir+'quemsomos.html">Quem somos</a></li>' +
'                <li><a class="dropdown-item" href="https://www.youtube.com/@EiconTransformamosVidas">Vídeos</a></li>' +
'                <li><a class="dropdown-item" href="'+upperDir+'trabalhe.html">Trabalhe conosco</a></li>' +
'                <li><a class="dropdown-item" href="'+upperDir+'imprensa.html">Imprensa</a></li>' +
'                <li><a class="dropdown-item" href="https://eicontecnogroup.sharepoint.com/">Intranet</a></li>' +
'                <li><a class="dropdown-item" href="http://webmail.tecnogroup.com.br/">Webmail</a></li>' +
'              </ul>' +
'            </li>' +
'            <li class="nav-item dropdown menuhalfsize">' +
'              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">Produtos</a>' +
'              <div class="dropdown-menu" aria-labelledby="navbarDropdown3">' +

'              <div class="container menuprodutos desktop">' + 
'               <div class="row">' + 
'                   <div class="col-md-4"><h3>Soluções Sociais</h3></div>' + 
'                   <div class="col-md-4"><h3>Soluções Tributárias</h3></div>' + 
'                   <div class="col-md-4"><h3>Soluções Administrativas</h3></div>' + 
'               </div>' + 
'               <div class="row">' + 
'                   <div class="col-md-4">' +
'                       <div class="cursorHd" onclick="window.location.href=\''+upperDir+dirSiss+'\';">' +  
'                           <img src="'+upperDir+'assets/images/logo_siss.svg" alt="Logo Siss Saúde">' +
'                           <p>Desenvolve e humaniza a Saúde Pública</p>' + 
'                       </div>' + 
'                       <div class="cursorHd" onclick="window.location.href=\''+upperDir+dirGier+'\';">' + 
'                           <img src="'+upperDir+'assets/images/logo_gier.svg" alt="Logo Gier Educação">' + 
'                           <p>Eleva a qualidade da Educação Pública</p>' + 
'                       </div>' + 
'                       <div class="cursorHd" onclick="window.location.href=\''+upperDir+dirActoBeneficiosSociais+'\';">' + 
'                           <img src="'+upperDir+'assets/images/logo_actobeneficiossociais.svg" alt="Logo Acto Benefícios Sociais">' + 
'                           <p>Impulsione o desenvolvimento social do município</p>' + 
'                       </div>' + 
'                   </div>' + 
'                   <div class="col-md-4">' + 
'                       <div class="cursorHd" onclick="window.location.href=\''+upperDir+dirGiss+'\';">' + 
'                           <img src="'+upperDir+'assets/images/logo_giss.svg" alt="Logo GissOnline">' + 
'                           <p>Impulsiona a arrecadação do ISS</p>' + 
'                       </div>' + 
'                       <div class="cursorHd" onclick="window.location.href=\''+upperDir+dirGde+'\';">' + 
'                           <img src="'+upperDir+'assets/images/logo_gde.svg" alt="Logo GDE">' + 
'                           <p>Gestão do Valor Adicionado <!--texto antigo--></p>' + 
'                       </div>' + 
'                       <div class="cursorHd" onclick="window.location.href=\''+upperDir+dirCed+'\';">' + 
'                           <img src="'+upperDir+'assets/images/logo_ced.svg" alt="Logo CED">' + 
'                           <p>Aumenta a arrecadação e reduz a inadimplência</p>' + 
'                       </div>' + 
'                       <div class="cursorHd" onclick="window.location.href=\''+upperDir+dirGiex+'\';">' + 
'                           <img src="'+upperDir+'assets/images/logo_giex.svg" alt="Logo Giex">' + 
'                           <p>Moderniza a procuradoria e recupera a dívida ativa</p>' + 
'                       </div>' + 
'                       <div class="cursorHd" onclick="window.location.href=\''+upperDir+dirGivaf+'\';">' + 
'                           <img src="'+upperDir+'assets/images/logo_givaf.svg" alt="Logo Givaf">' + 
'                           <p>Melhora a arrecadação do ICMS</p>' + 
'                       </div>' + 
'                       <div class="cursorHd" onclick="window.location.href=\''+upperDir+dirIcad+'\';">' + 
'                           <img src="'+upperDir+'assets/images/logo_icad.svg" alt="Logo iCad">' + 
'                           <p>Atrai novas empresas</p>' + 
'                       </div>' + 
'                   </div>' + 
'                   <div class="col-md-4">                ' + 
'                       <div class="cursorHd" onclick="window.location.href=\''+upperDir+dirCidadeinteligente+'\';">' + 
'                           <img src="'+upperDir+'assets/images/logo_cidadeinteligente.svg" alt="Logo Cidade Inteligente">' + 
'                           <p>Integra serviços do governo em plataforma única</p>' + 
'                       </div>' + 
'                       <div class="imgSpace">' + 
'                           <a href="'+upperDir+dirActoadministrativo+'"><img src="'+upperDir+'assets/images/logo_act_adm.svg" alt="Logo Acto Administrativo"></a>' +
'                           <p>Tenha governo e gestão digitais</p>' +  
'                           <a href="'+upperDir+dirActocidadao+'"><img src="'+upperDir+'assets/images/logo_act_cidadao.svg" alt="Logo Acto Cidadão"></a>' + 
'                           <p>Serviços públicos com gestão colaborativa</p>' + 
'                           <a href="'+upperDir+dirActocontratos+'"><img src="'+upperDir+'assets/images/logo_act_contratos.svg" alt="Logo Acto Contratos"></a>' + 
'                           <p>Controla os contratos da gestão pública</p>' + 
'                           <a href="'+upperDir+dirActoespacopublico+'"><img src="'+upperDir+'assets/images/logo_act_espaco.svg" alt="Logo Acto Espaço Público"></a>' + 
'                           <p>Potencializa a gestão dos espaços públicos</p>' + 
'                           <a href="'+upperDir+dirActoobrashabitese+'"><img src="'+upperDir+'assets/images/logo_act_obrashabitese.svg" alt="Logo Acto Obras e Habite-se"></a>' + 
'                           <p>Administra todas as obras privadas</p>' + 
'                           <a href="'+upperDir+dirActoobraspublicas+'"><img src="'+upperDir+'assets/images/logo_act_obraspublicas.svg" alt="Logo Acto Obras Públicas"></a>' + 
'                           <p>Administra todas as obras do governo</p>' + 
'                           <a href="'+upperDir+dirActoseguranca+'"><img src="'+upperDir+'assets/images/logo_act_seguranca.svg" alt="Logo Acto Segurança"></a>' + 
'                           <p>Gestão da rotina operacional da segurança pública</p>' + 
'                           <a href="'+upperDir+dirActodefesacivil+'"><img src="'+upperDir+'assets/images/logo_act_defesa_civil.svg" alt="Logo Acto Defesa Civil"></a>' + 
'                           <p>Agilize a gestão das ações da defesa civil</p>' + 
'                       </div>' + 
'                       <div class="cursorHd" onclick="window.location.href=\''+upperDir+dirPruc+'\';">' + 
'                           <img src="'+upperDir+'assets/images/logo_pruc.svg" alt="Logo Pruc">' + 
'                           <p>Conheça o perfil social e econômico dos contribuintes</p>' + 
'                       </div>' + 
'                   </div>' + 
'                </div>' + 
'              </div>' +

'              <div class="menuPrdMob mobile">' +
'               <ul>' +
'                 <li><a href="'+upperDir+dirCidadeinteligente+'" class="dropdown-item">Cidade Inteligente</a></li>' +
'                 <li><a href="'+upperDir+dirSiss+'" class="dropdown-item">Siss Saúde</a></li>' +
'                 <li><a href="'+upperDir+dirGier+'" class="dropdown-item">Gier Educação</a></li>' +
'                 <li><a href="'+upperDir+dirGiss+'" class="dropdown-item">GissOnline</a></li>' +
'                 <li><a href="'+upperDir+dirGde+'" class="dropdown-item">GDE</a></li>' +
'                 <li><a href="'+upperDir+dirCed+'" class="dropdown-item">CED</a></li>' +
'                 <li><a href="'+upperDir+dirGiex+'" class="dropdown-item">Giex</a></li>' +
'                 <li><a href="'+upperDir+dirGivaf+'" class="dropdown-item">Givaf</a></li>' +
'                 <li><a href="'+upperDir+dirIcad+'" class="dropdown-item">iCad</a></li>' +
'                 <li><a href="'+upperDir+dirActoadministrativo+'" class="dropdown-item">Acto Administrativo</a></li>' +
'                 <li><a href="'+upperDir+dirActocidadao+'" class="dropdown-item">Acto Cidadão</a></li>' +
'                 <li><a href="'+upperDir+dirActocontratos+'" class="dropdown-item">Acto Contratos</a></li>' +
'                 <li><a href="'+upperDir+dirActoespacopublico+'" class="dropdown-item">Acto Espaço Público</a></li>' +
'                 <li><a href="'+upperDir+dirActoobrashabitese+'" class="dropdown-item">Acto Obras e Habite-se</a></li>' +
'                 <li><a href="'+upperDir+dirActoobraspublicas+'" class="dropdown-item">Acto Obras Públicas</a></li>' +
'                 <li><a href="'+upperDir+dirActoseguranca+'" class="dropdown-item">Acto Segurança</a></li>' +
'                 <li><a href="'+upperDir+dirActodefesacivil+'" class="dropdown-item">Acto Defesa Civil</a></li>' +
'                 <li><a href="'+upperDir+dirActoBeneficiosSociais+'" class="dropdown-item">Acto Benefícios Sociais</a></li>' +
'                 <li><a href="'+upperDir+dirPruc+'" class="dropdown-item">Pruc</a></li>' +  
'               </ul>' +
'              </div>' +

'              </div>' +
'            </li>' +
'            <li class="nav-item">' +
'              <a class="nav-link" href="'+upperDir+'servicos.html">Serviços ao Cliente</a>' +
'            </li>' +
'            <li class="nav-item">' +
'              <a class="nav-link" href="'+upperDir+'index.html#contato">Contato</a>' +
'            </li>' +
             sistema +
'            <li class="nav-item desktop">' +
'               <a href="https://www.instagram.com/eiconbrasil/" class="nav-link midiaS"><i class="fab fa-instagram"></i></a>' +
'            </li>' +
'            <!--<li class="nav-item desktop">' +
'               <a href="https://www.facebook.com/eiconbrasil/" class="nav-link midiaS"><i class="fab fa-facebook"></i></a>' +
'            </li>-->' +
'            <li class="nav-item desktop">' +
'               <a href="https://www.linkedin.com/company/eiconbrasil/" class="nav-link midiaS"><i class="fab fa-linkedin"></i></a>' +
'            </li>' +
'            <li class="nav-item desktop">' +
'               <a href="https://api.whatsapp.com/send?phone=5511994122270&text=Por%20favor,%20eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." class="nav-link midiaS"><i class="fab fa-whatsapp corwhats"></i></a>' +
'            </li>' +
'            <li class="nav-item mobile">' +
                sistemaMob +
'               <a href="https://www.instagram.com/eiconbrasil/" class="nav-link midiaS"><i class="fab fa-instagram"></i></a> <a href="https://www.facebook.com/eiconbrasil/" class="nav-link midiaS"><i class="fab fa-facebook"></i></a> <a href="https://www.linkedin.com/company/eiconbrasil/" class="nav-link midiaS"><i class="fab fa-linkedin"></i></a> <a href="https://api.whatsapp.com/send?phone=5511994122270&text=Por%20favor,%20eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." class="nav-link midiaS"><i class="fab fa-whatsapp corwhats"></i></a>' +
'            </li>' +
'          </ul>' +
'        </div>' +
'      </div>' +
'    </nav>';

console.log('upperDir' + upperDir);
  //muda a cor do menu na página inicial
  if (upperDir === '' && arqnome === 'index.html' || arqnome === '') { 
    // Se a variável upperDir for vazia, adicione a classe corBranca a todas as tags com classe nav-link
    var navLinks = document.getElementsByClassName('nav-link');
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.add('corBranca');
    }
  }

  //config
  var menuClick = "true";
  var dropfull = "false";
  var dropanimation = "animacao2";
  var menuFull = "true";

  if(menuClick == "true"){
    $(".nav-item.dropdown").removeClass("dropdownFx");
    $(".dropdown-menu").removeClass("dropdown-menu2");
  } else {
    $('.nav-link.dropdown-toggle').removeAttr('data-bs-toggle');
    $(".nav-item.dropdown").addClass("dropdownFx");
    $(".dropdown-menu").addClass("dropdown-menu2");
  }
  if(dropfull == "true"){
    $(".dropdown-menu").addClass("dropfull");
    $(".nav-item.dropdown").css('position','static');
  }
  if(dropanimation == "animacao1"){
    $("ul.dropdown-menu").addClass("animate__animated animate__fadeIn");
    $("div.dropdown-menu").addClass("animate__animated animate__fadeIn");
  }  
  if(dropanimation == "animacao2"){
    $("ul.dropdown-menu").addClass("ani-fadeInDwSmall2");
    $("div.dropdown-menu").addClass("ani-fadeInDwSmall");
  }
  if(menuFull != "true"){
    $("nav>div").removeClass("container-fluid");
    $("nav>div").addClass("container");
  }

  //estanceio p tooltip (popover)
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
  });
});


    





