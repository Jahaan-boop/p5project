function preload(){

}

function take_snapshot(){
save("my_img.png")
}

function setup(){
canvas = createCanvas(650,500);
canvas.position(100,250);
video=createCapture(VIDEO);
video.hide();
filter="";
}

function draw(){
    image(video,150,100,350,300);
    fill("purple");
    stroke("purple");
    circle(50,50,80);
    circle(50,450,80);
    circle(580,50,80);
    circle(580,450,80);
}