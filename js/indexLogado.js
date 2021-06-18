// Recebendo a denúncia

let denunciaSave = JSON.parse(localStorage.getItem('denunciaSave'))
let dateBRNascimento = denunciaSave.dataNascimento.split('/').reverse().join('-');
let dateBRDesaparecimento = denunciaSave.dataDesaparecimento.split('/').reverse().join('-');
dateBRDesaparecimento = denunciaSave.dataDesaparecimento.split('-').reverse().join('/');
dateBRNascimento = denunciaSave.dataNascimento.split('-').reverse().join('/');

document.querySelector('#nomeDesaparecido').innerHTML = denunciaSave.nome.toUpperCase();
document.querySelector('#nomePais').innerHTML = 'Pais: ' + denunciaSave.nomeMae + ' e ' +  denunciaSave.nomePai;
document.querySelector('#sexo').innerHTML = 'Sexo: ' + denunciaSave.sexo;
document.querySelector('#idade').innerHTML = 'Idade: ' + denunciaSave.idade;
document.querySelector('#dataNascimento').innerHTML = 'Data de Nascimento: ' + dateBRNascimento;
document.querySelector('#dataDesaparecimento').innerHTML = 'Desaparecimento: ' + dateBRDesaparecimento;
document.querySelector('#naturalidade').innerHTML = 'Natural de: ' + denunciaSave.naturalidade;
document.querySelector('#altura').innerHTML = 'Altura: ' + denunciaSave.altura;
document.querySelector('#olhos').innerHTML = 'Olhos: ' + denunciaSave.olhos;
document.querySelector('#pele').innerHTML = 'Pele: ' + denunciaSave.pele;
document.querySelector('#cabelo').innerHTML = 'Cabelo: ' + denunciaSave.cabelos;

//Função para filtragem de conteúdos referente ao desaparecido! Tudo USANDO jQUERY.

$(function(){ 
$("#filtro").keyup(function(){
  var texto = $(this).val();
  
  $(".column").each(function(){
    var resultado = $(this).text().toUpperCase().indexOf(''+texto.toUpperCase());
    console.log(resultado)
    
    if(resultado < 0) {
      $(this).fadeOut();
    }else {
      $(this).fadeIn();
    }
  }); 

});

});
    
function deslogar(){
   localStorage.removeItem('token')
   window.location.href= "./index.html"
 }

 if(localStorage.getItem('token') == null){
  alert("Necessário estar logado!");
  window.location.href = "./index.html"
}

//Não permitir inspecionar elemento

// window.addEventListener("keydown", ev => {
//   switch( true ) {
//     /* Previne F12 */
//     case ev.keyCode === 123:
    
//     /* Previne Ctrl + Shift +  */
//     case ev.ctrlKey && ev.shiftKey && event.keyCode == 74:
    
//     /* Previne Ctrl + U */
//     case ev.ctrlKey && ev.keyCode == 85:
//       console.log("Tecla bloqueada");
//       ev.preventDefault();
//       return false;
//   }
// })

// /* Previne clique direito do mouse */
// window.addEventListener("contextmenu", ev => {
//   ev.preventDefault();
//   return false;
// });