/* $(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
}); */

// disable developer mode
document.onkeydown = function(e) {
  if(e.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}

// Handle autoclose and open of navbar
document.addEventListener("DOMContentLoaded", function () {
   const researchDropdown = document.getElementById("researchDropdown");
   const dropdownContent = researchDropdown.querySelector(".dropdown-content");

   // Initially set the dropdown content to "none"
   dropdownContent.style.display = "none";

   researchDropdown.addEventListener("click", function () {
       dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
   });

   // Close the dropdown when clicking outside of it
   window.addEventListener("click", function (event) {
       if (!researchDropdown.contains(event.target)) {
           dropdownContent.style.display = "none";
       }
   });
});


$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

       // scroll spy
       $('section').each(function () {
           let height = $(this).height();
           let offset = $(this).offset().top - 200;
           let top = $(window).scrollTop();
           let id = $(this).attr('id');

           if (top > offset && top < offset + height) {
               $('.navbar ul li a').removeClass('active');
               $('.navbar').find(`[href="#${id}"]`).addClass('active');
           }
       });
   });

   // smooth scrolling
   $('a[href*="#"]').on('click', function (e) {
       e.preventDefault();
       $('html, body').animate({
           scrollTop: $($(this).attr('href')).offset().top,
       }, 500, 'linear')
   });
});

 window.addEventListener('DOMContentLoaded', (event) => {
    const msg = document.querySelector('.msg');
    msg.style.opacity = 1; // Make it visible
    msg.style.transform = 'translateY(0)'; // Slide in from the top
  });
