const canva = document.getElementById('gameBoard')
const contexto = canva.getContext('2d')

const imgBackground = new Image()
imgBackground.src = '../imagens/41530.jpg'

imgBackground.onload=function(){
    for(let x = 0; x< canva.width; x+=imgBackground.width){
        for(let y = 0; y< canva.width; y+=imgBackground.width){
            contexto.drawImage(imgBackground,0,0,canva.width,canva.height)

        }
    }
    drawPlayer()
}

class player {
    constructor(X,Y){
    this.width = 20,
    this.height = 20,
    this.x = canva.width / 80,
    this.y = canva.height -30,
    this.speed = 4,
    this.dx = 0,
    this.dy = 0,
    this.gravity = 0.7,
    this.jumPower = -8,
    this.isJumping = false,
    this.isGrouded = true,
    }
}

const groud = {
    height: 10,
    y: canva.height - 10,
    color: 'blue'
}

class lifeBox {
    contrutor(x,y){
        this.x = x,
        this.y = y,
        this.width = 20,
        this.height = 20,
        this.image = new Image()
        this.image = ''
    }
}

const cam ={
    x:0,
    y:0,
    width: 500,
    height:500,

}

document.addEventListener('keydown', function(e){
    if(e.keyCode === 37){
        player.dx =- player.speed
    }else if(e.keyCode===39){
        player.dx =+ player.speed
    }else if(e.keyCode === 32 && player.isGrouded){
        player.dy = player.jumPower
        player.isGrouded = false
        player.isJumping = true
    }
})

document.addEventListener('keyup', function(e){
    if(e.keyCode === 37 || e.keyCode === 39){
        player.dx = 0
    }
})

function drawBackgroud(){

}

function drawCam(){
    contexto.fillStyle = 'yellow'
    contexto.fillRect(cam.x,cam.y,cam.width,cam.height)
}


function drawPlayer(){
    contexto.fillStyle = 'red'
    contexto.fillRect(player.x, player.y, player.width, player.height)
}

function drawGroud(){
    contexto.fillStyle = groud.color,
    contexto.fillRect(0, groud.y, canva.width, groud.height)
}

function update(){
    player.x += player.dx
    player.y += player.dy
    if(!player.isGrouded){
        player.dy += player.gravity
    }

    if(player.x<0){
        player.x=0
    }else if(player.x + player.width> canva.width){
        player.x = canva.width - player.width
    }

    if(player.y + player.height >= groud.y){
        player.y = groud.y - player.height
        player.dy = 0

        player.isGrouded =true
        player.isJumping = false
    }
}

function clear(){
    contexto.clearRect(0,0,canva.width,canva.height)
}

function draw(){
    
    clear()
    drawGroud()
    contexto.drawImage(imgBackground,0,0,canva.width,canva.height)
    drawPlayer()
    update()

    requestAnimationFrame(draw)
}

''