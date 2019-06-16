//Tooltip bootstrap
$(function () {$('[data-toggle="tooltip"]').tooltip()})
//Diminuindo cabeçalho
$(function(){
  var body=document.body,html=document.documentElement,menu=document.querySelector('.cabecalho'),menuPosition;window.addEventListener('scroll',function(){
    menuPosition=menu.offsetTop+120;
    if(body.scrollTop > menuPosition || html.scrollTop > menuPosition){
        menu.classList.add('ativo');
    }else{
        menu.classList.remove('ativo');
  }
//      console.log(menu.offsetTop);
});
});
//Deslizamento
jQuery(document).ready(function($) {
  $(".scroll").click(function(event){
      event.preventDefault();
   $('html,body').animate({
      scrollTop:$(this.hash).offset().top}, 1000);
  });
 });