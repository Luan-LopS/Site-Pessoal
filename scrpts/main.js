const canva = document.getElementById('gameBoard')
const contexto = canva.getContext('2d')

class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 20;
        this.speed = 5;
        this.gravidade = 0;
        this.jumPower = -8;
        this.isJumping = false
    }

    draw(){
        contexto.fillStyle = 'blue';
        contexto.fillRect(this.x,this.y, this.width, this.height)
    }

    jump(){
        if(!this.isJumping){
            this.gravidade = this.jumPower
            this.isJumping = true
        }
    }
}

class Box{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.height = 20;
        this.width = 20;
    }

    draw(){
        contexto.fillStyle = 'blue';
        contexto.fillRect(this.x,this.y, this.width, this.height)
    }
}

class Floor{
    constructor(x, y){
        this.x=x;
        this.y=y;
        this.height = 5;
        this.width = 200;
    }

    draw(){
        contexto.fillStyle = 'brown';
        contexto.fillRect(this.x,this.y, this.width, this.height)
    }


}

const player = new Player(5,125)
const floor = new Floor(0,145)
const boxLife = new Box( )


update(){
    player.y += player.gravidade
    if(player.isJumping){
        player.gravidade += 0.3
    }
}



document.addEventListener('keydown',function(e){
    if(e.keyCode === 39){
        player.x += player.speed
    }else if(e.keyCode === 37){
        player.x -= player.speed
    }else if(e.keyCode === 32){
        player.jump()
    }

})

function gameLoop(){
    contexto.clearRect(0,0,canva.width,canva.height)
    floor.draw()
    player.draw()
    player.update()

    requestAnimationFrame(gameLoop)
}

document.getElementById('playButton').addEventListener('click', function(){
    gameLoop()
    console.log('Play')
    document.getElementsByTagName('canvas')[0].style.display = 'block'
})






























class Player {
    // ... (seu código existente)

    update() {
        // Verifica se o jogador está no chão
        if (this.y >= floor.y - this.height) {
            this.isJumping = false; // O jogador não está pulando
            this.y = floor.y - this.height; // Mantém o jogador no chão
        } else {
            // Aplica a gravidade normalmente
            this.y += this.gravidade;
            this.gravidade += 0.3;
        }
    }

    // ... (seu código existente)
}
