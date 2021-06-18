function initMap(){
    const mapaInicial = {lat: -22.76926520019462, lng: -47.10547175436898}
    // Map options
    var options = {
      zoom:11,
      center: mapaInicial, 
      disableDefaultUI : true, // desabilitar controles
      //remover todos os pontos de interesse
        styles:[{
    "featureType": "poi",
    "stylers": [{
      "visibility": "off"
    }]
  }]
    }

    // New map
    
    var map = new google.maps.Map(document.getElementById('map'), options);    
var markers = [
{
id:1,
coords:{lat: -22.92100424428484, lng: -47.06657208265851},
iconImage:'https://i.imgur.com/02e5Fz8.png',
content: '<h1>Lourenço Testa</h1>' +
     '<h1>Mãe:MARCIA DA CRUZ</h1>' +
     '<h1>Sexo:Masculino</h1>' +
     '<h1>Idade:19 anos</h1>' +
     '<h1>Data Nascimento:20/06/2002</h1>'+
     '<h1>Data Desaparecimento:01/09/2019</h1>'+
     '<h1>Natural de:CAMPINAS -SP</h1>'+
     '<h1>Altura:168</h1>'+
     '<h1>Olhos:CAST.ESCURO</h1>'+
     '<h1>Pele:BRANCA</h1>'+
     '<h1>Cabelo:CAST.CLARO </h1>'

},
{
id:2,
coords:{lat: -22.72018305963991, lng: -47.17336480414067},
iconImage:'https://i.imgur.com/02e5Fz8.png',
content: '<h1>Guilherme de Oliveira</h1>'+
     '<h1>Mãe:Maria Vitalina Dos Santos</h1>'+
     '<h1>Sexo:Masculino</h1>'+
     '<h1>Idade:24 anos</h1>'+
     '<h1>Data Nascimento:25/06/1994</h1>'+
     '<h1>Data Desaparecimento:05/03/2018</h1>'+
     '<h1>Natural de:CAMPINAS-SP</h1>'+
     '<h1>Altura:170</h1>'+
     '<h1>Olhos:CAST.ESCURO</h1>'+
     '<h1>Pele:BRANCA</h1>'+
     '<h1>Cabelo:CAST.CLARO</h1>'
},
{
id:3,
coords:{lat: -22.884629006539484, lng: -47.19604291427772},  
iconImage:'https://i.imgur.com/02e5Fz8.png',
content:' <h1>Carlos Augusto</h1>'+
     '<h1>Pai:SILAS SOUZA RIBEIRO</h1>'+
     '<h1>Mãe:MARIA ELINEIDE DA SILVA</h1>'+
     '<h1>Sexo:Masculino</h1>'+
     '<h1>Idade:23 anos</h1>'+
     '<h1>Data Nascimento:08/04/1991</h1>'+
     '<h1>Data Desaparecimento:05/06/2014</h1>'+
     '<h1>Natural de:CAMPINAS-SP</h1>'+
     '<h1>Altura:170</h1>'+
     '<h1>Olhos:CAST.ESCURO</h1>'+
     '<h1>Pele:BRANCA</h1>'+
     '<h1>Cabelo:CAST.CLARO</h1>'
},
{
id:4,
coords:{lat: -22.892827722134097, lng: -47.015219547940745},
iconImage:'https://i.imgur.com/02e5Fz8.png',
content:' <h1>Yuri Fernando</h1>'+
     '<h1>Pai:LUCIANO MAURICIO DOS SANTOS</h1>'+
     '<h1>Mãe:LUANA MARTINS DE SOUZA</h1>'+
     '<h1>Sexo:Masculino</h1>'+
     '<h1>Idade:24 anos</h1>'+
     '<h1>Data Nascimento:31/03/1995</h1>'+
     '<h1>Data Desaparecimento:21/10/2019</h1>'+
     '<h1>Natural de:CAMPINAS -SP</h1>'+
     '<h1>Altura:170</h1>'+
     '<h1>Olhos:CAST.ESCURO</h1>'+
     '<h1>Pele:BRANCA</h1>'+
     '<h1>Cabelo:CAST.ESCURO</h1>'
},  
];

// Loop through markers
for(var i = 0;i < markers.length;i++){
// Add marker
addMarker(markers[i]);
}

// Add Marker Function
function addMarker(props){
var marker = new google.maps.Marker({
position:props.coords,
map:map,
clickable: true,
//icon:props.iconImage
});

// Check for customicon
if(props.iconImage){
// Set icon image
marker.setIcon(props.iconImage);
}

// Check content
if(props.content){
var infoWindow = new google.maps.InfoWindow({
content:props.content
});  
marker.addListener('click', function(){
infoWindow.open(map, marker);          
});

marker.addListener('dblclick', function(){
if(props.id == 1)
 {
   infoWindow.close(); //evento Lourenço
   const ceps = document.querySelectorAll(".cep h1");        
       ceps[0].textContent ="R. Pedro Domingos Vitali";
       ceps[1].textContent ="PQ Italia, Campinas-SP";
       ceps[2].textContent = "13036-180";        
   const video = document.querySelector(".conteudo")
   video.querySelector("iframe").src = "https://player.vimeo.com/video/543093139?autoplay=1&loop=1"       
   video.style = "display: table-cell !important"
   const imagem = document.querySelector(".conteudo")
   imagem.querySelector("img").src= "https://i.imgur.com/IoVLYnQ.jpg"
 }
            
else if(props.id == 2)
{

infoWindow.close();// evento Guilherme
const ceps = document.querySelectorAll(".cep h1");   
    ceps[0].textContent ="R. Santina Verguetti Vansan";
    ceps[1].textContent ="SJ, Paulínia-SP";
    ceps[2].textContent ="13140-000";
const video = document.querySelector(".conteudo");             
video.querySelector("iframe").src = "https://player.vimeo.com/video/543093863?autoplay=1&loop=1"        
video.style = "display: table-cell !important"
const imagem = document.querySelector(".conteudo")
imagem.querySelector("img").src= "https://i.imgur.com/Cbw5wg0.jpg"               
}
else if(props.id == 3)
{
infoWindow.close(); // evento Carlos
const ceps = document.querySelectorAll(".cep h1");      
ceps[0].textContent ="R. Osvaldo Ribeiro Carrilho";
ceps[1].textContent ="Jd. Mirante, Hortolândia-SP";
ceps[2].textContent = "13186-214";              
const video = document.querySelector(".conteudo")
video.querySelector("iframe").src = "https://player.vimeo.com/video/543093249?autoplay=1&loop=1"          
video.style = "display: table-cell !important"
const imagem = document.querySelector(".conteudo")
imagem.querySelector("img").src= "https://i.imgur.com/Lgzz4sE.jpg"
}
else
{
infoWindow.close(); // evento Yuri
const ceps = document.querySelectorAll(".cep h1");                 
ceps[0].textContent ="R.Ramiro dos Santos";
ceps[1].textContent ="BR. das Palmeiras,Campinas-SP";
ceps[2].textContent ="13092-562";                 
const video = document.querySelector(".conteudo")
video.querySelector("iframe").src = "https://player.vimeo.com/video/543093332?autoplay=1&loop=1"          
video.style = "display: table-cell !important"
const imagem = document.querySelector(".conteudo")
imagem.querySelector("img").src= "https://i.imgur.com/EkEYysc.jpg"              
}
});
  }
  }
  }

if(localStorage.getItem('token') == null){
alert("Necessário estar logado!");
window.location.href = "./index.html"
}

//Não permitir inspecionar elemento

window.addEventListener("keydown", ev => {
switch( true ) {
/* Previne F12 */
case ev.keyCode === 123:

/* Previne Ctrl + Shift +  */
case ev.ctrlKey && ev.shiftKey && event.keyCode == 74:

/* Previne Ctrl + U */
case ev.ctrlKey && ev.keyCode == 85:
  console.log("Tecla bloqueada");
  ev.preventDefault();
  return false;
}
})

/* Previne clique direito do mouse */
window.addEventListener("contextmenu", ev => {
ev.preventDefault();
return false;
});
