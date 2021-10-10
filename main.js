function preload(){


}

function setup(){

canvas = createCanvas(400,400)
canvas.center;

}

function draw(){

    circle(30, 30, 20);
    triangle(30, 75, 50, 25, 80, 70);
}

function take_picture(){

save("birthday_picture.png")
}