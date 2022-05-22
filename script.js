 var event1 = false;
 function TEadmin1(){
    var numValidate = getRandomInt(1,20);
    if(numValidate<10){
        event1 = true;
        alert("Llego alguien!!!");
    }else{
        event1 = false;
        alert("No ha llegado nadie");
    }
 }
 function validateEvent(){
    if(event1){
        window.location.href="/create.html";
    }else{
        alert('Invalidate option');
    }
}

function over(){
    if(event1){
        document.getElementById("Radmin1").style.cursor="pointer";
        document.getElementById("RadminTxt1").style.cursor="pointer";
    }else{
        document.getElementById("Radmin1").setAttribute("fill","#D2D267");
        document.getElementById("Radmin1").style.cursor="not-allowed";
        document.getElementById("RadminTxt1").style.cursor="not-allowed";
    }
}
function out(){
    document.getElementById("Radmin1").setAttribute("fill","#ffff00");
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
function pointer(){
    var list = document.getElementsByClassName("onclick");
    for (index = 0; index < list.length; ++index){
        list[index].style.cursor="pointer";
    }
}
function createUser(){
    window.location.href =  "index.html"
}