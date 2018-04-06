/*
Created: 11.08.2017.
It was imagined as a simple portfolio template divided into four sections: introduction, about, interests and contact. However, I haven't added my personal details and used my favourite Latin quotes instead to practice the usage of buttons and js function calling. 
Edit 1: jQuery to activate buttons
Edit 2: Smooth scrolling added
Edit 3: Buttons fade in
Edit 4: Buttons disappear on click
*/


$(function(){
    $(".menu-button").click(function(){
        $(this).toggleClass("activate active");
    });
     $(".items").click(function(){
        $(".items").fadeToggle(400, function(){
            $(".menu-button").removeClass("activate active");
        });
     });
    $(".translate").click(function(){
        $(this).next().toggleClass("show");
        
    });
});

//smooth scrolling

$(document).on('click', '.new', function(event){
    event.preventDefault();
   $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
  });
 
//buttons fade in

$(function() {
    $(".menu-button").click(function() {
        $(".items").fadeToggle(800);
    });
});

