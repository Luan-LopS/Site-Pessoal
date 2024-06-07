const canva = document.getElementById('gameBoard')
const contexto = canva.getContext('2d')

const tileSize = 32



canva.style.width = '1204px'
canva.style.height = '576px'

const background = new Image()
background.src = './imagens/map.png'


const cam = {
        x: 0,
        y: 0,
        width: canva.width,
        height: canva.height,
        leftEdge: function(){
            return this.x +(this.width* 0.25)
        },
        rightEdge: function(){
            return this.x +(this.width* 0.75)
        },
        topEdge: function(){
            return this.y +(this.width* 0.25)
        },
        bottomEdge: function(){
            return this.y +(this.width* 0.75)
        }
}

const player = new Player(100,3)
const boxLife = new Box(40)


const keys = {
    right:{
        pressed: false
    },
    left:{
        pressed: false
    },
    space:{
        pressed:false
    }
}

function gameLoop(){
    window.requestAnimationFrame(gameLoop)
    contexto.clearRect(0, 0, canva.width, canva.height)
    contexto.drawImage(background, -cam.x, -cam.y, background.width, background.height);
    
    player.speed.x =0
    if(keys.right.pressed){
        player.speed.x = 2
    }else if (keys.left.pressed){
        player.speed.x = -2
    }

    boxLife.draw()
    player.draw()
    player.update()
}
