$(function () {$('[data-toggle="tooltip"]').tooltip()})


$(function(){
    var body=document.body,
html=document.documentElement,
menu=document.querySelector('.cabecalho'),
menuPosition;
window.addEventListener('scroll',function(){
  menuPosition=menu.offsetTop+120;
  if(body.scrollTop > menuPosition || html.scrollTop > menuPosition){
    menu.classList.add('ativo');
  }else{
    menu.classList.remove('ativo');
  }
//      console.log(menu.offsetTop);
});

});