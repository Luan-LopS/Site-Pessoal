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
        this.jumPower = -10;
        this.isJumping = false
    }

    draw(){
        contexto.fillStyle = 'blue';
        contexto.fillRect(this.x,this.y, this.width, this.height)
    }

    update(){
        this.y += this.gravidade
        if(this.isJumping){
            this.gravidade += 0.5
        }
    }

    jump(){
        if(!this.isJumping){
            this.gravidade = this.jumPower
            this.isJumping = true
        }
    }
}

const player = new Player(50,50)

class Box{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.height = 20;
        this.width = 20;

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

// document.addEventListener('keyup', function(e){
//     if(e.keyCode === 39 &&  e.keyCode === 37 && e.shiftKey === 32){

//     }
// })

function gameLoop(){
    contexto.clearRect(0,0,canva.width,canva.height)
    player.draw()
    player.update()

    requestAnimationFrame(gameLoop)
}

document.getElementById('playButton').addEventListener('click', function(){
    gameLoop()
    console.log('Play')
    document.getElementsByTagName('canvas')[0].style.display = 'block'
})