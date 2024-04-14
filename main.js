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

let count = parseInt(document.getElementById("count").innerHTML);
const carts = document.querySelectorAll(".cart");
carts.forEach((cart) => {
  cart.addEventListener("click", () => {
    
    if(cart.innerHTML == '<pre>Add To Cart  <i class="ri-shopping-cart-fill"></i></pre>'){
        cart.innerHTML = '<pre>Delete from Cart  <i class="ri-shopping-cart-fill"></i></pre>';
        count++;
    }
    else{
        cart.innerHTML = '<pre>Add To Cart  <i class="ri-shopping-cart-fill"></i></pre>'
        count--;
    }
    document.getElementById("count").innerHTML = count;
  });
});



// chatbot

//login

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      // Get input values
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Regular expression for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Check if username is in email format
      if (!emailRegex.test(username)) {
          alert("Please enter a valid email address as the username.");
          return;
      }

      // Check if password meets length and character/number requirements
      if (password.length < 6 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
          alert("Password must be at least 6 characters long and contain both letters and numbers.");
          return;
      }

      // If both username and password pass validation, you can proceed with form submission
      // Alternatively, you can perform any other actions here, like AJAX requests to the server

      // For demonstration purposes, alert a success message
      alert("Login successful!");
      // You can uncomment the following line to submit the form programmatically
      // form.submit();
  });
});






