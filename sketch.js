var backgroundImg
var snow = []
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine , world;

function setup() {
  createCanvas(1500,700);
engine = Engine.create();
world= engine.world;
Engine.run(engine);
}

function preload() {
  backgroundImg = loadImage("snow2.jpg");
}

function draw() {
  background(backgroundImg);  

    if( frameCount% 20 === 0){
    snow.push(new Snow(random(width/2-700, width/2+700),10));
    }

    for(var i = 0; i < snow.length; i++){
        snow[i].display();
        
    }
}
