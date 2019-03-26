var numbers = [];
var i;
var mini=[]

function main(){
    //canvas
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");

    //draw rectanlges full canvas
    ctx.canvas.width= window.innerWidth;
    ctx.canvas.height= window.innerHeight;
    ctx.font = "30px Arial";
    ctx.fillText("Numbers:", 0, 30);

    rnglist(10,1,500);
    drawtext(numbers,100,100);
    drawMini(numbers);
    drawMax(numbers);
    drawSum(numbers);
    drawMean(numbers);

    }

//list
function rnglist(count, mini, max){
    var range = max - mini;
    // randomly select numbers
    for (i =0; i < count; i++){
        numbers.push(Math.floor(Math.random()*range + mini));
    }
    return numbers;
}

//draw numbers
function drawtext(numbers,x,y){
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");

    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.font = "30px Arial";

    ctx.fillText(numbers, 0,100);
}

//min number
function drawMini(numbers){
    clearMini();
    
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle= "red";
    ctx.fillStyle="black";
    ctx.font = "30px Arial";
    
    if (numbers.length == 0){
        return -1;
    }
    var x= numbers[0];
    for (i = 0; i < numbers.length; i++){
        if(numbers[i]<x) {
            x= numbers[i];
        }
    }
    ctx.fillText("Min: "+ x ,0,150);
    return x;
    
    
}
function clearMini(){
       var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");
    

    ctx.beginPath();
    ctx.strokeStyle= "blue";
    ctx.fillStyle="white";
    ctx.rect(0, 120, window.innerWidth, 50);
    ctx.fill();
    ctx.stroke();
}

//max number
function drawMax(numbers){
    clearMax();
    
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle= "red";
    ctx.fillStyle="black";
    ctx.font = "30px Arial";
    
    if (numbers.length == 0){
        return -1;
    }
    var x= numbers[0];
    for (i = 0; i < numbers.length; i++){
        if(numbers[i]>x) {
            x= numbers[i];
        }
    }
    ctx.fillText("Max: "+ x ,0,200);
    return x;
    
    
}
function clearMax(){
       var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");
    

    ctx.beginPath();
    ctx.strokeStyle= "blue";
    ctx.fillStyle="white";
    ctx.rect(0, 170, window.innerWidth, 50);
    ctx.fill();
    ctx.stroke();
}

//add number
function drawSum(numbers){
    clearSum();
    
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle= "red";
    ctx.fillStyle="black";
    ctx.font = "30px Arial";
    
var x=0;
    
    
        for (i = 0; i < numbers.length; i++){
            x= x+ numbers[i];
        }
    ctx.fillText("Sum: "+  x,0,250);
    
    
}

function clearSum(){
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");
    

    ctx.beginPath();
    ctx.strokeStyle= "blue";
    ctx.fillStyle="white";
    ctx.rect(0, 220, window.innerWidth, 50);
    ctx.fill();
    ctx.stroke();
    
    var x = 0;
    

}


//add number
function drawMean(numbers){
    clearMean();
    
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle= "red";
    ctx.fillStyle="black";
    ctx.font = "30px Arial";
    var x=0;
    
    
        for (i = 0; i < numbers.length; i++){
            x= x+ numbers[i]/10;
        }
    
    
    ctx.fillText("Mean: "+ x,0,300);
   
    
}
function clearMean(){
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");
    

    ctx.beginPath();
    ctx.strokeStyle= "blue";
    ctx.fillStyle="white";
    ctx.rect(0, 270, window.innerWidth, 50);
    ctx.fill();
    ctx.stroke();
}



