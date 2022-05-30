 var event1 = false;

 function validateEvent(){
    if(event1){
        window.location.href="/create.html";
    }else{
        alert('Invalidate option');
    }
}
function pointer(){
    var list = document.getElementsByClassName("onclick");
    for (index = 0; index < list.length; ++index){
        list[index].style.cursor="pointer";
    }
}
function index(){
    window.location.href="index.html"
}

scientistBuild2 = ()=>{
    window.location.href = "scientist_build2.html"
}
scientistUpdate2= ()=>{
    window.location.href = "scientist_update2.html"
}
applicationCreate = ()=>{
    window.location.href = "application_create.html"
}
function adminEdit(){
    window.location.href="admin_edit.html"
}

function loadType() {
    var type = ["STRUCTURED","UNSTRUCTURED"];
    for(var i=0;i<type.length;i+=1){
        var option = document.createElement("OPTION");
        option.innerHTML=type[i];
        document.getElementById("type").appendChild(option)

    }
}

function loadFormat() {

    var listFormats = {
      STRUCTURED: ["ATTRIBUTES","DATABASE"],
      UNSTRUCTURED: ["IMAGES","VIDEO FOOTAGE","AUDIO","HANDWRITTEN NOTE"]
    }
    
    var type = document.getElementById("type")
    var format = document.getElementById("format")
    var selectedType = type.value;
    // Se limpian los pueblos
    format.innerHTML = '<option value="">Select format ...</option>'
    
    if(selectedType !== ''){
      // Se seleccionan los pueblos y se ordenan
      selectedType = listFormats[selectedType]
    
      // Insertamos los pueblos
      for(var i=0;i<selectedType.length;i+=1){
          var option = document.createElement("OPTION");
          option.innerHTML=selectedType[i];
          document.getElementById("format").appendChild(option)

      }
    }
    
  }

function scientistClean(){
    window.location.href="/stakeholder_provide.html"
}

function extractSummary(){
    window.location.href="/extract_summary.html"
}

function createSolution(){
    window.location.href="create_solution.html"
}