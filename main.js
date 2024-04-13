const togglemenu=document.getElementById('toggle-menu');
const navmenu=document.getElementById('nav-menu');
const closemenu=document.getElementById('close-menu');

if(togglemenu)
{
    togglemenu.addEventListener('click',()=>{
        navmenu.classList.add('show_menu');
    })  
}

if(closemenu){
    closemenu.addEventListener('click',()=>{
        navmenu.classList.remove('show_menu');
    })
}

const link1=document.getElementById('link-1');
const link2=document.getElementById('link-2');
const link3=document.getElementById('link-3');
const link4=document.getElementById('link-4');
const link5=document.getElementById('link-5');

if(link1){
    link1.addEventListener('click',()=>{
        navmenu.classList.remove('show_menu');
    })
}
if(link2){
    link2.addEventListener('click',()=>{
        navmenu.classList.remove('show_menu');
    })
}
if(link3){
    link3.addEventListener('click',()=>{
        navmenu.classList.remove('show_menu');
    })
}
if(link4){
    link4.addEventListener('click',()=>{
        navmenu.classList.remove('show_menu');
    })
}
if(link5){
    link5.addEventListener('click',()=>{
        navmenu.classList.remove('show_menu');
    })
}




  const section2swiper=new Swiper(".section2_swiper",{
    loop:true,
    slidesPerView: "auto",
    centeredSlides: "auto",
    grabCursor: true,

    breakpoints:{

        655:{
            slidesPerView:2,
        },

        976:{
            slidesPerView:3,
        },
    },   
  });
