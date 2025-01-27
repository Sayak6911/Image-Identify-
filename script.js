let camera=document.getElementById('camera');
let classifier;

Webcam.set({
	width:350,
	height:300,
	image_format: 'png',
	png_quality:90

})
Webcam.attach(camera);

function take_snap() {
	Webcam.snap(function (data_uri){
		document.getElementById('result').innerHTML='<img id="image" src="'+data_uri+'"/>';
	})
}

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/gSNhUYQat/model.json",modelLoaded);



function modelLoaded() {
	console.log("Model Ready")
}
function identify() {
	let img=document.getElementById("image");
	classifier.classify(img, gotResult);
}

	




function gotResult(results) {
  console.log(results);
  document.getElementById("object").innerHTML=results[0].label;
  document.getElementById("accuracy").innerHTML=results[0].confidence,0,2;
}
