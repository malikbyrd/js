var offsetX = 1;
var speed= 5;
var car_y= 250;
var gravity= .1;
var Vy=0;
var ground = 750;
var car_x=50;
var x1=2000;
var x2=3000;
var x3=4000;
var x4=5000;
var x5=6000;
var x6=7000;
var points= 0;


function main(){
    //canvas
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");
    document.body.style.backgroundImage ="url('https://pngimage.net/wp-content/uploads/2018/06/flappy-bird-background-png-5.png')";

    //draw rectanlges full canvas
    ctx.canvas.width= window.innerWidth;// set width of screen
    ctx.canvas.height= window.innerHeight;// set Height of screen

    var myVar= setInterval(update,10);//update screen one tenth of a second
    document.onkeypress= keypress;
    clearScreen();
}


function drawcar(){
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");
    ctx.beginPath();
    img= new Image();
    img.src= "bird.png";
    ctx.drawImage(img,car_x,car_y,150,150);

}

function drawPoints(){
    var myVar= setInterval(.0001)
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");
    ctx.strokeStyle = "red";
    ctx.fillStyle = "black";
    ctx.font = "30px impact";
    ctx.fillText("POINTS:"+ myVar, 0,50,250,250);
    ctx.fill();
    ctx.stroke();

   



}
// clears window
function clearScreen(){   
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);// draw a rectangle along whole canvas
}

function drawPipe(){
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");

    ctx.beginPath();
    img= new Image();
    img.src= "download.png";
    ctx.drawImage(img,x1+offsetX,700, 100,700);


    img= new Image();
    img.src= "download copy.png";
    ctx.drawImage(img,x1+offsetX,-300, 100,700);

}

function drawPipe2(){
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");

    ctx.beginPath();
    img= new Image();
    img.src= "download.png";
    ctx.drawImage(img,x2+offsetX,500, 100,700);

    img= new Image();
    img.src= "download copy.png";
    ctx.drawImage(img,x2+offsetX,-500, 100,700);
}

function drawPipe3(){
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");

    ctx.beginPath();
    img= new Image();
    img.src= "download.png";
    ctx.drawImage(img,x3+offsetX,500, 100,700);

    img= new Image();
    img.src= "download copy.png";
    ctx.drawImage(img,x3+offsetX,-500, 100,700);
}

function drawPipe4(){
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");

    ctx.beginPath();
    img= new Image();
    img.src= "download.png";
    ctx.drawImage(img,x4+offsetX,500, 100,700);
    img= new Image();
    img.src= "download copy.png";
    ctx.drawImage(img,x4+offsetX,-500, 100,700);
}
function drawPipe5(){
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");

    ctx.beginPath();
    img= new Image();
    img.src= "download.png";
    ctx.drawImage(img,x5+offsetX,500, 100,700);
    img= new Image();
    img.src= "download copy.png";
    ctx.drawImage(img,x5+offsetX,-500, 100,700);
}
function drawPipe6(){
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");

    ctx.beginPath();
    img= new Image();
    img.src= "download.png";
    ctx.drawImage(img,x6+offsetX,500, 100,700);
    img= new Image();
    img.src= "download copy.png";
    ctx.drawImage(img,x6+offsetX,-500, 100,700);
}


function crash(){
    if(x1 +offsetX==car_x ){
        car_y= 250;
    }
    return;

}
function keypress(k){
    console.log(k.key);

    switch (k.key){
        case'w':
            Vy = -5;
            speed= speed+ 1;
            break;   
    }

}

function update(){
    clearScreen();
    drawcar();
    drawPipe();
    drawPipe2();
    drawPipe3();
    drawPipe4();
    drawPipe5();
    drawPipe6();
    drawPoints();
    crash();
    keep();
    scroll();


}

function scroll(){
    offsetX --;
    offsetX-= speed;
}

function keep(){
    var canvas = document.getElementById("mainCanvas");
    var height = canvas.height;
    var ctx= canvas.getContext("2d");
    if (car_y > height){//if ball goes to end of screen change velocity
        Vy= -Vy;
    }

    if (car_y<0){//if ball goes to end of screen change velocity
        Vy= -Vy;

    }

    Vy +=gravity;
    car_y+=Vy;

    if(car_y>=ground){
        car_y= ground
        Vy=0
    }

}

/*
400 px in between pipes

*/