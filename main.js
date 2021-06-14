function setup(){
canvas=createCanvas(400,400,)
canvas.position(500,400)
video=createCapture(VIDEO);
video.hide();
tintcolor="";
}
function draw(){
image(video,0,0,400,400)
fill(128,0,0)
circle(200,200,30);
noStroke();
fill(255,0,0)
circle(150, 100, 50);

fill(255,128,0)
circle(200, 100, 50);

fill(255,255,0)
circle(250, 100, 50);

fill(255,0,0)
circle(150, 100, 50);

fill(51,153,255)
circle(240, 60, 50);

fill(0,255,0)
circle(190, 60, 50);
fill(0,225,0)


fill(127,0,255)
circle(140, 60, 50);
tint(tintcolor);
}
function change_color(){
tintcolor=document.getElementById("color").value;
}
function take_snapshot(){
save("clownphoto.png");

}
