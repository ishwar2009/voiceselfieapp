var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    if(Content=="take my selfie"){
        speak();
    }
    
}

function speak(){
    var synth= window.speechSynthesis;
    var textarea="Taking selfie in five seconds";
    var utter =new SpeechSynthesisUtterance(textarea);

    synth.speak(utter);
    Webcam.attach(camera);
    setTimeout(function()
    {
   snapshot();
   save();
    },5000);
}
camera=document.getElementById("camera");
Webcam.set({
    width:390,
    height:270,
    image_format:'jpeg',
    jpeg_qualityz:100
})

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
    });
}
function save(){
    link=document.getElementById("anchor");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}
    
