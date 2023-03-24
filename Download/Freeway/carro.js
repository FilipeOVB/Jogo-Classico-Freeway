let xCarros = [600, 600, 600, -50, -50, -50]
let yCarros = [45, 100, 154, 214, 266, 324]
let vCarros = [2.5, 2.8, 3.5, 3.7, 2.8, 2.3]
let widthCar = 51
let heightCar = 31

function impCarros(){  
  
  for(let i = 0; i < 6; i++){
      
    if( i <= 2)
      image(imgCarros[i], xCarros[i], yCarros[i], widthCar, heightCar)    

    if(i >= 3){

      push();
      translate(xCarros[i],yCarros[i]);
      scale(-1,1);
      image(imgCarros[i], 0, 0, widthCar, heightCar)
      pop(); 

    }  
  }
}

function moverCarros(){
  
  for(let i = 0; i < 6; i++){
    
    if(i <= 2)   
      xCarros[i] -= vCarros[i]
      
    if(i > 2)
      xCarros[i] += vCarros[i]
  }

// Verifica se o carro ultrapassou a tela 
// e o retorna para a posição inicial
  
  for(let i = 0; i < 6; i++){
    
    if((i <= 2) && (xCarros[i] < -50))
      xCarros[i] = 600
  
    if((i > 2) && (xCarros[i] > 550))
      xCarros[i] = -50  
  }
}

