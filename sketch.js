const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world, bgImage, ground;
var hero, herorope,monster;
function preload() {
//preload the images here
bgImage = loadImage("images/GamingBackground.png")
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  ground = new Ground(500,450,1000,20);
  hero = new Hero(250,350,250)
  herorope = new Rope(hero.body, {x: 150, y: 150})
  monster = new Monster(850,350,250)

  Engine.run(engine)
}

function draw() {
  background(bgImage);
  Engine.update(engine);

  ground.display();
  hero.display();
  monster.display();


}

function mouseDragged(){
  
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}

