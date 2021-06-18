<link rel="stylesheet" href="../css/index.css"></link>

// Recebendo a denúncia

let denunciaSave = JSON.parse(localStorage.getItem('denunciaSave'))
let dateBRNascimento = denunciaSave.dataNascimento.split('/').reverse().join('-');
dateBRNascimento = denunciaSave.dataNascimento.split('-').reverse().join('/');
let dateBRDesaparecimento = denunciaSave.dataDesaparecimento.split('/').reverse().join('-');
dateBRDesaparecimento = denunciaSave.dataDesaparecimento.split('-').reverse().join('/');

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

//Não permitir espaço

function notSpace(){
  if(event.keyCode == 32)
    event.returnValue = false;          
}

// Não permitir inspecionar elemento

// window.addEventListener("keydown", ev => {
//   switch( true ) {
//     /* Previne F12 */
//     case ev.keyCode === 123:
    
//     /* Previne Ctrl + Shift +  */
//     case ev.ctrlKey && ev.shiftKey && event.keyCode == 74:
    
//     /* Previne Ctrl + U */
//     case ev.ctrlKey && ev.keyCode == 85:
//       ev.preventDefault();
//       return false;
//   }
// })

// /* Previne clique direito do mouse */
// window.addEventListener("contextmenu", ev => {
//   ev.preventDefault();
//   return false;
// });

//Função para filtragem de conteúdos referente ao desaparecido! Tudo USANDO jQUERY.

$(function(){ 
$("#filtro").keyup(function(){
  var texto = $(this).val();
  
  $(".column").each(function(){
    var resultado = $(this).text().toUpperCase().indexOf(''+texto.toUpperCase());
  
    if(resultado < 0) {
      $(this).fadeOut();
    }else {
      $(this).fadeIn();
    }
  }); 

});

});
    
//Função para abertura de popUp para cadastro ou login!

let emailLogin = document.querySelector('#emailLogin'); 
let labelEmailLogin = document.querySelector('#labelEmailLogin'); 

let passwordLogin = document.querySelector('#passwordLogin'); 
let labelSenhaLogin = document.querySelector('#labelSenhaLogin');

let msgErrorLogin = document.querySelector('#msgErrorLogin');
let msgSuccessLogin = document.querySelector('#msgSuccessLogin');


function iniciaLogin(modalID) {
const modalLogin = document.getElementById(modalID);
if(modalLogin) {
  modalLogin.classList.add('mostrar');
  modalLogin.addEventListener('click', (e) => {
if(e.target.id == modalID || e.target.className == 'fechar' ) {
modalLogin.classList.remove('mostrar');
emailLogin.value = '';
passwordLogin.value = '';
msgErrorLogin.setAttribute('style' , 'display: none');
msgSuccessLogin.setAttribute('style', 'display: none' );
}});
}
}

function iniciaCadastro(modalID) {
const modalCadastro = document.getElementById(modalID);
if(modalCadastro) {
  modalCadastro.classList.add('mostrar');
  modalCadastro.addEventListener('click', (e) => {
if(e.target.id == modalID || e.target.className == 'fechar') {
modalCadastro.classList.remove('mostrar');  
nome.value = '';
emailCadastro.value= '';
confEmailCadastro.value = '';
passwordCadastro.value = '';
confPasswordCadastro.value = '';
msgErrorCadastro.setAttribute('style' , 'display: none');
msgSuccessCadastro.setAttribute('style', 'display: none' );
forcaSenhaExcelente.setAttribute('style', 'display: none')
forcaSenhaForte.setAttribute('style', 'display: none')
forcaSenhaMedia.setAttribute('style', 'display: none')
forcaSenhaFraca.setAttribute('style', 'display: none')
}});
}
}

const login = document.querySelector('.btn-primary');
const cadastro = document.querySelector('.btn-third');

login.addEventListener('click', () => iniciaLogin('modal-login'))
cadastro.addEventListener('click', () => iniciaCadastro('modal-cadastro'))

//Função para visualização de senha!

let btnLogin = document.querySelector('#verSenhaLogin')
let inputSenhaLogin = document.querySelector('#passwordLogin')

  btnLogin.addEventListener('click', () =>{
  if(inputSenhaLogin.getAttribute('type') == 'password'){
  inputSenhaLogin.setAttribute('type', 'text');
  inputSenhaLogin.focus()}
  else{
  inputSenhaLogin.setAttribute('type', 'password');
  inputSenhaLogin.focus()}
})

let btnCadastro = document.querySelector('#verSenhaCadastro')
let inputSenhaCadastro = document.querySelector('#passwordCadastro')

  btnCadastro.addEventListener('click', () =>{
  if(inputSenhaCadastro.getAttribute('type') == 'password'){
  inputSenhaCadastro.setAttribute('type', 'text');
  inputSenhaCadastro.focus()}
  else{
  inputSenhaCadastro.setAttribute('type', 'password');
  inputSenhaCadastro.focus()}
  
})

let btnConfCadastro = document.querySelector('#verConfSenhaCadastro')
let inputConfSenhaCadastro = document.querySelector('#confPasswordCadastro')

  btnConfCadastro.addEventListener('click', () =>{
  if(inputConfSenhaCadastro.getAttribute('type') == 'password'){
  inputConfSenhaCadastro.setAttribute('type', 'text');
  inputConfSenhaCadastro.focus();}
  else{
  inputConfSenhaCadastro.setAttribute('type', 'password');
  inputConfSenhaCadastro.focus();}
  
})

//Funções de validações

let nome = document.querySelector('#name'); 
let labelNome = document.querySelector('#labelNome');
let validNome = false;

let passwordCadastro = document.querySelector('#passwordCadastro'); 
let labelSenhaCadastro = document.querySelector('#labelSenhaCadastro'); 
let validSenhaCadastro = false;

let confPasswordCadastro = document.querySelector('#confPasswordCadastro'); 
let labelConfSenhaCadastro = document.querySelector('#labelConfSenhaCadastro'); 
let validConfSenhaCadastro = false;

let emailCadastro = document.querySelector('#emailCadastro'); 
let labelEmailCadastro = document.querySelector('#labelEmailCadastro'); 
let validEmailCadastro = false;

let confEmailCadastro = document.querySelector('#confEmailCadastro'); 
let labelConfEmailCadastro = document.querySelector('#labelConfEmailCadastro'); 
let validConfEmailCadastro = false;

let msgErrorCadastro = document.querySelector('#msgErrorCadastro')
let msgSuccessCadastro = document.querySelector('#msgSuccessCadastro')

// Validações de nome

document.getElementById('name').addEventListener( 'keyup', function() {

this.value = this.value.replace( /[0-9]*/g, '' );

});

  nome.addEventListener('keyup', () => {
  if(nome.value.length < 5){
  labelNome.setAttribute('style', 'color: red')
  nome.setAttribute('style', 'border-color: red') 
  validNome = false;}
  
  else{
  labelNome.setAttribute('style', 'color: green')
  nome.setAttribute('style', 'border-color: green')
  validNome = true;}
})

//validações de senha e confirmação de senha
  
  passwordCadastro.addEventListener('keyup', () => {
  if(passwordCadastro.value.length == 0){
  forcaSenhaFraca.setAttribute('style', 'display: none')
  forcaSenhaFraca.innerHTML = ''
  forcaSenhaMedia.setAttribute('style', 'display: none')
  forcaSenhaForte.setAttribute('style', 'display: none')
  forcaSenhaExcelente.setAttribute('style', 'display: none')
  validSenhaCadastro = false;}
  
  if(passwordCadastro.value.length < 8){
  labelSenhaCadastro.setAttribute('style', 'color: red')
  passwordCadastro.setAttribute('style', 'border-color: red')
  forcaSenhaFraca.innerHTML = "[fraca]";
  forcaSenhaFraca.setAttribute('style', 'display: block')
  forcaSenhaMedia.setAttribute('style', 'display: none')
  forcaSenhaForte.setAttribute('style', 'display: none')
  forcaSenhaExcelente.setAttribute('style', 'display: none')
  validSenhaCadastro = false;}

  if(passwordCadastro.value.length >= 8 && passwordCadastro.value.match(/[a-z]+/)){
  labelSenhaCadastro.setAttribute('style', 'color: green')
  passwordCadastro.setAttribute('style', 'border-color: green')
  forcaSenhaMedia.innerHTML = "[Média]";
  forcaSenhaMedia.setAttribute('style', 'display: block')
  forcaSenhaFraca.setAttribute('style', 'display: none')
  forcaSenhaForte.setAttribute('style', 'display: none')
  forcaSenhaExcelente.setAttribute('style', 'display: none')
  validSenhaCadastro = true;}

  if(passwordCadastro.value.length > 9 && passwordCadastro.value.match(/[a-z]+/) && passwordCadastro.value.match(/[A-Z]+/)){
  labelSenhaCadastro.setAttribute('style', 'color: green')
  passwordCadastro.setAttribute('style', 'border-color: green')
  forcaSenhaForte.innerHTML = "[Forte]";
  forcaSenhaForte.setAttribute('style', 'display: block')
  forcaSenhaFraca.setAttribute('style', 'display: none')
  forcaSenhaMedia.setAttribute('style', 'display: none')
  forcaSenhaExcelente.setAttribute('style', 'display: none')
  validSenhaCadastro = true;}

  if(passwordCadastro.value.length > 10 && passwordCadastro.value.match(/[a-z]+/) && passwordCadastro.value.match(/[A-Z]+/)
   && passwordCadastro.value.match(/[@!#$%&*"';/]/)){
  labelSenhaCadastro.setAttribute('style', 'color: green')
  passwordCadastro.setAttribute('style', 'border-color: green')
  forcaSenhaExcelente.innerHTML = "[Excelente]";
  forcaSenhaExcelente.setAttribute('style', 'display: block')
  forcaSenhaMedia.setAttribute('style', 'display: none')
  forcaSenhaFraca.setAttribute('style', 'display: none')
  forcaSenhaForte.setAttribute('style', 'display: none')
  validSenhaCadastro = true;}

  if(passwordCadastro.value != confPasswordCadastro.value || confPasswordCadastro.value != passwordCadastro.value){
  labelConfSenhaCadastro.setAttribute('style', 'color: red')
  confPasswordCadastro.setAttribute('style', 'border-color: red')}

  else{
  labelConfSenhaCadastro.setAttribute('style', 'color: green')
  confPasswordCadastro.setAttribute('style', 'border-color: green')
  validConfSenhaCadastro = true;}
  
})

  confPasswordCadastro.addEventListener('keyup', () => {
  if(passwordCadastro.value != confPasswordCadastro.value){
  labelConfSenhaCadastro.setAttribute('style', 'color: red')
  confPasswordCadastro.setAttribute('style', 'border-color: red')
  validConfSenhaCadastro = false;}
  else{
  labelConfSenhaCadastro.setAttribute('style', 'color: green')
  confPasswordCadastro.setAttribute('style', 'border-color: green')
  validConfSenhaCadastro = true;}
})

// Validações de email e confirmação de email

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

  emailCadastro.addEventListener('keyup', () => {
  if(validateEmail(emailCadastro.value) == false){ 
  labelEmailCadastro.setAttribute('style', 'color: red')
  emailCadastro.setAttribute('style', 'border-color: red')
  validEmailCadastro = false;}
  else{
  labelEmailCadastro.setAttribute('style', 'color: green')
  emailCadastro.setAttribute('style', 'border-color: green')
  validEmailCadastro = true;}

  if(emailCadastro.value != confEmailCadastro.value || confEmailCadastro.value != emailCadastro.value){ 
  labelConfEmailCadastro.setAttribute('style', 'color: red')
  confEmailCadastro.setAttribute('style', 'border-color: red')
  validConfEmailCadastro = false;}
  else{
  labelConfEmailCadastro.setAttribute('style', 'color: green')
  confEmailCadastro.setAttribute('style', 'border-color: green')
  validConfEmailCadastro = true;}

})

  confEmailCadastro.addEventListener('keyup', () => {
  if(emailCadastro.value != confEmailCadastro.value || confEmailCadastro.value != emailCadastro.value){ 
  labelConfEmailCadastro.setAttribute('style', 'color: red')
  confEmailCadastro.setAttribute('style', 'border-color: red')
  validConfEmailCadastro = false;}
  else{
  labelConfEmailCadastro.setAttribute('style', 'color: green')
  confEmailCadastro.setAttribute('style', 'border-color: green')
  validConfEmailCadastro = true;}
})


//Cadastrando usuário no LocalStorage
  
function cadastrar(){

if(validNome && validSenhaCadastro && validConfEmailCadastro && validConfSenhaCadastro && validEmailCadastro){
let listaUserCadastro = JSON.parse(localStorage.getItem('listaUserCadastro') || '[]')
listaUserCadastro.push(
  {
    nome: nome.value,
    email: emailCadastro.value,
    senha: passwordCadastro.value
  }
)

localStorage.setItem('listaUserCadastro', JSON.stringify(listaUserCadastro))

let emailIgual = JSON.parse(localStorage.getItem('listaUserCadastro'))

 msgSuccessCadastro.setAttribute('style', 'display: block')
 msgSuccessCadastro.innerHTML = 'Cadastrado!'
 msgErrorCadastro.setAttribute('style', 'display: none')
 msgErrorCadastro.innerHTML = ''}
 else{

 msgErrorCadastro.setAttribute('style', 'display: block')
 msgErrorCadastro.innerHTML = 'Preencha os campos corretamente...'
 msgSuccessCadastro.setAttribute('style', 'display: none')
 msgSuccessCadastro.innerHTML = ''
 nome.focus()}
 nome.value = '';
 emailCadastro.value = '';
 confEmailCadastro.value = '';
 passwordCadastro.value = '';
 confPasswordCadastro.value = '';
 forcaSenhaExcelente.setAttribute('style', 'display: none')
 forcaSenhaForte.setAttribute('style', 'display: none')
 forcaSenhaMedia.setAttribute('style', 'display: none')
 forcaSenhaFraca.setAttribute('style', 'display: none')

}

//Validando usuários no LocalStorage

function logar(){
let listaUserLogin = [];
let LoginValid = {
  nome: '',
  emailLogin: '',
  passwordLogin: ''
}

listaUserLogin = JSON.parse(localStorage.getItem('listaUserCadastro'))

listaUserLogin.forEach((item) => {
  if(emailLogin.value == item.email && passwordLogin.value == item.senha){
    LoginValid = {
      nome: item.nome,
      emailLogin: item.email,
      passwordLogin: item.senha
    }
  }
})

if(emailLogin.value == LoginValid.emailLogin && passwordLogin.value == LoginValid.passwordLogin && emailLogin.value != '' && passwordLogin != ''){

 window.location.href = "./indexLogado.html" 

 let token = Math.random().toString(16).substr(2)
 localStorage.setItem('token', token)
 msgSuccessLogin.innerHTML = "Logado com sucesso"
 msgSuccessLogin.setAttribute('style', 'display: block')
 msgErrorLogin.setAttribute('style', 'display: none')
 msgErrorLogin.innerHTML = ''

}
else if(emailLogin.value == '' || passwordLogin.value == '') {
  labelEmailLogin.setAttribute('style', 'color: red')
  emailLogin.setAttribute('style', 'border-color: red')
  passwordLogin.setAttribute('style', 'border-color: red')
  labelSenhaLogin.setAttribute('style', 'color: red')
  msgErrorLogin.setAttribute('style', 'display: block')
  msgSuccessLogin.setAttribute('style', 'display: none')
  msgErrorLogin.innerHTML = 'Preencha todos os campos'
  msgSuccessLogin.innerHTML = ''
  emailLogin.focus()
  emailLogin.value = ''
  passwordLogin.value = ''
}
else{
  labelEmailLogin.setAttribute('style', 'color: red')
  emailLogin.setAttribute('style', 'border-color: red')
  passwordLogin.setAttribute('style', 'border-color: red')
  labelSenhaLogin.setAttribute('style', 'color: red')
  msgErrorLogin.setAttribute('style', 'display: block')
  msgSuccessLogin.setAttribute('style', 'display: none')
  msgErrorLogin.innerHTML = 'E-mail ou Senha Inválido'
  msgSuccessLogin.innerHTML = ''
  emailLogin.focus()
  emailLogin.value = ''
  passwordLogin.value = ''
}
}