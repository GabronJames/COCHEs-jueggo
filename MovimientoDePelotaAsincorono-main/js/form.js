class form{
    constructor(){
        this.nombreDelJuego =  createElement("h1")
        this.cuadroDeTexto = createInput("Escribe aqui tu nombre")
        this.boton = createButton("¡JuGaR!")
        this.Esperando = createElement("h3") 
    }

    hide(){
        this.nombreDelJuego.hide()
        this.cuadroDeTexto.hide()
        this.boton.hide()
        this.Esperando.hide() 
    }

display(){
    this.nombreDelJuego.html("El Juego")
    this.nombreDelJuego.position(width/2,250)
    this.cuadroDeTexto.position(width/2,500)
    this.boton.position(width/2,650)


    this.boton.mousePressed(
        ()=>{
            this.cuadroDeTexto.hide()
            this.boton.hide()
            player1.name = this.cuadroDeTexto.value()
            playerCount+=1; 
            player1.index = playerCount
            player1.update(); 
            player1.updateCount(playerCount); 
                
            this.Esperando.html("EsPeRe PoR fAvOr GuApO" + player1.name); 
            this.Esperando.position(400,200);
        }
    )
}























}
