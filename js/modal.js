//var url = window.location.pathname;
//var filename = url.substring(url.lastIndexOf('/')+1);

var loc = window.location.pathname;
var path = loc.substring(0, loc.lastIndexOf('/'));
var dir = path.split('/').pop();
var arqnome = window.location.pathname.split('/').pop();
var upperDir = "";

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
  document.getElementById('modais').innerHTML =
'   <div id="modal-1"></div>' +
'   <!--<div id="modal-2"></div>-->' +
'   <div id="modal-3"></div>' +
'   <div id="modal-4"></div>';
});


// Modal de vídeos Youtube
$(document).ready(function () {
  document.getElementById('modal-1').innerHTML =
  '<div class="modal fade" id="modalVideo_0" tabindex="-1" aria-labelledby="modalPlataformaLabel" aria-hidden="true">' + 
'        <div class="modal-dialog modal-lg modal-dialog-centered">' + 
'            <div class="modal-content">' + 
'                <div class="modal-header">' + 
'                    <img class="logoVideo" src="'+upperDir+'assets/images/logo__eicon.svg">' + 
'                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' + 
'                  </div>' + 
'                <div class="modal-body">' + 
'                   <iframe class="videoPlayerYT" width="100%" height="400" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' +
'                </div>' + 
'            </div>' + 
'        </div>' + 
'      </div>';
});

// Modal de vídeos Mp4
//$(document).ready(function () {
//document.getElementById('modal-2').innerHTML =
  '<div class="modal fade" id="modalVideo_1" tabindex="-1" aria-labelledby="modalPlataformaLabel" aria-hidden="true">' + 
'        <div class="modal-dialog modal-lg modal-dialog-centered">' + 
'            <div class="modal-content">' + 
'                <div class="modal-header">' + 
'                    <img src="'+upperDir+'assets/images/logo_eicon.svg">' + 
'                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' + 
'                  </div>' + 
'                <div class="modal-body">' + 
'                   <p>Video 1</p>' +
'                   <video class="videoPlayer" width="100%" height="auto" controls>' + 
'                      <source src="assets/videos/video_Atesta_CFM_06.mp4" type="video/mp4">' + 
'                      <source src="assets/videos/video_Atesta_CFM_06.ogg" type="video/ogg">' + 
'                     Your browser does not support the video tag.' + 
'                    </video>' + 
'                </div>' + 
'            </div>' + 
'        </div>' + 
'      </div>';
//});


// Modal texto 100% dos colaboradores versão mobile
$(document).ready(function () {
document.getElementById('modal-3').innerHTML =
'<div class="modal fade" id="boxModal-3" tabindex="-1" aria-labelledby="modalPlataformaLabel" aria-hidden="true">' + 
'   <div class="modal-dialog modal-dialog-centered">' + 
'      <div class="modal-content">' + 
'          <div class="modal-body">' + 
'             <p>100% das fotos do site são de colaboradores Eicônicos, representando todo o nosso time. Gente que trabalha com um único propósito, Transformar Vidas.</p>' +
'             <input type="checkbox" class="form-check-input" id="noShowAgainCheckbox">' +
'             <label class="form-check-label" for="noShowAgainCheckbox">Não mostrar novamente</label>' +
'          </div>' + 
'      </div>' + 
'   </div>' + 
'</div>';
});


$(document).ready(function () {
  document.getElementById('modal-4').innerHTML =
  '<div class="modal fade" id="boxModal-4" tabindex="-1" aria-labelledby="modalPlataformaLabel" aria-hidden="true">' +
  '  <div class="modal-dialog modal-lg modal-dialog-centered">' +
  '    <div class="modal-content">' +   
  '          <div class="modal-header">' + 
  '             <img class="logoVideo" src="'+upperDir+'assets/images/logo_eicon.svg">' + 
  '             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' + 
  '          </div>' + 
  '      <div class="modal-body">' +
  '         <div class="modalb0x">' +
  '         <p><b>Dúvidas ou Suporte técnico para usuários GissOnline e Ginfes:</b><br> Entre em contato pelo telefone (11) 2175-1145 ou pelo Chat GissOnline. ' +
  '         Acesse o <a href="https://portal.gissonline.com.br/" target="_blank">portal da GissOnline</a> com o seu usuário e senha e na aba <b>Prestador</b>, no final da página, clique em <b>Fale Conosco</b> nas opções de <b>Atendimento e Chat</b>.<br><br>' + 
  '         <b>Dúvidas ou Suporte para desenvolvedores:</b><br>  Entre em contato pelo e-mail <a href="mailto:atendimento@ginfes.com.br">atendimento@ginfes.com.br</a><br><br>' +
  '         <b>Acesse ainda Dicas de Acesso no Portal GissOnline:</b><br> Entre em <a href="https://portal.gissonline.com.br/help_portal/index.htm" target="_blank">Perguntas Frequentes</a> e encontre de forma fácil, a solução para sua dúvida.</p>' +
  '        </div>' +
  '      </div>' +
  '    </div>' +
  '  </div>' +
  '</div>';
});



//*******************controla os vídeos"*******************//
$(document).ready(function () {
  // Function to stop video when modal is closed (MP4)
  $('.modal').on('hidden.bs.modal', function () {
    $(this).find('.videoPlayer').each(function() {
      this.pause();
    });
  });
  // Função para tocar o vídeo quando o modal é aberto (MP4)
  $('.modal').on('show.bs.modal', function () {
    $(this).find('.videoPlayer').each(function() {
      this.play();
    });
  });


  // Função para tocar o vídeo quando o modal é aberto (youtube) tem que colodar autoplay e autoplay=1
  $('.modal').on('shown.bs.modal', function () {
    var videoId = $('.botModal').data('video-id');
    var videoUrl = 'https://www.youtube.com/embed/' + videoId + '?rel=0&autoplay=1&enablejsapi=1';
    $(this).find('.videoPlayerYT').attr('src', videoUrl);
    /*videoIframe.each(function(index, element) {
      element.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    });*/
  });
  // Função para os vídeos quando modal é fechado (youtube)
  $('.modal').on('hidden.bs.modal', function () {
    var videoIframe = $(this).find('.videoPlayerYT');
    videoIframe.each(function(index, element) {
      $(element).attr('src', '');
    });
  });
});
//*******************controla os vídeos"*******************//




//*******************carrega o modal para a mensagem 100% das fotos para versão mobile"*******************//
//Esse código de cookies só funciona em SERVIDOR, para rodar localmente, usar o XAMPP//
// Função para mostrar o modal se a largura da tela for no máximo 768px
function showMobileModal() {
  var modalShown = getCookie("modalShown");
  if (!modalShown && $(window).width() <= 768 && !$("#noShowAgainCheckbox").prop("checked")) {
    $('#boxModal-3').modal('show');
    setTimeout(function(){
      $('#boxModal-3').modal('hide');
      setCookie("modalShown", "true", 1); // Armazena um cookie para indicar que o modal foi mostrado
    }, 8000); // 8 segundos
  }
}

// Função para definir um cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Função para obter o valor de um cookie
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) == 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}

// Chama a função para mostrar o modal ao carregar a página e ao redimensionar a janela
$(document).ready(function() {
  showMobileModal();
  /*$(window).resize(function() {
    showMobileModal();
  });*/
});
//*******************carrega o modal para a mensagem 100% das fotos para versão mobile"*******************//



