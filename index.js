//SELECTING sidenav
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menu")
menuicon.addEventListener("click",function()
{
    sidenav.style.right=0
})
var closeicon = document.getElementById("close")
closeicon.addEventListener("click", function () 
{
    sidenav.style.right="-50%"
})

//slider

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}