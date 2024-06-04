class Box{
    constructor(y){
        this.x = Math.random()* (canva.width - 20)+20;
        this.y = y;
        this.height = 20;
        this.width = 20;
    }

    draw(){
        contexto.fillStyle = 'red';
        contexto.fillRect(this.x,this.y, this.width, this.height)
    }
}