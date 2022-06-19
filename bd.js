const indexedDB = window.indexedDB;
export var db;
/**
 * se definieron dos arreglos que son los inputs que seran escritos en la BD
 * TODOS: Intentar Login
 * TODOS: Si no terminar usuarios
 * TODOS: Si no terminar DATA
*/
if(indexedDB){
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
}