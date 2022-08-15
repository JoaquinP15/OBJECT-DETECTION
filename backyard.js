backyard_image = "";

function preload(){
    backyard_image = loadImage("https://th.bing.com/th/id/R.27a03d7970facac7e56fe01c4f1a74f2?rik=m%2f4CrCK2h5EMLA&riu=http%3a%2f%2fwww.stylemotivation.com%2fwp-content%2fuploads%2f2015%2f04%2fwooden-fence-6-620x412.jpg&ehk=z2GYuk%2fvlPUDHFh2rovgnXinpRRtpQBjQ6abNpfX6D8%3d&risl=&pid=ImgRaw&r=0");
}

function setup(){
    canvas = createCanvas(600,400);
    canvas.position(465,200);
}

function draw(){
    image(backyard_image,0,0,600,400);
    fill("red");
    text("chair",130,200);
    noFill();
    stroke("red");
    rect(130,200,200,130);
}