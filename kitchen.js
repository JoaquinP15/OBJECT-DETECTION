kitchen_image = "";

function preload(){
    kitchen_image = loadImage("https://th.bing.com/th/id/R.908f20c1028d9c85267b46a57b4dcbaa?rik=%2f1IG4wiW5Atlyg&riu=http%3a%2f%2fredstonecontracting.com%2fwp-content%2fuploads%2f2020%2f02%2f1_tH2xHyQS9xRlU3eQmXqD-Q-400x266.jpeg&ehk=fBqOiP5nYQWBiX5xh8M7h0IKfYZ4JOJxUjXkcKcrKrY%3d&risl=&pid=ImgRaw&r=0")
}

function setup(){
    canvas = createCanvas(600,400);
    canvas.position(465,200);
}

function draw(){
    image(kitchen_image,0,0,600,400);
    fill("red");
    text("oven",240,200);
    noFill();
    stroke("red");
    rect(240,190,130,100);
}