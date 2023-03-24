/*---------------------------------------------------------------

Cassic Games - Freeway

Created by Filipe Oliveira

Second code created on Javascript, following the class Classic Games Part 2: Loops and Lists, created by Alura, with some adjustments

-----------------------------------------------------------------

- Click on the play button above to start

- Click on the game screen to control the player


   - Player -             
                      
Press ↑ to move up    
Press ↓ to move down  
Press → to move right
Press ← to move left

------------------------------------------------------------------

** The game has some bugs that can disrupt the experience, but they will be fixed soon **

----------------------------------------------------------------*/

function setup() {
  createCanvas(500, 400);
  somTrilha.loop()
}

function draw() {
  background(imgEstrada);
  impAtor()
  impCarros()
  moverCarros()
  moverAtor()
  verificaColisao()
  impPontos()
  marcaPonto()
}

