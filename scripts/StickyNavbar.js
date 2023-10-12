
var navBar = document.getElementById("navBar");

var offset = navBar.offsetTop;

function myFunction() 
{
    if (window.scrollY >= offset) 
    {
      navBar.classList.add("sticky")
    } 
    else 
    {
      navBar.classList.remove("sticky");
    }
}

window.addEventListener("scroll", myFunction);
