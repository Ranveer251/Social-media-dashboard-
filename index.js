var toggleButton = $(".toggle-button");
var cnt = 0;
toggleButton.on("click", function(){
   $(".circle").toggleClass("circleOn");
   toggleButton.toggleClass("D-button-bg");
   cnt++;
   if(cnt%2!==0)
    darkMode();
   else
    lightMode();
});

function darkMode(){
  $("body").toggleClass("bg-image");
  $(".circle").css("backgroundColor", "hsl(232, 19%, 15%)");
  $("body").css("backgroundColor", "hsl(230, 17%, 14%)");
  $("#header").css("backgroundColor", "hsl(232, 19%, 15%)");
  $(".boxes .box").css("backgroundColor", "hsl(228, 28%, 20%)");
  $(".ov-box").css("backgroundColor", "hsl(228, 28%, 20%)");
  $("body").css("color","hsl(228, 34%, 66%)");
  $(".container h1").css("color","hsl(0, 0%, 100%)");
  $(".box span").css("color","hsl(0, 0%, 100%)");
  $(".number").css("color","hsl(0, 0%, 100%)");
}

function lightMode(){
  toggleButton.css("backgroundColor", "hsl(230, 22%, 74%");
  $(".circle").css("backgroundColor", "#fff");
  $("body").css("backgroundColor", "hsl(0, 0%, 100%)");
  $("#header").css("backgroundColor", "hsl(225, 100%, 98%)");
  $(".boxes .box").css("backgroundColor", "hsl(227, 47%, 96%)");
  $(".ov-box").css("backgroundColor", "hsl(227, 47%, 96%)");
  $("body").css("color","hsl(228, 12%, 44%)");
  $(".container h1").css("color","hsl(230, 17%, 14%)");
  $(".box span").css("color","hsl(230, 17%, 14%)");
  $(".number").css("color","hsl(230, 17%, 14%)");
}
