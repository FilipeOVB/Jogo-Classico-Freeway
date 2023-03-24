// images and sounds

let imgEstrada;
let imgAtor;
let imgCar1;
let imgCar2;
let imgCar3;

let somTrilha
let somColisao
let somPonto

function preload(){
  
  imgEstrada = loadImage("imagens/estrada.png")
  imgAtor = loadImage("imagens/ator-1.png")
  imgCar1 = loadImage("imagens/carro-1.png")
  imgCar2 = loadImage("imagens/carro-2.png")
  imgCar3 = loadImage("imagens/carro-3.png")
  imgCarros = [imgCar1, imgCar2, imgCar3, imgCar2, imgCar3, imgCar1]
  
  
  somTrilha = loadSound("sons/trilha.mp3")
  somColisao = loadSound("sons/colidiu.mp3")
  somPonto = loadSound("sons/pontos.wav")
  
}