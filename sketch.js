// examples of different types of data that can be stored in variables
//string Eg:gamestate="start"
// var string="this is a string";
// console.log(string);

// //integer or number-->score compscore=0
// var num=100;
// console.log(num);

// //boolean value-->true/false
// var bool=true;
// console.log(bool);

// //undefined
// var obj;
// console.log(obj);

// //null
// obj=null;
// console.log(obj);

//ARRAY--> TO STORE MULTIPLE VALUES IN THE VARIABLE
// var array1=["hzxgchgds",1000,true,87];
// console.log(array1[1]);

// var array2=["hey",25555,false,3.000]
// console.log(array2[2]);

// var array3=[[1,2,3],33,[true,33,"jsh"]];
// console.log(array3[2][2]);

// array3.push("hi hello by by")
// console.log(array3);

// array3.pop();
// console.log(array3);

// push is for adding any value
// array2.push("sjdhbbh");
// console.log(array2);


// // pop is for removing the last added value
// array2.pop();
// console.log(array2);

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState="onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if(gameState!=="launch"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
   
}


function mouseReleased(){
    gameState = "launch";
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}