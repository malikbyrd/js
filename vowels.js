// Ask for a user to write a sentence and display the number of vowels in their response.

//global varibles
var vowel = 0;
var cons = 0;
var characters =0;

var string= "";
var xpos= 100;
var ypos= 250;

function main(){
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");

    //draw rectanlges full canvas
    ctx.canvas.width= window.innerWidth;
    ctx.canvas.height= window.innerHeight;

    ctx.font = "30px Arial";
    ctx.fillText("What's your name?", 30, 200);
    
    ctx.font = "15px Arial";
    ctx.fillText("*click backspace to delete", 30, 170);

//drawRec();
    drawVowels(0);
   drawConsonants(0);
    drawcharacters(0);
    listen();

}
function clearVowelText(){
    // canvas
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");
    

    ctx.beginPath();
    ctx.strokeStyle= "red";
    ctx.fillStyle="white";
    ctx.rect(0, 0, window.innerWidth, 50);
    ctx.fill();
    ctx.stroke();

}
function clearConsonantsText(){
    // canvas
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");
    

    ctx.beginPath();
    ctx.strokeStyle= "blue";
    ctx.fillStyle="white";
    ctx.rect(0, 51, window.innerWidth, 50);
    ctx.fill();
    ctx.stroke();

}
function clearCharactersText(){
    // canvas
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");
    
characters= vowel + cons;
    ctx.beginPath();
    ctx.strokeStyle= "yellow";
    ctx.fillStyle="white";
    ctx.rect(0, 110, window.innerWidth, 40);
    ctx.fill();
    ctx.stroke();

}
function drawVowels(v,char) {

    clearVowelText();
    
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle= "black";
    ctx.fillStyle="black";
    ctx.font = "30px Arial";
    ctx.fillText("Number of vowels: "+ v ,10,30);
   
}

function clearText(){
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");
    

    ctx.beginPath();
    ctx.strokeStyle= "white";
    ctx.fillStyle="white";
    ctx.rect(0, 200, window.innerWidth, window.innerHeight);
    ctx.fill();
    ctx.stroke();

    
}

function drawConsonants(cons,char) {

 clearConsonantsText();
    
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle= "black";
    ctx.fillStyle="black";
    ctx.font = "30px Arial";
    ctx.fillText("Number of consonants: "+  cons ,10,80);
}
function drawcharacters(cons,v,char) {

     clearCharactersText();
    
    
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle= "yellow";
    ctx.fillStyle="black";
    ctx.font = "30px Arial";
    ctx.fillText("Number of characters: "+characters ,10,150);
}




function keydown(){
    var char =window.event.key;
    console.log(char);
    drawtext(xpos,ypos,char,0,0);
    xpos = xpos +20;
    string = string + char;
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");

    
   

    if(char == 'o' || char == 'e' || char == 'i' ||char == 'u' || char == 'a'){
         vowel++;
        characters++;
    drawVowels(vowel);
        drawcharacters(cons,vowel);

    }
    
    else if(char == 'space'){
         xpos = xpos +20;
        cons --;
         drawConsonants(cons);
    }
    else if(char == 'Backspace'){
        clearText()
        xpos= 80;
        cons = 0;
        vowel = 0;
        characters=0;
        drawVowels(0);
        drawConsonants(0); 
        drawcharacters(0);
        
         
    }
    else {
        cons ++;
        characters++;
        drawConsonants(cons);
        drawcharacters(cons,vowel);
    }
    
   if(xpos>= ctx.canvas.width){
       xpos= 80;
       ypos=ypos +30;
       xpos = xpos +20;
   }

    return vowel;


}	      
function listen(){

    document.addEventListener("keydown", keydown, false);
}
function drawtext(x,y,char,vowel,pos){
    var c=document.getElementById("mainCanvas");
    var ctx=c.getContext("2d");

    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";

    ctx.fillText(char, x,y,100,250);


}
