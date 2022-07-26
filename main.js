var speechrecognition= window.webkitSpeechRecognition;
var recognition = new speechrecognition();
function begin(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult= function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML= Content;
    if(Content == "take my selfie"){
        talk();

        console.log("taking selfie");
    }
}
function talk(){
    var synth = window.speechSynthesis;
    speak_data= "taking your selfie in 8 seconds";
    var Utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(Utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_selfie();
        save_selfie();
    }, 8000);
}
camera= document.getElementById("cam");
Webcam.set({
    width: 360,
    height: 250,
    image_format:"jpg",
    jpg_quality: 100
});
function take_selfie(){
      Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='selfie' src="+data_uri+">";
      });    
}
function save_selfie(){
    anchor=document.getElementById("save_my_selfie");
    picture=document.getElementById("selfie").src;
    anchor.href=picture;
anchor.click();
}