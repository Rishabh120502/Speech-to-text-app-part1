var speechRecognition=window.webkitSpeechRecognition;
var recognition=new speechRecognition;

function talk(){
    document.getElementById("textbox").innerHTML="";
    recognition.start()

}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
}