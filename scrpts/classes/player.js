class Player{
    constructor(x,y){
        this.posicao = {
            x : x,
            y : y
        };
        this.width = tileSize;
        this.height = tileSize;
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
        this.sides.bottom = this.height + canva.height

        if(this.sides.bottom + this.speed.y + this.height <= background.height){
            this.speed.y += this.gravidade
        }else{
            this.speed.y = 0
        }












        // verifica se tem a  camera chegou no fim do map 
        if(cam.x < 0)cam.x = 0
        
        if(cam.x +  cam.width > background.width)cam.x = background.width - cam.width
    
        if(cam.y < 0)cam.y = 0
        
        if(cam.y +  cam.height > background.height)cam.y = background.height - cam.height;

        // verifica se tem 
        if (this.sides.left < cam.leftEdge()) {
            cam.x = Math.max(0, this.posicao.x - cam.width * 0.25);
        }
    
        if (this.sides.right > cam.rightEdge()) {
            cam.x = Math.min(background.width - cam.width, this.posicao.x + this.width - cam.width * 0.75);
        }
    
        if (this.sides.top < cam.topEdge()) {
            cam.y = Math.max(0, this.posicao.y - cam.height * 0.25);
        }
    
        if (this.sides.bottom > cam.bottomEdge()) {
            cam.y = Math.min(background.height - cam.height, this.posicao.y + this.height - cam.height * 0.75);
        }

        // verifica se o jogador de espaço para andar 
        if(this.posicao.x < 0){
            this.posicao.x = 0
        } 
        if(this.posicao.x +  this.width > background.width){
            this.posicao.x = background.width + this.width
        }
        if(this.posicao.y < 0){
            this.posicao.y = 0
        } 
        if(this.posicao.y +  this.height > background.height){
            this.posicao.y = background.height - this.height
        }
    }
       
}