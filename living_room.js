bed_room_image = "";

function preload(){
    bed_room_image = loadImage("https://2.bp.blogspot.com/-vQvTe3juNdw/UvEQeN2e67I/AAAAAAAAIBw/0xWMBUVkAzU/s1600/int12.jpg")
}

function setup(){
    canvas = createCanvas(600,400);
    canvas.position(465,200);
}

function draw(){
    image(bed_room_image,0,0,600,400);
    fill("red");
    text("laptop",160,150);
    noFill();
    stroke("red");
    rect(130,150,150,100);
}