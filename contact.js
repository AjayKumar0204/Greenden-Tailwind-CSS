//Selection Side Navbar, MenuIcon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var close = document.getElementById("closenav")
menuicon.addEventListener("click",function()
{
    sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})