var bgImg;
var canvas;
var cat, catImg1,catImg2,catImg3;
var mouse, mouseImg1,mouseImg2,mouseImg3;

function preload() {
    //precargar imagenes con la ruta de ubicación del archivo  con la siguiente sintaxis
    //bgImg = loadImage("images/garden.png");
    //catImg1= loadAnimation("images/tomOne.png");
   

}

function setup(){
    canvas = createCanvas(1000,800);
    //crea a quí los sprites deL cat(GATO) AÑADE IMAGEN y escala
    

  
    //crea a quí los sprites deL mouse (raton) AÑADE IMAGEN y escala
    

}

function draw() {

    background(bgImg);
//condicional 
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        
    }  

    drawSprites();
}

//funcion
function keyPressed(){

    if(keyCode === LEFT_ARROW){
        
    }
}