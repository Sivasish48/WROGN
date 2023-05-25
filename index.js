const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const close=document.getElementById('close');


if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',() => {
     nav.classList.remove('active');
    })
}

/* single product page onclick functioning*/

let Mainimg = document.getElementById("Mainimg");
      let smallimg = document.getElementsByClassName("small-img");

      smallimg[0].onclick = function(){
        Mainimg.src = smallimg[0].src;
      }
      smallimg[1].onclick = function(){
        Mainimg.src = smallimg[1].src;
      }
      smallimg[2].onclick = function(){
        Mainimg.src = smallimg[2].src;
      }
      smallimg[3].onclick = function(){
        Mainimg.src = smallimg[03].src;
      }