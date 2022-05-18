 var event1 = false;
 function validateEvent(){
    if(event1){
        window.location.href="/create.html";
    }else{
        alert('Invalidate option');
    }
}

function over(){
    if(event1){
        document.getElementById("path168").setAttribute("fill","#ffff00");
    }else{
        document.getElementById("path168").setAttribute("fill","gray");
        document.getElementById("path168").style.cursor="not-allowed";
        document.getElementById("text170").style.cursor="not-allowed";
        document.getElementById("switch172").style.cursor="not-allowed";
    }
}
function out(){
    document.getElementById("path168").setAttribute("fill","#ffff00");
}