// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$(document).ready(function () {

  window.onscroll = function() {stickyNavbar()};

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function stickyNavbar() {
    if (window.scrollY >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

});