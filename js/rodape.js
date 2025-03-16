var loc = window.location.pathname;
var path = loc.substring(0, loc.lastIndexOf('/'));
var dir = path.split('/').pop();
var arqnome = window.location.pathname.split('/').pop();
var upperDir = "";

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
//função para mudar de disretório cao esteja dentro de algum produto (aterar em 4 lugares: modal.js, menu.js, rodape.js e funções.js)

$(document).ready(function () {
    document.getElementById('rodape').innerHTML =
  '    <footer>' +
  '         <div class="container">' +
  '             <div class="row">' +
  '                 <div class="col-md-4">' +
  '                     <a href="index.html"><img src="'+upperDir+'assets/images/logo_bc.png"></a>' +
  '                     <address>' +
  '                         <i class="fas fa-map-marker-alt"></i> Rua Bogaert, 107<br>' +
  '                         &nbsp;&nbsp;&nbsp; Sacomã - São Paulo - SP<br>' +
  '                         &nbsp;&nbsp;&nbsp; CEP - 04298-020<br>' +
  '                         <i class="far fa-envelope"></i> <a href="mailto:info@eicon.com.br">info@eicon.com.br</a><br>' +
  '                         <i class="fas fa-phone"></i> <a href="tel:+112175-1111">(11) 2175-1111</a>' +                        
  '                     </address>' +
  '                     <div class="medias">' +
  '                     <b>Mídias Sociais</b>' +
  '                     <a href="https://www.instagram.com/eiconbrasil/"><i class="fab fa-instagram"></i></a>' +
  '                     <!--<a href="https://www.facebook.com/eiconbrasil/"><i class="fab fa-facebook"></i></a>-->' +
  '                     <a href="https://www.linkedin.com/company/eiconbrasil/"><i class="fab fa-linkedin"></i></a>' +
  '                     <a href="https://api.whatsapp.com/send?phone=5511994122270&text=Por%20favor,%20eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."><i class="fab fa-whatsapp corwhats"></i></a>' +
  '                     </div>' +
  '                 </div>' +
  '                 <div class="col-md-3">' +
  '                     <b>Links</b>' +
  '                     <a href="'+upperDir+'index.html">Home</a><br>' +
  '                     <a href="'+upperDir+'quemsomos.html">Quem somos</a><br>' +
  '                     <a href="https://www.youtube.com/@EiconTransformamosVidas">Vídeos</a><br>' +
  '                     <a href="'+upperDir+'trabalhe.html">Trabalhe conosco</a><br>' +
  '                     <a href="'+upperDir+'imprensa.html">Imprensa</a><br>' +
  '                     <a href="'+upperDir+'politica.html">Política de privacidade</a><br>' +
  '                     <a href="'+upperDir+'assets/images/RelatorioTranspSalarialEicon.pdf">Relatório de Transparência Salarial</a><br>' +
  '                     <a href="https://eicontecnogroup.sharepoint.com/">Intranet</a><br>' +
  '                     <a href="http://webmail.tecnogroup.com.br/">Webmail</a><br>' +
  '                     <p style="font-size:30px; font-weight: 700;"><a href="'+upperDir+'servicos.html">SAC</a></p>' +
  '                 </div>' +
  '                 <div class="col-md-5 medias">' + 
  '                     <div class="row">' +
  '                       <div class="col-md-12 text-center">' +
  '                         <b>Produtos</b>' +
  '                       </div>' +
  '                       <div class="col-md-6 solucoes">' +
  '                         <p><i class="fas fa-angle-right"></i>Soluções Tributárias</p>' +
  '                         <a href="'+upperDir+dirGiss+'">GissOnline</a><br>' +
  '                         <a href="'+upperDir+dirCed+'">Ced</a><br>' +
  '                         <a href="'+upperDir+dirGde+'">Gde</a><br>' +
  '                         <a href="'+upperDir+dirGiex+'">Giex</a><br>' +
  '                         <a href="'+upperDir+dirGivaf+'">Givaf</a><br>' +
  '                         <a href="'+upperDir+dirIcad+'">iCad</a><br>' +
  '                         <p class="mgT-1"><i class="fas fa-angle-right"></i>Soluções Sociais</p>' +
  '                         <a href="'+upperDir+dirGier+'">Gier Educação</a><br>' +
  '                         <a href="'+upperDir+dirSiss+'">Siss Saúde</a><br>' +
  '                         <a href="'+upperDir+dirActoBeneficiosSociais+'">Acto Benefícios Sociais</a>' +
  '                       </div>' +
  '                       <div class="col-md-6 solucoes">' +
  '                         <p><i class="fas fa-angle-right"></i>Soluções Administrativas</p>' +
  '                         <a href="'+upperDir+dirCidadeinteligente+'">Cidade Inteligente</a><br>' +
  '                         <a href="'+upperDir+dirActoadministrativo+'">Acto Administrativo</a><br>' +
  '                         <a href="'+upperDir+dirActocidadao+'">Acto Cidadão</a><br>' +
  '                         <a href="'+upperDir+dirActocontratos+'">Acto Contratos e Execução</a><br>' +
  '                         <a href="'+upperDir+dirActoespacopublico+'"">Acto Espaço Público</a><br>' +
  '                         <a href="'+upperDir+dirActoobrashabitese+'">Acto Obras Habite-se</a><br>' +
  '                         <a href="'+upperDir+dirActoobraspublicas+'">Acto Obras Públicas</a><br>' +
  '                         <a href="'+upperDir+dirActoseguranca+'">Acto Segurança</a><br>' +
  '                         <a href="'+upperDir+dirActodefesacivil+'">Acto Defesa Civil</a><br>' +
  '                         <a href="'+upperDir+dirPruc+'">Pruc</a><br>' +
  '                       </div>' +
  '                     </div>' +  
  '                 </div>' +
  '             </div>' +
  '             <div class="row">' +
  '                 <div class="col-md-12 text-center">' +
  '                     <hr>' +
  '                     <p>Eicon Brasil © ' + new Date().getFullYear() + ' | Todos os direitos reservados.</p>' +
  '                 </div>' +
  '             </div>' +
  '         </div>' +
  '     </footer>';
  });