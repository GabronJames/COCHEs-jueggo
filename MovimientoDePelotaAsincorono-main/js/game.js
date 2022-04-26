class game{
    constructor(){

    }// fin de consTructor

    getState(){
        var gameStateRef = database.ref("gameState")   
        gameStateRef.on("value",function(data){
             gameState = data.val()
        })
    }//fin de getState

    update(state){
        database.ref("/").update({gameState:state})
    }//findeUPdate

    async start(){
        if (gameState === 0){
            player1 = new player()
            var playerCountRef = await database.ref("playerCount").once("value")
            if(playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player1.getCount()
            }
            form1 = new form()
            form1.display()
        }
    
    carro1 =createSprite(500,height/4)
    carro2 =createSprite(800,height/4)
    carro3 =createSprite(1100,height/4)
    carro4 =createSprite(1400,height/4)
        carro1.addImage("carro1mc",carro1imagen)
        carro2.addImage("carro2mc",carro2imagen)
        carro3.addImage("carro3mc",carro3imagen)
        carro4.addImage("carro4mc",carro4imagen)




    cars =[carro1,carro2,carro3,carro4]
    }//fin de start

    play(){
        text("El Juego Ha Iniciado")
        form1.hide()
        textSize(27)
        text("aRrAmCaReMoS eN uNoS sEgUnDoS",width,height)
        player.getPlayerInfo();
        if(allPlayers !== undefined){
            var index = 0
            var x = 150
            var y
          //  var displayPosition = 150
            for(var z in allPlayers){
                index += 1
                 x = x+200                                                                                                                                                                                                                                                                                                                                           
                 y = displayHeight -allPlayers[z].distance
                cars[index-1].x=x     
                cars[index-1].y=y    

                if(index === player1.index){
                    fill("green")
                    ellipse(x,y,60,60)
                    camera.position.x=displayWidth/2 
                    camera.position.y=cars[index-1].y
                }
                //displayPosition += 20
                //textSize(29)
                //text(allPlayers[z].name + ": "+ allPlayers[z].distance,width/2,height/4)
            }
        }
    if(keyDown(UP_ARROW) && player1.index!==null){
        player1.distance +=15
        player1.update();
    }
    drawSprites()
    }//fin de play

}//fin de game}
























































































