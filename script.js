

var mysong=document.getElementById("mysong");
var Icon = document.getElementById("icon");

Icon.onclick=function(){
    if(mysong.paused){
        mysong.play();
        Icon.src="media/pause.png"; }
    else{
        mysong.pause();
        Icon.src="media/play.png";}
        
    }

