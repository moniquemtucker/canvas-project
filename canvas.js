
// create opening sign
var welcome = document.getElementById("welcomeCanvas");
var ctx = welcome.getContext("2d");
ctx.font = "70px Lato";
ctx.textAlign = "center"; 
ctx.fillText("Welcome to Portland!",welcome.width/2, welcome.height/2);

// Create 2D circle 
var c = document.getElementById("ballCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"green");
grd.addColorStop(1,"white");

// Fill with gradient
ctx.arc(50, 50, 20, 0, 2*Math.PI);
ctx.fillStyle = grd;
ctx.fill();

function hideImage() {
	document.getElementById("oregon").style.display = "none";
}


// draw map of Oregon
function portlandCanvas() {
	document.getElementById("welcomeContainer").style.display = "none";
    var c = document.getElementById("portlandCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("oregon");
    ctx.drawImage(img,10,10);
}

