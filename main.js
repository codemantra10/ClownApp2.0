
noseX="";
noseY="";
function preload(){

}
function setup(){
canvas=createCanvas(400,400);
canvas.position(550,100);
video=createCapture(VIDEO);
video.hide();
console.log(ml5.version+"=THE CLOWN IS HUNGRY!😋🍔🩸");
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotPoses);
}
function draw(){
image(video,0,0,400,400);
fill(255,0,0);
circle(noseX, noseY, 20);
}
function snapshot(){
save("clown_image");
}
function modelLoaded(){
console.log("The clowns needs are satisfied and the model has loaded! He says he had one good meal.")
}
function gotPoses(results){
if (results.length>0){
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log(noseX+""+noseY)
}
}