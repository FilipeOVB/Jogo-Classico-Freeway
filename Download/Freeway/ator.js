// Ator
let xAtor = 70
let yAtor = 366
let colisao = false
let pontos = 0

function impAtor(){
  
  image(imgAtor, xAtor,yAtor ,30,30)
  
}

function moverAtor(){
  
  
  if(keyIsDown(UP_ARROW))
    if(yAtor >= 2)
      yAtor -= 2

  if(keyIsDown(DOWN_ARROW))
    if(yAtor <= 366)
      yAtor += 2
  
  if(keyIsDown(RIGHT_ARROW))
    if(xAtor <= 470)
      xAtor += 2

  if(keyIsDown(LEFT_ARROW))
    if(xAtor >= 0)
      xAtor -= 2  
}

function verificaColisao(){
  
  for(let i = 0; i < 6; i++){
    
    colisao = collideRectCircle(xCarros[i], yCarros[i], widthCar,             heightCar, xAtor, yAtor, 15)
    
    if(colisao){
      
      if(pontos > 0)
        pontos--
      
      somColisao.play()
      colidiu()
    }
  } 
}

function colidiu(){

    xAtor = 100
    yAtor = 366
} 

function marcaPonto(){
  
  if(yAtor <= 3){
    pontos++
    somPonto.play()
    colidiu()
  }
}

function impPontos(){
  textAlign(CENTER)
  textSize(30)
  fill(color(255,230,60))
  text(pontos, width / 3, 28)
  
}

