const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground;
var solo, parado;
var cenario;
var torre, torreIMG;

function preload(){
    //carrega a imagem do cenario
    

}


function setup() {
    canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    parado = { isStatic: true };

    solo = Bodies.rectangle(width/2, height-2, width, 2, parado);
    World.add(world, solo);


    
  
    //cria um objeto da classe torre


    //cria um objeto da classe canhão


    rectMode(CENTER);
    
    //configura para posicionar as imagens a partir do centro


}

function draw() {
    Engine.update(engine);
    background("cyan");
    //coloca uma imagem no meio do jogo
   


    //exibe a torre
    
    //exibe o canhão

    

  

    fill("green")
    //solo
    rect(solo.position.x, solo.position.y, width, 10);
    
}