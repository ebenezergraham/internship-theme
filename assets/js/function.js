var id;
var menu = document.getElementsByClassName('side-menu')[0];
document.onclick = function event(event) {
          id = event.target.id;
          menu = document.getElementsByClassName('side-menu')[0];
          if (id === 'side-menu-close') {
                    console.log('we got in');
                    menu.style.display = 'none';
                    document.getElementById('menu-toggle').style.left = '20px';
          }else if (id === 'menu-toggle') {
                    if (menu.style.width === '200px') {
                              console.log('we got in toggle');
                              menu.style.display = 'none';

                    } else {
                              menu.style.display = 'block';
                              document.getElementById(id).style.left = '250px';
                    }
          }
};
$(document).ready(function(){$('#application-div').verticalTimeline({
  animate: "fade"
});
});

$(document).ready(function(){
$('.owl-carousel').owlCarousel();
});
$(document).ready(function(){
$(function() {
  $("#typed").typed({
    strings: ["Hi There!", "Welcome to Ebenezer Graham's Website", "I intern with Cim Finance", "This has been an enlightening experience"],
    typeSpeed: 100,
    loop: true,
    loopCount: Infinity
  });
});
})

$(document).ready(function(){
$('.carousel').carousel();
});
