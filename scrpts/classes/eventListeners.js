
document.addEventListener('keydown',function(e){
    switch(e.keyCode){
        case 39:
            keys.right.pressed = true
            break
    
        case 37:
            keys.left.pressed = true
            break
        case 32:
            if(player.speed.y === 0){
                player.speed.y = - 15
            }
            break
    }
})

document.addEventListener('keyup',function(e){
    switch(e.keyCode){
        case 39:
            keys.right.pressed = false
            break
    
        case 37:
            keys.left.pressed = false
            break
     
    }
})


document.getElementById('playButton').addEventListener('click', function(){
    gameLoop()
    document.querySelector('.play').style.display = 'none'
})