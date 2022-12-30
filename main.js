
img = "";
objects = [];
status = "";

function preload(){
  img = loadImage('download(2).jpg');
}


function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
  objectDetector.detect(img, gotResult);
}

function draw() {
  image(img, 0, 0, 640, 420);

  if(status != "")
      {
      }
fill("FF0000");
text("tv", 45, 75 );
nofill();
stroke("FF0000");
rect(30, 90, 270, 320);



}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}