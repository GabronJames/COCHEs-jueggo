class player{
    constructor(){
        this.index = null 
        this.distance = 0
        this.name = null
    }//fin de consTructor

getCount(){
    var playerCountRef = database.ref("playerCount")
    playerCountRef.on("value",(data)=>{
        playerCount = data.val()
    })
}//fin de getCount 

updateCount(count){
    database.ref("/").update({playerCount: count})
}//fin de updateCount 


update(){
    var playerIndex = "jugadores/jugador" + this.index 
    database.ref(playerIndex).set({name:this.name,distance:this.distance})
}//fin de player 

static getPlayerInfo(){
    var playerInfoRef = database.ref("jugadores")
    playerInfoRef.on("value",(data)=>{
        allPlayers = data.val()
})

}


}

