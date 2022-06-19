var event1 = false;
 // almacena el acceso a indexedDB
const indexedDB = window.indexedDB;
/**
 * se definieron dos arreglos que son los inputs que seran escritos en la BD
 * TODOS: Intentar Login
 * TODOS: Si no terminar usuarios
 * TODOS: Si no terminar DATA
*/
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
        const objectStore2 = db.createObjectStore('data',{keyPath: 'name'});
    }
    request.onerror = (error)=>{
        console.log('Error',error)
    }

    function addData(store, data){
        const transaction = db.transaction([store], 'readwrite');
        const objectStore = transaction.objectStore(store);
        const request = objectStore.add(data)
        request.onsuccess = function(e){
            if(e.target.onsuccess.length>0){
                if(store=='users'){
                    window.alert('User created successfully');
                    window.location.href="creates_user.html";
                }else if(store=='data'){
                    window.alert('Data created successfully');
                    window.location.href="provides_data.html";
                }

            }
        }
        request.onerror = function(e){
            window.alert(e.target.error.message);
        }

    }
    function updateData(store, data){
        let key = data['name']
        const transaction = db.transaction([store], 'readwrite');
        const objectStore = transaction.objectStore(store);

        const requestGet = objectStore.get(key);
        requestGet.onsuccess = (ev) => {
            data['creation'] = ev.target.result.creation;
            data['version'] = ev.target.result.version + 1;
            const requestPut = objectStore.put(data)
            requestPut.onsuccess = function(e){
                console.log('exit')
                window.location.href='../index.html'
            }
            request.onerror = function(e){
                window.alert(e.target.error.message);
            }
            }

    }
    function fillUsers(store,idBody){
        const transaction = db.transaction([store]);
        const objectStore = transaction.objectStore(store);
        const request = objectStore.openCursor();
        let str
        request.onsuccess = (e) =>{
            const cursor = e.target.result;
            if (cursor){
                $('#'+idBody).append(
                    '<tr><td>' + cursor.value.identification + 
                    '</td><td>' + cursor.value.name + 
                    '</td><td>' + cursor.value.email + 
                    '</td><td>' + cursor.value.role + '</td></tr>'
                )
            }else{
                console.log('fin')
            }
            cursor.continue();
        }
    }
    function fillOthers(store,idBody,role){
        const transaction = db.transaction([store]);
        const objectStore = transaction.objectStore(store);
        const request = objectStore.openCursor();
        request.onsuccess = (e) =>{
            const cursor = e.target.result;
            if (cursor){
                if(cursor.value.role == role){
                    $('#'+idBody).append(
                        '<tr><td>' + cursor.value.identification + '</td></tr>'
                    )
                }
            }else{
                console.log('fin')
            }
            cursor.continue();
        }
    }
    function fillScientist(store,idBody,view,role){
        const transaction = db.transaction([store]);
        const objectStore = transaction.objectStore(store);
        const request = objectStore.openCursor();
        request.onsuccess = (e) =>{
            const cursor = e.target.result;
            if (cursor){
                if(view == 'scientist' && cursor.value.role == role){
                    $('#'+idBody).append(
                        '<tr><td>' + cursor.value.identification + 
                        '</td><td>' + cursor.value.background + 
                        '</td><td>' + cursor.value.style + '</td></tr>'
                    )
                }else if(view=='employee' && cursor.value.role == role){
                    $('#'+idBody).append(
                        '<tr><td>' + cursor.value.identification + 
                        '</td><td>' + cursor.value.job + 
                        '</td><td>' + cursor.value.experience + '</td></tr>'
                    )
                }
            }else{
                console.log('fin')
            }
            cursor.continue();
        }
    }
    function fillData(idBody,scope){
        const transaction = db.transaction(['data']);
        const objectStore = transaction.objectStore('data');
        const request = objectStore.openCursor();
        request.onsuccess = (e) =>{
            const cursor = e.target.result;
            if(cursor){
                if(scope=='class'){
                    $("#"+idBody).append(
                        '<tr><td>' + cursor.value.name + 
                        '</td><td>' + cursor.value.version + 
                        '</td><td>' + cursor.value.file + 
                        '</td><td>' + cursor.value.type + 
                        '</td><td>' + cursor.value.classification + 
                        '</td><td>' + cursor.value.creation + 
                        '</td><td>' + cursor.value.update + 
                        '</td><td>' + cursor.value.description + 
                        '</td><td>' + cursor.value.size + 
                        '</td><td>' + cursor.value.format + 
                        '</td><td>' + cursor.value.quality + '</td></tr>'
                    );
                }else if(scope=='cleanData'){

                    $("#"+idBody).append(
                        '<tr><td>'+`<input type="radio" name="select" value=${cursor.value.name}>`+ 
                        '</td><td>' + cursor.value.name + 
                        '</td><td>' + cursor.value.version + 
                        '</td><td>' + cursor.value.file + 
                        '</td><td>' + cursor.value.type + 
                        '</td><td>' + cursor.value.classification + 
                        '</td><td>' + cursor.value.description + 
                        '</td><td>' + cursor.value.size + 
                        '</td><td>' + cursor.value.format + '</td></tr>'
                    );
                }

            }
            cursor.continue();
        }
    }
    loadProvideClean = () =>{
        loadProvideData();
        var QueryId = (new URL(location.href)).searchParams.get('id');
        console.log(QueryId);
        const transaction = db.transaction(['data']);
        const objectStore = transaction.objectStore('data');
        const request = objectStore.get(QueryId);
        request.onsuccess = (ev) =>{
            let data  = ev.target.result;
            console.log(data['name']);
            console.log(data['type']);
            $('#nameDataClean').val(data['name']);
            // $('#nameDataClean').attr('disabled','disabled');
            $('#typeData').val(data['type']).prop('selected',true).trigger('change');
            $('#classificationData').val(data['classification']);
            $('#descriptionData').val(data['description']);
            $('#formatData').val(data['format']);
        } 
    }

}
saveUser = (form, event) =>{
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    data = Object.fromEntries(Object.entries(data).filter(([_,v])=> v != ''))
    addData('users',data);
}
saveData = (form, event)=>{
    event.preventDefault();
    let data = Object.fromEntries(new FormData(form).entries());
    const today = new Date();
    const creation = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' +today.getSeconds();
    data = Object.fromEntries(Object.entries(data).filter(([_,v])=> v != ''))
    const size = Math.round(data['file'].size/1024) + 'KB';
    data['file'] = data['file'].name;
    data['size'] = size;
    data['creation'] = creation;
    data['update'] = creation;
    data['quality'] = 'Low';
    data['version'] = 1;
    addData('data',data);
}
saveDataClean = (form, event)=>{
    event.preventDefault();
    let dataUpdate = Object.fromEntries(new FormData(form).entries());
    const today = new Date();
    const update = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' +today.getSeconds();
    dataUpdate = Object.fromEntries(Object.entries(dataUpdate).filter(([_,v])=> v != ''))
    const size = Math.round(dataUpdate['file'].size/1024) + 'KB';
    dataUpdate['file'] = dataUpdate['file'].name;
    dataUpdate['size'] = size;
    dataUpdate['update'] = update;
    dataUpdate['quality'] = 'High';
    console.log('1',dataUpdate);
    updateData('data',dataUpdate);
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

function scientistClean(){
    var elemToClean;
    $("input[name='select']").each(function(){
        if(this.checked){
            elemToClean = this.value;
            console.log(elemToClean);
            window.location.href = "provides_data_clean.html?id="+elemToClean;
        }
    })
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

function loadProvideData() {
    var type = ["STRUCTURED","UNSTRUCTURED"];
    for(var i=0;i<type.length;i+=1){
        var option = document.createElement("option");
        option.innerHTML=type[i];
        document.getElementById("typeData").appendChild(option)

    }
}

function loadFormat() {
    var listFormats = {
      STRUCTURED: ["ATTRIBUTES","DATABASE"],
      UNSTRUCTURED: ["IMAGES","VIDEO FOOTAGE","AUDIO","HANDWRITTEN NOTE"]
    }   
    var type = document.getElementById("typeData")
    var format = document.getElementById("formatData")
    var selectedType = type.value;
    // Se limpian los tipos
    format.innerHTML = '<option value="">Select format ...</option>'
    
    if(selectedType !== ''){
      // Se seleccionan los tipos y se ordenan
      selectedType = listFormats[selectedType]
    
      // Insertamos los tipos
      for(var i=0;i<selectedType.length;i+=1){
          var option = document.createElement("option");
          option.innerHTML=selectedType[i];
          document.getElementById("formatData").appendChild(option)

      }
    }
  }



function extractSummary(){
    window.location.href="extracts_summary_2.html"
}

function createSolution(){
    window.location.href="updates_model_3_create_solution.html"
}

