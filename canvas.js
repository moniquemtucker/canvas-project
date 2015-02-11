
// create opening welcoming sign using canvas
var welcome = document.getElementById("welcomeCanvas");
var welctx = welcome.getContext("2d");
welctx.font = "70px Lato";
welctx.textAlign = "center"; 
welctx.fillText("Welcome to Portland!", welcome.width/2, welcome.height/2);

// on page load, hide Oregon state image
function hidePortland() {
	document.getElementById("portlandContainer").style.display = "none";
}

// initial position of green balls
var context;
var x=100;
var y=200;
var dx=5;
var dy=8;

// hide welcoming sign and initialize "Portland experience"
function init()
{
  document.getElementById("welcomeContainer").style.display = "none";
  document.getElementById("portlandContainer").style.display = "block";
  context= portlandCanvas.getContext('2d');

// create a stop point for balls bouncing (source: CodeShip)
function interval(func, wait, times){
    var interv = function(w, t){
        return function(){
            if(typeof t === "undefined" || t-- > 0){
                setTimeout(interv, w);
                try{
                    func.call(null);
                }
                catch(e){
                    t = 0;
                    throw e.toString();
                }
            }
        };
    }(wait, times);

    setTimeout(interv, wait);
};

// draw bouncing balls and then use stop function
interval(draw,10, 200);

// set delay to clear canvas and draw heart image
setTimeout(function(){
  	context.clearRect(0,0, 800,800);
  	document.getElementById("heartContainer").innerHTML="<img src='heart.png' width=200 height=200 />";
  	}, 5000);
}


// create bouncing balls onto canvas
function draw()
{	
  context.clearRect(0,0, 800,800);
  function ball()
  {
    context.beginPath();
    // create gradient
    var grd = context.createRadialGradient(x,y,20,x+dx,y+dy,100);
    grd.addColorStop(0,"green");
    grd.addColorStop(1,"white");

    // draws a circle of radius 20 at the coordinates x,y on the canvas
    context.arc(x,y,20,0,Math.PI*2,true);

    // fill balls with gradient
    context.fillStyle = grd;
    context.fill();
    // boundary logic to determine direction of bouncing
    if( x<0 || x>300) dx = -dx; 
    if( y<0 || y>300) dy = -dy; 
    x += dx; 
    y += dy;

  }
    ball();

    // draws additional bouncing balls (TO DO: refactor to incorporate DRY principles)
   function ball2(start, stop, horiz, vert)
  {
    context.beginPath();
    // create gradient
    var grd = context.createRadialGradient(start,stop,20,start+horiz,stop+vert,100);
    grd.addColorStop(0,"green");
    grd.addColorStop(1,"white");

    // draws a circle of radius 20 at the coordinates start,stop on the canvas
    context.arc(start,stop,20,0,Math.PI*2,true);

    // fill balls with gradient
    context.fillStyle = grd;
    context.fill();
    // boundary logic to determine direction of bouncing
    if( start<0 || start>300) 
      horiz = -horiz; 
    if( stop<0 || stop>300) 
      vert = -vert; 
    start += horiz; 
    stop += vert;
  }
  // runs ball() to create additional bouncing balls
  for (i = 0; i < 4; i++) {
    ball2(x+100*i, y+30*i, 5, 5);
  }  
  ball2(x+200, y, 5,5);
}

