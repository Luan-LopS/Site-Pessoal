class Player{
    constructor(x,y){
        this.posicao = {
            x : x,
            y : y
        };
        this.width = 20;
        this.height = 20;
        this.speed = {
            x:0,
            y:0,
        };
        this.gravidade = 1;
        this.sides = {
            bottom:this.posicao.y + this.height,
            top:this.posicao.y - this.height,
            right:this.posicao.x - this.width,
            left: this.posicao.x + this.width
        }
    }

    draw(){
        contexto.fillStyle = 'blue';
        contexto.fillRect(this.posicao.x,this.posicao.y, this.width, this.height)
    }

    update(){
        this.posicao.x += this.speed.x
        this.posicao.y += this.speed.y
        this.sides.bottom = this.posicao.y + this.height


        if(this.sides.bottom + this.speed.y <= canva.height){
            this.speed.y += this.gravidade
        }else{
            this.speed.y = 0
        }
    }
       
}