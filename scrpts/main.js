const canva = document.getElementById('gameBoard')
const contexto = canva.getContext('2d')

canva.style.width = '1024px'
canva.style.height = '576px'

const backgroundLevel1 = new Sprite({
    position:{
        x: 0,
        y:0
    },
    imageSrc:'./imagens/41530.jpg',
    
})
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
    backgroundLevel1.draw()


    player.speed.x =0
    if(keys.right.pressed){
        player.speed.x = 1.2
    }else if (keys.left.pressed){
        player.speed.x = -1.2
    }

    boxLife.draw()
    player.draw()
    player.update()

}
