var event1 = false;
 // almacena el acceso a indexedDB
const indexedDB = window.indexedDB;
/**
 * se definieron dos arreglos que son los inputs que seran escritos en la BD
 * TODOS: Intentar Login
 * TODOS: Si no terminar usuarios
 * TODOS: Si no terminar DATA
    
*/
let instances;
var idsUser = [
    'idUser',
    'nameUser',
    'passwordUser',
    'emailUser',
    'roleUser',
]
var idsScientist = [
    'jobScientist',
    'experienceScientist',
    'backgroundScientist',
    "styleScientist"
]
if(indexedDB){
    let db;
    const request = indexedDB.open('betaDB',1) //El segundo numero es la version del a bd
    // usamos metodos asincronos

    //Aca abre la BD
    request.onsuccess = ()=>{
        db = request.result;
        //console.log('OPEN',db);
    }
    //Este metodo es el primero que se ejecuta
    request.onupgradeneeded = ()=>{
        db = request.result;
        console.log('CREATE',db);
        // En este punto se crea el almacen
        const objectStore = db.createObjectStore('users',{keyPath: 'identification'});
    }
    request.onerror = (error)=>{
        console.log('Error',error)
    }

    function addData(store, data){
        let size;
        const transaction = db.transaction([store], 'readwrite');
        const objectStore = transaction.objectStore(store);
        const request = objectStore.add(data)
        request.onsuccess = function(e){
            if(e.target.onsuccess.length>0){
                window.alert('User created successfully');
                window.location.href="../index.html";
            }
        }
        request.onerror = function(e){
            window.alert(e.target.error.message);
        }

    }
    function fillUsers(store,idBody, role){
        const transaction = db.transaction([store]);
        const objectStore = transaction.objectStore(store);
        const request = objectStore.openCursor();
        request.onsuccess = (e) =>{
            const cursor = e.target.result;
            if (cursor){
                if(cursor.value.role == role || role == 'users'){
                    $('#'+idBody).append(
                        `<tr><td><input type="radio" name="select" value = ${cursor.value.identification}>` +
                        '</td><td>' + cursor.value.identification + 
                        '</td><td>' + cursor.value.name + 
                        '</td><td>' + cursor.value.password + 
                        '</td><td>' + cursor.value.email + 
                        '</td><td>' + cursor.value.role + '</td></tr>'
                    )
                }
                cursor.continue();
            }else{
                
            }
        }
    }
    function size(store,action){
        const transaction = db.transaction([store]);
        const objectStore = transaction.objectStore(store);
        objectStore.getAll().onsuccess = function(event){
            let request = event.target;
            instances =  request.result.length;
        }

    }
    function formData(action){
        var formValues = {};
        if(action == "createUser"){
            idsUser.forEach(function(id){
                let name = $("#"+id).attr('name');
                let value = $("#"+id).val();
                if(name == "password"){
                    value = CryptoJS.MD5(value);
                }
                formValues[name]=value;
            })
            let role = $("#"+idsUser[idsUser.length - 1]).val();
            if(role=="DATA SCIENTIST"){
                idsScientist.forEach(function(id){
                    let name = $("#"+id).attr('name');
                    let value = $("#"+id).val();
                    formValues[name]=value;
                })
            }
        }
        addData('users',formValues);
    }


}

function appearScientist(){
    if($('#roleUser').val() == 'DATA SCIENTIST'){
        $('#formCreate').css("width","70%");
        $('.general-user').css("width","50%")
        $('.data-scientist').css("display","block");
        $('.data-scientist').css("width","50%");
    } else {
        $('#formCreate').css("width","30%");
        $('.general-user').css("width","100%")
        $('.data-scientist').css("display","none");
        $('.data-scientist').css("width","50%");
    }
}
function validateEvent(){
    if(event1){
        window.location.href="create.html";
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
    window.location.href="../index.html"
}


scientistBuild2 = ()=>{
    window.location.href = "builds_application_2_select_model.html"
}
scientistUpdate2= ()=>{
    window.location.href = "updates_model_2_select_application.html"
}
applicationCreate = ()=>{
    window.location.href = "builds_application_3_create_application.html"
}
function adminEdit(){
    window.location.href="edits_user.html"
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
    window.location.href="provides_data.html"
}

function extractSummary(){
    window.location.href="extracts_summary_2.html"
}

function createSolution(){
    window.location.href="updates_model_3_create_solution.html"
}

