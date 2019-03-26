var xpos= 0;
var ypos= 200;
var odd= 0;
var even= 0;
var number="";
var string= "";

function main(){
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");

    //draw rectanlges full canvas
    ctx.canvas.width= window.innerWidth;
    ctx.canvas.height= window.innerHeight;

    ctx.font = "30px Arial";
    ctx.fillText("Type a number:", 0, 30);

   
    listen();
    drawOdd()
    drawEven();

}
function keydown(){
    var character =window.event.key;
    
    number = character.charCodeAt(0);
    
    if (number < 48 || number > 57||number == 175) return;
    number = number - 48;
    
    console.log("number");
    drawtext(xpos,ypos,number,0,0);
    xpos = xpos +20;

    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");
    

    if (number == '2' ||number == '4' || number == '6' ||number == '8') {
        // even
        even++;
        drawEven(even)
    }

    if (number == '1' ||number == '3' || number == '5' ||number == '7' ||number == '9'){
        // odd
        odd++;
        drawOdd(odd)
    }	
    else if(number == 'Backspace'){
        clearText()
        xpos= 100;
        odd = 0;
       even = 0;
        
    
}
}
function drawtext(x,y,number, odd, even,pos){
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");

    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.font = "30px Arial";

    ctx.fillText(number, x,y,100,300);
}
function listen(){

    document.addEventListener("keydown", keydown, false);
}


function clearodd(){
     var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");
    

    ctx.beginPath();
    ctx.strokeStyle= "blue";
    ctx.fillStyle="white";
    ctx.rect(0, 51, window.innerWidth, 50);
    ctx.fill();
    ctx.stroke();

}
function drawOdd(){
    clearodd();
     var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle= "red";
    ctx.fillStyle="black";
    ctx.font = "30px Arial";
    ctx.fillText("Number of odds: "+  odd ,10,80);
    
}

function clearText(){
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");
    

    ctx.beginPath();
    ctx.strokeStyle= "white";
    ctx.fillStyle="white";
    ctx.rect(0, 10, window.innerWidth, window.innerHeight);
    ctx.fill();
    ctx.stroke();

    
}

function drawEven(){
    clearEven();
     var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle= "red";
    ctx.fillStyle="black";
    ctx.font = "30px Arial";
    ctx.fillText("Number of even: "+  even ,10,140);
}
function clearEven(){
     var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");
    

    ctx.beginPath();
    ctx.strokeStyle= "red";
    ctx.fillStyle="white";
    ctx.rect(0, 100, window.innerWidth, 50);
    ctx.fill();
    ctx.stroke();
}







