$(function() {
  $love = $('.heart');
  for( var i = 0; i < 4; i++) {
    $('.wrapper').append($love.clone()); 
  }
});

const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});