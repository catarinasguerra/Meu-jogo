var cestaImg, fundoImg, lanranjaImg, melanciaImg, morangoImg, pessegoImg, peraImg; 
var cesta, fundo, lanranja, melancia, morango, pessego, pera;

function preLoad(){
    cestaImg=loadImage("cesta.png")
    fundoImg= loadImage("fundo.png")
   lanranja= loadImage("lanranja.png")
   melanciaImg= loadImage("melancia.png")
   morangoImg= loadImage("morango.png")
   pessegoImg= loadImage("pessego.png")
   peraImg= loadImage("pera.png")
   


}

function setup(){
    createCanvas(600,600);
    cesta= createSprite(10,10,10,10);
    cesta.addImage(cestaImg)
    fundo= createSprite(10,10,10,10)


}

function draw(){
    drawSprites();
}