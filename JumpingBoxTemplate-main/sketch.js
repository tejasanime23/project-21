var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(105,590,200,10);
    surface1.shapeColor="green";
    surface2 = createSprite(310,590,200,10);
    surface2.shapeColor="blue";
    surface3 = createSprite(515,590,200,10);
    surface3.shapeColor = "yellow";
    surface4 = createSprite(720,590,200,10);
    surface4.shapeColor = "red";

    


    //create box sprite and give velocity
    box = createSprite(random(20,750),50,50,50);
    box.shapeColor = "white";
    box.velocityY=4;
    box.velocityX=4;
    
   
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   surface1.display();
   surface2.display();
   surface3.display();
   surface4.display();
   box.display();



    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box)&& box.bounceOff(surface1)){
        box.shapeColor="green";
    }
    
    if(surface2.isTouching(box)&& box.bounceOff(surface2)){
        box.shapeColor="blue";
    }

    if(surface3.isTouching(box)&& box.bounceOff(surface3)){
        box.shapeColor="yellow";
    }

    if(surface4.isTouching(box)&& box.bounceOff(surface4)){
        box.shapeColor="red";
    }
}
