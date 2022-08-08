function preload(){

}

function draw(){
circle(30, 30, 50);
circle(400, 400, 50);
rect(30, 300, 55, 55, 20);
rect(90, 400, 55, 55);
circle(90, 200, 50)
}

function take_snapshot(){
save("my_img.png")
}

function setup(){
    
canvas = createCanvas(650,500);
canvas.position(100,250);
video=createCapture(VIDEO);
video.hide();
}