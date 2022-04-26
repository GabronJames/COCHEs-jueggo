var gameState = 0
var playerCount = 0
var database
var form1
var game1
var player1
var allPlayers
var distance = 0
var carro1
var carro2 
var carro2
var carro4
var cars =[]
var carro1imagen
var carro2imagen
var carro3imagen
var carro4imagen
var groungimagen
var trackimagen
var track20imagen





function preLoad(){
carro1imagen =loadImage("Imagenes/car1.png")
carro2imagen =loadImage("Imagenes/car2.png")
carro3imagen =loadImage("Imagenes/car3.png")
carro4imagen =loadImage("Imagenes/car4.png")

groungimagen =loadImage("Imagenes/ground.png")
trackimagen =loadImage("Imagenes/track.jpg")
track20imagen =loadImagen("Imagenes/track.png")
}


function setup(){
    database = firebase.database()
    createCanvas(displayWidth-50,displayHeight-50);           
    game1 = new game()
    game1.getState() 
    game1.start()
}

function draw(){
    background("white");
   if (playerCount === 4){
       game1.update(1)
    }
    if (gameState === 1){
        game1.play()
    }
}




































