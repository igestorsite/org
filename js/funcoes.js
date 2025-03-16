//Scroll
$(document).scroll(function(e){
	var scrollTop = $(document).scrollTop();
	if(scrollTop > 1){
		//console.log(scrollTop);        
		$('.navbar').addClass('navTop');
		$('.ajustCateg').addClass('topCateg');
	} else {
		$('.navbar').removeClass('navTop');
		$('.ajustCateg').removeClass('topCateg');
	}
});

$(document).ready(function () {
	$('.dropdown').hover(function(){ 
		$('.dropdown-toggle', this).trigger('click'); 
  	});
});
//Scroll


//paga os arquivos backgrounds
$(document).ready(function() {
	var attr = $(".titTop").attr('data-Back');
	if (typeof attr !== 'undefined' && attr !== false) {
		varaqBack = $(".titTop").attr("data-Back");
		if (varaqBack != "") {
			$(".titTop").css('background-image', 'url(assets/images/' + varaqBack + ')');
		}
	}
});
//paga os arquivos backgrounds


//Jarallax
$(document).ready(function () {
    if ($('.jarallax').length ) { 
        //console.log("A classe existe");
        $('.jarallax').jarallax({
            speed: 0.3
            //imgWidth: 3000,
            //imgHeight: 100
        });
    } else {
        console.log("A não classe existe");
    }
});
//Jarallax


//mostra banner a direita
$(document).ready(function () {
	$('#box1').click(function(){
        console.log("olá");
        //$("#banner1").css("visibility", "visible");
        $("#banner1").removeClass('showb');
        $("#banner1").addClass('hideb');
        $("#banner2").removeClass('showb');
        $("#banner2").addClass('hideb');
        $("#banner3").removeClass('showb');
        $("#banner3").addClass('hideb');
        $("#banner1").toggleClass('hideb showb');
        $("#n-combo").text("1");
  	});
    $('#box2').click(function(){
        console.log("olá");
        //$("#banner1").css("visibility", "visible");
        $("#banner1").removeClass('showb');
        $("#banner1").addClass('hideb');
        $("#banner2").removeClass('showb');
        $("#banner2").addClass('hideb');
        $("#banner3").removeClass('showb');
        $("#banner3").addClass('hideb');
        $("#banner2").toggleClass('hideb showb');
        $("#n-combo").text("2");
  	});
      $('#box3').click(function(){
        console.log("olá");
        //$("#banner1").css("visibility", "visible");
        $("#banner1").removeClass('showb');
        $("#banner1").addClass('hideb');
        $("#banner2").removeClass('showb');
        $("#banner2").addClass('hideb');
        $("#banner3").removeClass('showb');
        $("#banner3").addClass('hideb');
        $("#banner3").toggleClass('hideb showb');
        $("#n-combo").text("3");
  	});  
});
//mostra banner a direita


//toggle um elemento
function toggleFunc(id) { 
    var x = document.getElementById(id);
    var i = "i-"+id;
    var obj = document.getElementById(i);
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
        obj.style.transform = 'rotate(180deg)';
    } else {
        x.style.display = "none";
        obj.style.transform = 'rotate(0deg)';
    }
}
//toggle um elemento


//toggle class//
function toggleClass(id, classe) {    
    var id = id;
    var classe = classe;
    $("#"+id).toggleClass(classe);
};
//mostra o carrinho//


//mostra o carrinho//
$(document).ready(function () {
	$('#carrinho').click(function(){
        $("#carrinho").toggleClass('carrinhoShow');
    });  
});
//mostra o carrinho//


//API viaCEP//
$(document).ready(function() {

    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#nome").val("");
        $("#empresa").val("");
        $("#cpf").val("");
        $("#cnpj").val("");
        $("#email").val("");
        $("#celular").val("");
        $("#telefone").val("");
        $("#rua").val("");
        $("#numero").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#uf").val("");
    }
    
    //Quando o campo cep perde o foco.
    $("#cep").blur(function() {

        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                $("#rua").val("...");
                $("#bairro").val("...");
                $("#cidade").val("...");
                $("#uf").val("...");

                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#rua").val(dados.logradouro);
                        $("#bairro").val(dados.bairro);
                        $("#cidade").val(dados.localidade);
                        $("#uf").val(dados.uf);
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    });
});
//API viaCEP//

//controla mouse over//
function mostrarDiv(id) {
    var divMostrar = document.querySelector('#'+id);
    divMostrar.style.display = 'flex';
}
function esconderDiv(id) {
    var divMostrar = document.querySelector('#'+id);
    divMostrar.style.display = 'none';
}
//controla mouse over//


//Adiciona uma classe//
// Função para aplicar classe
  function aplicarClasse(id, nomeClasse) {
    //console.log("top");
    var elemento = document.getElementById(id);
    elemento.classList.add(nomeClasse);
  }

  // Função para remover classe
  function removerClasse(id, nomeClasse) {
    var elemento = document.getElementById(id);
    elemento.classList.remove(nomeClasse);
  }

  // Função para remover a classe de todos os IDs
  function removerClasseDosIDs(ids, nomeClasse) {
    ids.forEach(function(id) {
        var elemento = document.getElementById(id);
        if (elemento) {
            elemento.classList.remove(nomeClasse);
            setTimeout(function() {
                elemento.classList.remove('skideLayerTop0');
            }, 350);
        } else {
            console.warn('Elemento com ID ' + id + ' não encontrado.');
        }
    });
   }

   //função que atribui o atributo onclick em um elemento, passando o ID do mesmo
   function criaLink(id, link) {
    $('#'+id).attr('onclick', 'window.location.href="'+link+'/index.html"');
    $('#'+id).attr('style', 'cursor:pointer');
   }
//Adiciona uma classe//



//*******************muda de forma aleatória as imagens*******************//
    //window.onload = function() {
    function FotosAleatorias() {

        //função para mudar de disretório cao esteja dentro de algum produto (aterar em 4 lugares: modal.js, menu.js, rodape.js e funções.js)
        var path = loc.substring(0, loc.lastIndexOf('/'));
        var dir = path.split('/').pop();
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
        
        // Array contendo os caminhos das suas imagens
        var imagens = [
            upperDir+'assets/images/equipe/foto_1.webp',
            upperDir+'assets/images/equipe/foto_2.webp',
            upperDir+'assets/images/equipe/foto_3.webp',
            upperDir+'assets/images/equipe/foto_4.webp',
            upperDir+'assets/images/equipe/foto_5.webp',
            upperDir+'assets/images/equipe/foto_6.webp',
            upperDir+'assets/images/equipe/foto_7.webp',
            upperDir+'assets/images/equipe/foto_8.webp',
            upperDir+'assets/images/equipe/foto_9.webp',
            upperDir+'assets/images/equipe/foto_10.webp',
            upperDir+'assets/images/equipe/foto_11.webp',
            upperDir+'assets/images/equipe/foto_12.webp',
            upperDir+'assets/images/equipe/foto_13.webp',
            upperDir+'assets/images/equipe/foto_14.webp',
            upperDir+'assets/images/equipe/foto_15.webp',
            upperDir+'assets/images/equipe/foto_16.webp',
            upperDir+'assets/images/equipe/foto_18.webp',
            upperDir+'assets/images/equipe/foto_19.webp',
            upperDir+'assets/images/equipe/foto_20.webp',
            upperDir+'assets/images/equipe/foto_21.webp',
            upperDir+'assets/images/equipe/foto_22.webp',
            upperDir+'assets/images/equipe/foto_23.webp',
            upperDir+'assets/images/equipe/foto_25.webp',
            upperDir+'assets/images/equipe/foto_26.webp',
            upperDir+'assets/images/equipe/foto_27.webp',
            upperDir+'assets/images/equipe/foto_29.webp',
            upperDir+'assets/images/equipe/foto_30.webp',
            upperDir+'assets/images/equipe/foto_31.webp',
            upperDir+'assets/images/equipe/foto_32.webp',
            upperDir+'assets/images/equipe/foto_33.webp',
            upperDir+'assets/images/equipe/foto_34.webp',
            upperDir+'assets/images/equipe/foto_35.webp',
            upperDir+'assets/images/equipe/foto_36.webp',
            upperDir+'assets/images/equipe/foto_37.webp',
            upperDir+'assets/images/equipe/foto_38.webp',
            upperDir+'assets/images/equipe/foto_40.webp',
            upperDir+'assets/images/equipe/foto_41.webp',
            upperDir+'assets/images/equipe/foto_42.webp',
            upperDir+'assets/images/equipe/foto_43.webp',
            upperDir+'assets/images/equipe/foto_44.webp',
            upperDir+'assets/images/equipe/foto_45.webp',
            upperDir+'assets/images/equipe/foto_46.webp',
            upperDir+'assets/images/equipe/foto_47.webp',
            upperDir+'assets/images/equipe/foto_48.webp',
            upperDir+'assets/images/equipe/foto_49.webp',
            upperDir+'assets/images/equipe/foto_50.webp',
            upperDir+'assets/images/equipe/foto_51.webp',
            upperDir+'assets/images/equipe/foto_52.webp',
            upperDir+'assets/images/equipe/foto_53.webp',
            upperDir+'assets/images/equipe/foto_54.webp',
            upperDir+'assets/images/equipe/foto_55.webp',
            upperDir+'assets/images/equipe/foto_56.webp',
            upperDir+'assets/images/equipe/foto_57.webp',
            upperDir+'assets/images/equipe/foto_58.webp',
            upperDir+'assets/images/equipe/foto_59.webp',
            upperDir+'assets/images/equipe/foto_60.webp',
            upperDir+'assets/images/equipe/foto_61.webp',
            upperDir+'assets/images/equipe/foto_62.webp',
            upperDir+'assets/images/equipe/foto_63.webp',
            upperDir+'assets/images/equipe/foto_64.webp',
            upperDir+'assets/images/equipe/foto_65.webp',
            upperDir+'assets/images/equipe/foto_66.webp',
            upperDir+'assets/images/equipe/foto_67.webp',
            upperDir+'assets/images/equipe/foto_68.webp',
            upperDir+'assets/images/equipe/foto_69.webp',
            upperDir+'assets/images/equipe/foto_70.webp',
            upperDir+'assets/images/equipe/foto_71.webp',
            upperDir+'assets/images/equipe/foto_72.webp'
            // Adicione mais caminhos de imagens conforme necessário
        ];
        
        // Gera um número aleatório entre 0 e o número total de imagens
        var indiceAleatorio = Math.floor(Math.random() * imagens.length);
        
        // Obtenha a referência da imagem pelo ID
        if (window.innerWidth < 768) {
            var imagem = document.getElementById('imagemMudar_mb');
        } else {
            var imagem = document.getElementById('imagemMudar');
        }
        
        // Use o número aleatório gerado para selecionar o caminho da imagem
        var caminhoDaImagem = imagens[indiceAleatorio];
        
        // Mude o atributo src da imagem para o caminho selecionado
        //imagem.classList.add('ani-fadeInUpSmall');
        //imagem.classList.remove('ani-fadeInUpSmall');
        //imagem.style.opacity = 0;        
        //imagem.classList.add('ani-fadeInUpSmall');

        //imagem.src = caminhoDaImagem;
        
        $(imagem).hide(0, function() {
            $(imagem).attr('src', caminhoDaImagem).fadeIn(0);
        });
    };

    if (document.getElementById('imagemMudar_mb') || document.getElementById('imagemMudar')) {
        window.onload = function() {
            FotosAleatorias(); // Chamando a função no evento onload
        };
    

        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('botResetIcon').addEventListener('click', FotosAleatorias);
            document.getElementById('botResetIcon_mb').addEventListener('click', FotosAleatorias);
        });
    }
//*******************muda de forma aleatória as imagens*******************//



//*******************função temporizadora do slide com texto falando sobre "100% das fotos versão desktop"*******************//
/*if (document.getElementById('botSlider')) {
    setTimeout(function() {
        var div = document.getElementById('botSlider');
        div.classList.remove('botSliderInicial');
    }, 8000); // 8000 milissegundos = 8 segundos
}*/
//*******************função temporizadora do slide com texto falando sobre "100% das fotos versão desktop"*******************//



//*******************função que abre e fecha a div slide com texto do "100% das fotos versão desktop"*******************//
/*if (document.getElementById('botSlider')) {
    document.getElementById('botSlider').addEventListener('click', function() {
        var div = document.getElementById('botSlider');
        if (div.classList.contains('botSliderInicial')) {
            div.classList.remove('botSliderInicial');
        } else {
            div.classList.add('botSliderInicial');
        }
    });
}*/
//*******************função que abre e fecha a div slide com texto do "100% das fotos versão desktop"*******************//

//*******************Nova função temporizadora do slide com texto falando sobre "100% das fotos versão desktop"*******************//
if (document.getElementById('botSlider')) {
    let timer;
    let isMouseOver = false;

    function removeClass() {
        const element = document.getElementById('botSlider');
        if (!isMouseOver) {
            element.classList.remove('botSliderInicial');
        }
    }

    if (window.screen.width < 1920) {
        removeClass();
    }

    function startTimer() {
        timer = setTimeout(removeClass, 8000);
    }

    function resetTimer() {
        clearTimeout(timer);
        startTimer();
    }

    document.getElementById('botSlider').addEventListener('click', () => {
        const element = document.getElementById('botSlider');
        if (element.classList.contains('botSliderInicial')) {
            element.classList.remove('botSliderInicial');
        } else {
            element.classList.add('botSliderInicial');
        }
    });

    document.getElementById('botSlider').addEventListener('mouseover', () => {
        isMouseOver = true;
        clearTimeout(timer);
    });

    document.getElementById('botSlider').addEventListener('mouseout', () => {
        isMouseOver = false;
        resetTimer();
    });

    // Inicia o temporizador quando a página carregar
    startTimer();
}
//*******************Nova função temporizadora do slide com texto falando sobre "100% das fotos versão desktop"*******************//


//*******************controla o clique do zoom no celular*******************//
$(document).ready(function(){
    $(".imgAument").click(function() {
        $(this).toggleClass("imgZoomPic");
        $(this).next(".imgAumentB").toggleClass("imgZoomPicB");
    });
});
//*******************controla o clique do zoom no celular*******************//









