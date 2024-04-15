const togglemenu = document.getElementById("toggle-menu");
const navmenu = document.getElementById("nav-menu");
const closemenu = document.getElementById("close-menu");

if (togglemenu) {
  togglemenu.addEventListener("click", () => {
    navmenu.classList.add("show_menu");
  });
}

if (closemenu) {
  closemenu.addEventListener("click", () => {
    navmenu.classList.remove("show_menu");
  });
}

const link1 = document.getElementById("link-1");
const link2 = document.getElementById("link-2");
const link3 = document.getElementById("link-3");
const link4 = document.getElementById("link-4");
const link5 = document.getElementById("link-5");

if (link1) {
  link1.addEventListener("click", () => {
    navmenu.classList.remove("show_menu");
  });
}
if (link2) {
  link2.addEventListener("click", () => {
    navmenu.classList.remove("show_menu");
  });
}
if (link3) {
  link3.addEventListener("click", () => {
    navmenu.classList.remove("show_menu");
  });
}
if (link4) {
  link4.addEventListener("click", () => {
    navmenu.classList.remove("show_menu");
  });
}
if (link5) {
  link5.addEventListener("click", () => {
    navmenu.classList.remove("show_menu");
  });
}

// let count = parseInt(document.getElementById("count").innerHTML);
const carts = document.querySelectorAll(".cart");
// window.onload(()=>{
//   localStorage.setItem('cartItems', 0);
// })
carts.forEach((cart) => {
  cart.addEventListener("click", () => {
    
    if(cart.innerHTML == '<pre>Add To Cart  <i class="ri-shopping-cart-fill"></i></pre>'){
        cart.innerHTML = '<pre>Delete from Cart  <i class="ri-shopping-cart-fill"></i></pre>';
        let prevCount = localStorage.getItem('cartItems');
        if(prevCount == null) prevCount = 0;
        localStorage.setItem('cartItems', ++prevCount);
    }
    else{
        cart.innerHTML = '<pre>Add To Cart  <i class="ri-shopping-cart-fill"></i></pre>'
        prevCount = localStorage.getItem('cartItems');
        if(prevCount == null) prevCount = 0;
        localStorage.setItem('cartItems', --prevCount);
    }
    document.getElementById("count").innerHTML = localStorage.getItem('cartItems');
  });
});

document.getElementById('count').innerHTML = localStorage.getItem('cartItems')==null?0:localStorage.getItem('cartItems');


//login

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
      event.preventDefault(); 

      
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

    
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
      if (!emailRegex.test(username)) {
          alert("Please enter a valid email address as the username.");
          return;
      }

    
      if (password.length < 6 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
          alert("Password must be at least 6 characters long and contain both letters and numbers.");
          return;
      }

      
      window.location.href = 'index.html';
      
  });
});






