
//function for hover on links inside the header
function hover(link) {
    link.style.color= "yellow";
}
function hover_out(link) {
    link.style.color = "inherit"
}

//function for focus on search input
function howdy(search) {
    search.style.backgroundColor = "yellow";
}
function howdy_out(search) {
    search.style.backgroundColor = "white";
}

//function for sticky header panel
function scroll() {
    var sticky = document.getElementById("sticky");
    sticky.style.position = "sticky";
    sticky.style.top = "0";
}
window.addEventListener("load", scroll);

//function to hide the header links onresize
var g = 800;
function remove() {
    if( window.outerWidth < g) {
        var hide = document.getElementById("hide");
        hide.style.display = "none";
    }
}
window.onload = remove;

//function for five star review
var output = " ";
for (i = 0; i < 5; i++) {
    output += "<i class='fas fa-star'></i>"
} 
document.getElementById("rating0").innerHTML = output;
document.getElementById("rating1").innerHTML = output;
document.getElementById("rating3").innerHTML = output;
document.getElementById("rating4").innerHTML = output;
document.getElementById("rating5").innerHTML = output;
document.getElementById("rating6").innerHTML = output;
document.getElementById("rating8").innerHTML = output;
document.getElementById("rating11").innerHTML = output;
document.getElementById("rating13").innerHTML = output;
document.getElementById("rating14").innerHTML = output;
document.getElementById("rating15").innerHTML = output;
document.getElementById("rating17").innerHTML = output;

//function for 4 star review
var output = " ";
for (i = 0; i < 4; i++) {
    output += "<i class='fas fa-star'></i>"
} 
document.getElementById("rating2").innerHTML = output;
document.getElementById("rating7").innerHTML = output;
document.getElementById("rating9").innerHTML = output;
document.getElementById("rating10").innerHTML = output;
document.getElementById("rating12").innerHTML = output;
document.getElementById("rating16").innerHTML = output;


//changing the color of the bottom logistics bootstrap container
document.getElementById('bottom').style.backgroundColor = '#D2D2D2';
document.getElementById('btsignin').style.color = '#DA0037';