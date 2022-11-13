function preload(){

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(300,300);
    PoseNet=ml5.poseNet(video,modelLoaded);
    PoseNet.on("pose",gotPoses)
}
function modelLoaded(){
    console.log('model loaded hihihihihihihi');
}
function gotPoses(results){
console.log(results);
if (results.length>0){
    console.log(results[0].pose.nose.x);
    console.log(results[0].pose.nose.y);
}
}

function draw(){
        image(video,0,0,300,300)
}

function grape(){
    save("cherry.png")
}