const IDB = (function init(){

    const user = [{
        email: "alinwood0@dedecms.com",
        identification: "4142422865",
        name: "Ariella Linwood",
        password: "A5F3yq",
        role: "ADMINISTRATOR",
    }, {
        email: "osutcliff1@t-online.de",
        identification: "7805313846",
        name: "Ode Sutcliff",
        password: "YgJvVJrnn",
        role: "ADMINISTRATOR",
    }, {
        email: "sedgett2@meetup.com",
        identification: "5485685260",
        name: "Shurlock Edgett",
        password: "Y3J3VrNNCZ",
        role: "STAKEHOLDER",
    }, {
        background: "artificial intelligence",
        email: "ggibbard3@addthis.com",
        experience: "5 year",
        identification: "1784325712",
        job: "Physicist",
        name: "Guenevere Gibbard",
        password: "lY3sDSeTp",
        role: "DATA SCIENTIST",
        style: "INSIGHT PROVIDERS"
    }, {
        background: "statistics",
        email: "ievreux4@desdev.cn",
        experience: "5 year",
        identification: "4681404360",
        job: "Data Scientist",
        name: "Iggy Evreux",
        password: "wnkIe82",
        role: "DATA SCIENTIST",
        style: "INSIGHT PROVIDERS"
    }, {
        background: "biology",
        email: "asandwick5@yellowpages.com",
        experience: "8 year",
        identification: "2627000303",
        job: "Physicist",
        name: "Adrea Sandwick",
        password: "I2RbXx",
        role: "DATA SCIENTIST",
        style: "TEAM LEADE"
    }, {
        background: "mathematics",
        email: "wdantesia6@hibu.com",
        experience: "6 year",
        identification: "2215767805",
        job: "Physicist",
        name: "Wanids Dantesia",
        password: "gxCqsNQeYu",
        role: "DATA SCIENTIST",
        style: "POLYMATH"
    }, {
        background: "statistics",
        email: "mdeluce7@hp.com",
        experience: "2 year",
        identification: "3862402675",
        job: "Computer Scientist",
        name: "Melli Deluce",
        password: "YLZuWl",
        role: "DATA SCIENTIST",
        style: "INSIGHT PROVIDERS"
    }, {
        email: "tkeiley8@archive.org",
        identification: "2266041672",
        name: "Tandy Keiley",
        password: "iiNFge",
        role: "STAKEHOLDER",
    }, {
        email: "rchaster9@home.pl",
        identification: "9178198377",
        name: "Rois Chaster",
        password: "eYvw3Agi",
        role: "ADMINISTRATOR",
    }];
    const data = [{
        classification: "DETERMINISTIC",
        creation: "2022-6-21",
        description: "this is the description",
        file: "Start of Client home.png",
        format: "DATABASE",
        name: "users_data",
        quality: "Low",
        size: "810KB",
        type: "STRUCTURED",
        update: "2022-6-21",
        version: 1,
    },{
        classification: "PROBABILISTIC",
        creation: "2022-5-21",
        description: "hello word",
        file: "index.png",
        format: "IMAGES",
        name: "data_collection",
        quality: "high",
        size: "810KB",
        type: "UNSTRUCTURED",
        update: "2022-6-21",
        version: 2,
    },{
        classification: "PROBABILISTIC",
        creation: "2022-5-21",
        description: "Datos climaticos",
        file: "clima.db",
        format: "DATABASE",
        name: "weather_collection",
        quality: "Low",
        size: "810KB",
        type: "STRUCTURED",
        update: "2022-6-21",
        version: 2,
    }
    ];
    const summary = [{
            creation: "2022-6-21 17:51:13",
            description: "this is the description",
            file: "client_start.xlsx",
            namedata: "nameData",
            validity: "Yes",
        },{
            creation: "2022-6-21 17:51:13",
            description: "this is the description",
            file: "index.pdf",
            namedata: "data_collection",
            validity: "No",
        }
    ];
    const model = [{
        name: "Differential_equations",
        type: "Support vector machines"
      }, {
        name: "Ceilings_detector",
        type: "Deep neural networks"
      }, {
        name: "Iris_class",
        type: "Naive Bayes"
      }, {
        name: "Proximity",
        type: "Deep neural networks"
      }, {
        name: "Fraud_detection",
        type: "Deep neural networks"
      }];
    const application =[{
        create: "2022-01-02",
        namedata: "data_collection",
        namemodel: "Differential_equations",
        tool: "Python",
        update: "2022-05-11",
        vcs: "DVC",
        version: 1
      }, {
        create: "2022-05-18",
        namedata: "users_data",
        namemodel: "Differential_equations",
        tool: "Java",
        update: "2022-01-14",
        vcs: "GIT",
        version: 1
      }, {
        create: "2022-03-17",
        namedata: "users_data",
        namemodel: "Ceilings_detector",
        tool: "Haskell",
        update: "2021-10-10",
        vcs: "SOURCETREE",
        version: 1
      }, {
        create: "2021-08-17",
        namedata: "users_data",
        namemodel: "Proximity",
        tool: "Java",
        update: "2021-11-24",
        vcs: "CODEC",
        version: 1
      }, {
        create: "2021-10-04",
        namedata: "weather_collection",
        namemodel: "Differential_equations",
        tool: "Haskell",
        update: "2022-01-03",
        vcs: "SOURCETREE",
        version: 1
      }, {
        create: "2022-04-30",
        namedata: "data_collection",
        namemodel: "Ceilings_detector",
        tool: "Java",
        update: "2022-06-02",
        vcs: "GIT",
        version: 1
      }, {
        create: "2021-10-27",
        namedata: "weather_collection",
        namemodel: "Proximity",
        tool: "Python",
        update: "2022-03-18",
        vcs: "GIT",
        version: 1
      }, {
        create: "2021-12-27",
        namedata: "weather_collection",
        namemodel: "Iris_class",
        tool: "Scala",
        update: "2022-03-01",
        vcs: "GIT",
        version: 1
      }, {
        create: "2021-11-27",
        namedata: "users_data",
        namemodel: "Iris_class",
        tool: "R",
        update: "2022-04-10",
        vcs: "GIT",
        version: 1
    }];
    const solution = [{
        create: "2022-03-03",
        description: "Nulla mollis molestie lorem.",
        file: "PharetraMagnaAc.mp3",
        nameData: "weather_collection",
        namemodel: "Ceilings_detector",
        performance: 0.609862,
        update: "2021-09-22",
        version: 1
      }, {
        create: "2021-09-15",
        description: "Fusce congue, diam id ornare imperdiet.",
        file: "SuspendissePotentiIn.mp3",
        nameData: "users_data",
        namemodel: "Iris_class",
        performance: 0.77699,
        update: "2021-11-30",
        version: 1
      }, {
        create: "2022-03-02",
        description: "Integer a nibh.",
        file: "IpsumPrimis.tiff",
        nameData: "weather_collection",
        namemodel: "Ceilings_detector",
        performance: 0.37945,
        update: "2022-06-21",
        version: 1
      }, {
        create: "2021-12-26",
        description: "Pellentesque ultrices mattis odio.",
        file: "EleifendLuctusUltricies.jpeg",
        nameData: "data_collection",
        namemodel: "Fraud_detection",
        performance: 0.26181,
        update: "2021-06-24",
        version: 1
      }, {
        create: "2021-11-23",
        description: "Aliquam non mauris.",
        file: "AcDiam.avi",
        nameData: "users_data",
        namemodel: "Iris_class",
        performance: 0.210211,
        update: "2021-10-07",
        version: 1
      }, {
        create: "2022-04-09",
        description: "Integer pede justo, lacinia eget, tincidunt.",
        file: "FaucibusCursusUrna.mp3",
        nameData: "data_collection",
        namemodel: "Proximity",
        performance: 0.515612,
        update: "2021-12-17",
        version: 1
      }, {
        create: "2021-11-14",
        description: "Nulla ut erat id mauris vulputate elementum.",
        file: "NasceturRidiculus.jpeg",
        nameData: "data_collection",
        namemodel: "Ceilings_detector",
        performance: 0.130805,
        update: "2021-08-18",
        version: 1
      }, {
        create: "2022-01-15",
        description: "In est risus, auctor sed, tristique in.",
        file: "Curabitur.xls",
        nameData: "users_data",
        namemodel: "Proximity",
        performance: 0.313241,
        update: "2021-10-11",
        version: 1
      }, {
        create: "2022-04-08",
        description: "Nam tristique tortor eu pede.",
        file: "InFaucibusOrci.doc",
        nameData: "users_data",
        namemodel: "Proximity",
        performance: 0.82536,
        update: "2022-03-24",
        version: 1
      }, {
        create: "2022-06-09",
        description: "Duis aliquam convallis nunc.",
        file: "MagnaBibendumImperdiet.tiff",
        nameData: "weather_collection",
        namemodel: "Differential_equations",
        performance: 0.316098,
        update: "2022-01-11",
        version: 1
      }, {
        create: "2021-10-24",
        description: "Maecenas leo odio, condimentum id.",
        file: "Justo.ppt",
        nameData: "weather_collection",
        namemodel: "Ceilings_detector",
        performance: 0.696158,
        update: "2022-03-11",
        version: 1
      }, {
        create: "2021-09-19",
        description: "Aliquam sit amet diam in magna.",
        file: "NamDuiProin.avi",
        nameData: "weather_collection",
        namemodel: "Differential_equations",
        performance: 0.164338,
        update: "2021-10-05",
        version: 1
      }, {
        create: "2021-08-24",
        description: "Nulla facilisi.",
        file: "Sed.mpeg",
        nameData: "users_data",
        namemodel: "Proximity",
        performance: 0.231266,
        update: "2021-10-19",
        version: 1
      }, {
        create: "2021-09-09",
        description: "Vestibulum sed magna.",
        file: "Maecenas.avi",
        nameData: "users_data",
        namemodel: "Differential_equations",
        performance: 0.608304,
        update: "2022-01-10",
        version: 1
      }, {
        create: "2021-10-13",
        description: "Donec quis orci eget orci vehicula condimentum.",
        file: "RisusPraesentLectus.ppt",
        nameData: "data_collection",
        namemodel: "Differential_equations",
        performance: 0.247421,
        update: "2022-02-10",
        version: 1
      }];
    const result = [
        {
            creation: "2022-6-22",
            file: "Sedit.pdf",
            type: "Dashboard",
            update: "2022-6-22",
            version: 1,
        },{
            creation: "2022-6-22",
            file: "Tieste.pdf",
            type: "Inform",
            update: "2021-5-22",
            version: 1,
        }
    ];





    
    let db = null;
    let objectStoreUser = null;
    let objectStoreData = null;
    let DBOpenReq = indexedDB.open('betaDB',6);

    DBOpenReq.onerror = (err) => {
        console.warn(err);
    };
    DBOpenReq.onsuccess = (ev) => {
        db = ev.target.result;
        console.log('sucess db');
    };
    DBOpenReq.onupgradeneeded = (ev) => {
        db = ev.target.result; 
        let oldVersion = ev.oldVersion;
        let newVersion = ev.newVersion;
        console.log('betaDB updated', oldVersion ,'to', newVersion);
        console.log('upgrade',db);
        if(!db.objectStoreNames.contains('user')){
            objectStoreUser = db.createObjectStore('user',{
                keyPath: 'identification',
            });
        };
        if(!db.objectStoreNames.contains('data')){
            objectStoreData = db.createObjectStore('data',{
                keyPath: 'name',
            });
        };
        if(!db.objectStoreNames.contains('summary')){
            objectStoreData = db.createObjectStore('summary',{
                keyPath: 'namedata',
            });
        };
        if(!db.objectStoreNames.contains('model')){
            objectStoreData = db.createObjectStore('model',{
                keyPath: 'name',
            });
        };
        if(!db.objectStoreNames.contains('application')){
            objectStoreData = db.createObjectStore('application',{
                keyPath: ['namedata','namemodel'],
            });
        };
        if(!db.objectStoreNames.contains('result')){
            objectStoreData = db.createObjectStore('result',{
                keyPath: "id", autoIncrement:true,
            });
        };
        if(!db.objectStoreNames.contains('solution')){
            objectStoreData = db.createObjectStore('solution',{
                keyPath: "id", autoIncrement:true,
            });
        };
    };
    function makeTransaction(storeName,mode){
        let transaction = db.transaction(storeName,mode);
        transaction.onerror = (err) =>{
            console.warn('transactions err',err);
        }
        return transaction;
    };

    function add (transaction,storeName,data) {
        let store  = transaction.objectStore(storeName);
        let addReq = store.add(data);
        addReq.onerror = (err) => {
            window.alert(err.target.error.message);
        }
        return addReq;
    };
    function drop(transaction,storeName,key){
        let store = transaction.objectStore(storeName);
        let deleteReq = store.delete(key);
        deleteReq.onerror = (err) => {
            console.warn(err)
        }
        return deleteReq;
    }
    function get(transaction,storeName,key) {
        let store  = transaction.objectStore(storeName);
        let getReq;
        if(key){
            getReq = store.get(key);
            getReq.onerror = (err) => {
                console.log('getKey', err.target.error.message);
            }
        }else{
            getReq = store.getAll();
            getReq.onerror = (err) => {
                console.log('getAll', err.target.error.message);
            }
        }
        return getReq;
    };
    function update (transaction,storeName,data){
        let store  = transaction.objectStore(storeName);
        let updateReq = store.put(data);
        updateReq.onerror = (err) =>{
            console.log(err.target.error.message);
        }
        return updateReq;
    };
    /**
     * ! Saving operations
     */
    saveSolution = (form, event) => {

        event.preventDefault();
        url = new URL(location.href)
        var namemodel = url.searchParams.get('namemodel');
        var namedata = url.searchParams.get('namedata');
        const date = new Date();
        const creationDate = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
        let solutionForm = Object.fromEntries(new FormData(form).entries());
        let solution = {
            update: creationDate,
            file: solutionForm['file'].name,
            description: solutionForm['description'],
            version: 1,
            create: creationDate,
            performance: Math.random(),
            namedata: namedata,
            namemodel: namemodel,
        };
        let tx = makeTransaction('solution','readwrite');
        tx.oncomplete = (ev) => {
            console.log('complete',ev);
            window.location.href = '../index.html'
        };
        let result = add(tx,'solution',solution);
        result.onsuccess = (ev) => {
            window.alert('Model updated successfully');
        };
    };
    saveUser = (form, event) => {
        event.preventDefault();
        let data = Object.fromEntries(new FormData(form).entries());
        data = Object.fromEntries(Object.entries(data).filter(([_,v])=> v != ''))
        data['password'] = CryptoJS.MD5(data['password']);
        let txSave = makeTransaction('user','readwrite');
        txSave.oncomplete = (ev) => {
            console.log('complete',ev);
            clearUser();
        }
        let result = add(txSave,'user',data);
        result.onsuccess = (ev) => {
            window.alert('User created successfully')
        }
        result.onerr = (err) => {
            console.alert(err.target.error.message);
        }
    };
    saveEditUser = (form, event) => {
        event.preventDefault();
        let userUpdate = Object.fromEntries(new FormData(form).entries());
        let txUpdate = makeTransaction('user','readwrite');
        txUpdate.oncomplete = (ev) => {
            console.log('complete',ev);
            window.location.href = 'manages_user.html'
        };
        let result = update(txUpdate,'user',userUpdate);
        result.onsuccess = (ev) => {
            window.alert('User updated successfully');
        };
    };
    saveApplication = (form, event) => {
        event.preventDefault();

        url = new URL(location.href)
        var idData = url.searchParams.get('idData');
        var idModel = url.searchParams.get('idModel');
        const date = new Date();
        const creationDate = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' +date.getSeconds();
        let applicationForm = Object.fromEntries(new FormData(form).entries());
        let application = {
            namedata: idData,
            namemodel: idModel,
            version: 1,
            create: creationDate,
            tool: applicationForm['tool'],
            vcs: applicationForm['vcs'], // * Version Control System
            update: creationDate,
        };
        let tx = makeTransaction('application','readwrite');
        tx.oncomplete = (ev) => {
            console.log('complete',ev);
            window.location.href = '../index.html'
        };
        let result = add(tx,'application',application);
        result.onsuccess = (ev) => {
            window.alert('Application builded successfully');
        };
    };
    saveResult = (form, event) => {
        event.preventDefault();
        const date = new Date();
        const creationDate = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
        let resultFrom = Object.fromEntries(new FormData(form).entries());
        let resultdata = {
            creation: creationDate,
            update: creationDate,
            file: resultFrom['file'].name,
            version: 1,
            type: resultFrom['type'],
        };
        console.log(resultdata);
        let tx = makeTransaction('result','readwrite');
        tx.oncomplete = (ev) => {
            console.log('complete',ev);
            window.location.href = '../index.html'
        };
        let result = add(tx,'result',resultdata);
        result.onsuccess = (ev) => {
            window.alert('Result realeased successfully');
        };
    };
    saveData = (form, event) =>{
        event.preventDefault();
        const date = new Date();
        const creationDate = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' +date.getSeconds();
        let data = {
            name: $('#nameData'),
            version: 1,
            file: $('#fileData'),
            type: $('#typeData'),
            classification: $('#classificationData'),
            creation: creationDate,
            update: creationDate,
            description: $('#descriptionData'),
            size: null,
            format: $('#formatData'),
            quality: 'Low',
        }
        event.preventDefault();
        let dataForm = Object.fromEntries(new FormData(form).entries());
        let size = Math.round(dataForm['file'].size/1024) + 'KB';

        for(var i in dataForm){
            if (i == 'file'){
                data[i] = dataForm[i].name;
            }else{
                data[i] = dataForm[i];
            }
            
        }
        data['size'] = size;
        let tx = makeTransaction('data','readwrite');
        tx.oncomplete = (ev) => {
            console.log('complete',ev);
            clearProvide();
        };
        let result = add(tx,'data',data);
        result.onsuccess = (ev) => {
            window.alert('Data created successfully');
        };
    };
    saveModel = (form, event) => {
        event.preventDefault();
        let modelForm = Object.fromEntries(new FormData(form).entries());
        modelForm = Object.fromEntries(Object.entries(modelForm).filter(([_,v])=> v != ''));
        let tx = makeTransaction('model','readwrite');
        tx.oncomplete = (ev) => {
            window.location.href = '../index.html';
        }
        let result = add(tx,'model',modelForm);
        result.onsuccess = (ev) => {
            window.alert('Model determined successfully')
        }
    };
    saveSummary = (form, event)=>{
        event.preventDefault();
        var namedataId = (new URL(location.href)).searchParams.get('id');
        const date = new Date();
        const creationDate = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' +date.getSeconds();
        summary = {
            namedata: namedataId,
            file: null,
            description: null,
            creation: creationDate,
            validity: null,
        }
        let summaryForm = Object.fromEntries(new FormData(form).entries());
        summaryForm = Object.fromEntries(Object.entries(summaryForm).filter(([_,v])=> v != ''));
        summary['file'] = summaryForm['file'].name;
        summary['description'] = summaryForm['description'];
        summary['validity'] = summaryForm['validity'];
        console.log(summary);
        let txSave = makeTransaction('summary','readwrite');
        txSave.oncomplete = (ev) => {
            console.log('complete',ev);
            window.location.href = '../index.html';
        }
        let result = add(txSave,'summary',summary);
        result.onsuccess = (ev) => {
            window.alert('Summary created successfully')
        }
        result.onerr = (err) => {
            console.alert(err.target.error.message);
        }


    };
    
    /**
     * ! Building operations
     */
    buildSAupdate = (idBody) => {
        var namemodel = (new URL(location.href)).searchParams.get('namemodel');
        console.log(namemodel);
        let tx = makeTransaction('application','readonly');
        tx.oncomplete = (ev) => {
            console.log('complete',ev);
            $('#BTNRefreshSAupdate').attr('disabled',true);
        }
        let result = get(tx,'application',null);
        result.onsuccess = (ev) => {
            console.log(ev.target.result);
            $('#'+idBody).append(
                ev.target.result.map((app)=>{
                    if(app.namemodel == namemodel){
                        return `<tr><td><input type="radio" name="select" value=${app.namedata}></td>
                        <td> ${app.namedata} </td>
                        <td> ${app.namemodel} </td></tr>`;
                    }
                })
            )
        }
    };
    buildSMupdate = (idBody) => {
        let tx = makeTransaction('model','readonly');
        tx.oncomplete = (ev) => {
            console.log('complete',ev);
            $('#BTNRefreshSMupdate').attr('disabled',true);
        }
        let result = get(tx,'model',null);
        result.onsuccess = (ev) => {
            $('#'+idBody).append(
                ev.target.result.map((model)=>{
                    return `<tr><td><input type="radio" name="select" value=${model.name}></td>
                    <td> ${model.name} </td></tr>`;
                })
            )
        }
    };
    buildApplication = (idBody) => {
        let tx = makeTransaction('application','readonly');
        tx.oncomplete = (ev) => {
            console.log('complete',ev);
            $('#BTNRefreshApplication').attr('disabled',true);
        }
        let result = get(tx,'application',null);
        result.onsuccess = (ev) => {
            $('#'+idBody).append(
                ev.target.result.map((app)=>{
                    return `<tr><td> ${app.version} </td>
                    <td> ${app.create} </td>
                    <td> ${app.tool} </td>
                    <td> ${app.vcs} </td>
                    <td> ${app.update} </td>
                    <td> ${app.namedata} </td>
                    <td> ${app.namemodel} </td></tr>`;
                })
            )
        }
    };
    buildModel = (idBody) => {
        let tx = makeTransaction('model','readonly');
        tx.oncomplete = (ev) => {
            console.log('complete',ev);
            $('#BTNRefreshModel').attr('disabled',true);
        }
        let result = get(tx,'model',null);
        result.onsuccess = (ev) => {
            $('#'+idBody).append(
                ev.target.result.map((model)=>{
                    return `<tr><td> ${model.name} </td>
                    <td> ${model.type} </td></tr>`;
                })
            )
        }
    };
    buildSolution = (idBody) => {
        let tx = makeTransaction('solution','readonly');
        tx.oncomplete = (ev) => {
            console.log('complete',ev);
            $('#BTNRefreshSolution').attr('disabled',true);
        }
        let result = get(tx,'solution',null);
        result.onsuccess = (ev) => {
            $('#'+idBody).append(
                ev.target.result.map((solution)=>{
                    return `<tr><td> ${solution.update} </td>
                    <td> ${solution.file} </td>
                    <td> ${solution.description} </td>
                    <td> ${solution.version} </td>
                    <td> ${solution.create} </td>
                    <td> ${solution.performance} </td>
                    <td> ${solution.namedata} </td>
                    <td> ${solution.namemodel} </td></tr>`;
                })
            )
        }
    };
    buildSelectModel = (idBody) => {
        var idData = (new URL(location.href)).searchParams.get('idData');
        let tx = makeTransaction('model','readonly');
        tx.oncomplete = (ev) => {
            console.log('complete',ev);
            $('#BTNRefreshSelectModel').attr('disabled',true);
        }
        let result = get(tx,'model',null);
        result.onsuccess = (ev) => {
            $('#'+idBody).append(
                ev.target.result.map((model)=>{
                    return `<tr><td><input type="radio" name="select" value=${model.name}></td>
                    <td> ${model.name} </td></tr>`;
                })
            )
        }
    };   
    buildResult = (idBody) => {
        let tx = makeTransaction('result','readonly');
        tx.oncomplete = (ev) => {
            console.log('complete',ev);
            $('#BTNRefreshResult').attr('disabled',true);
        }
        let result = get(tx,'result',null);
        result.onsuccess = (ev) => {
            $('#'+idBody).append(
                ev.target.result.map((result)=>{
                    return `<tr><td> ${result.creation} </td>
                    <td> ${result.file} </td>
                    <td> ${result.version} </td>
                    <td> ${result.type} </td>
                    <td> ${result.update} </td></tr>`;
                })
            )
        }
    };

    buildSelectData = (idBody) => {
        let tx = makeTransaction('data','readonly');
        tx.oncomplete = (ev) => {
            console.log('complete',ev);
            $('#BTNRefreshSelectData').attr('disabled',true);
        }
        let result = get(tx,'data',null);
        result.onsuccess = (ev) => {
            $('#'+idBody).append(
                ev.target.result.map((data)=>{
                    return `<tr><td><input type="radio" name="select" value=${data.name}></td>
                    <td> ${data.name} </td></tr>`;
                })
            )
        }
    };   
    buildUser = (idBody) =>{
        let txBuild = makeTransaction('user','readonly');
        txBuild.oncomplete = (ev) => {
            console.log('complete',ev);
            $('#BTNRefreshUser').attr('disabled',true);
        }
        let result = get(txBuild,'user',null);
        result.onsuccess = (ev) =>{
            $('#'+idBody).append(
                ev.target.result.map((user)=>{
                    return `<tr><td> ${user.identification} </td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.role}</td></tr>`;
                })
            )
        }

    };
    buildNotEmployee = (idBody,role) =>{
        let append;
        let txBuild = makeTransaction('user','readonly');
        txBuild.oncomplete = (ev) => {
            console.log('complete',ev);
            $('#BTNRefreshNE').attr('disabled',true);
        }
        let result = get(txBuild,'user',null);
        result.onsuccess = (ev) =>{
            $('#'+idBody).append(
                ev.target.result.map((user)=>{
                    if (user.role == role){
                        append = `<tr><td> ${user.identification} </td></tr>`;
                        return append;
                    }
                })
            )
        }
    };
    buildEmployee= (idBody) =>{
        let append;
        let txBuild = makeTransaction('user','readonly');
        txBuild.oncomplete = (ev) => {
            console.log('complete',ev);
            $('#BTNRefreshEmployee').attr('disabled',true);
        }
        let result = get(txBuild,'user',null);
        result.onsuccess = (ev) =>{
            $('#'+idBody).append(
                ev.target.result.map((user)=>{
                    if(user.role == 'DATA SCIENTIST'){
                        append = `<tr><td> ${user.identification} </td><td>${user.job}</td><td>${user.experience}</td></tr>`;
                        return append;
                    }
                })  
            )
        }
    };
    buildScientist= (idBody) =>{
        let append;
        let txBuild = makeTransaction('user','readonly');
        txBuild.oncomplete = (ev) => {
            console.log('complete',ev);
            $('#BTNRefreshScientist').attr('disabled',true);
        }
        let result = get(txBuild,'user',null);
        result.onsuccess = (ev) =>{
            $('#'+idBody).append(
                ev.target.result.map((user)=>{
                    if(user.role == 'DATA SCIENTIST'){
                        append = `<tr><td> ${user.identification} </td><td>${user.background}</td><td>${user.style}</td></tr>`;
                        return append;
                    }
                })  
            )
        }
    };
    buildUserEdit = (idBody) =>{
        let txBuild = makeTransaction('user','readonly');
        txBuild.oncomplete = (ev) => {
            console.log('complete',ev);
            $('#BTNRefreshUserEdit').attr('disabled',true);
        }
        let result = get(txBuild,'user',null);
        result.onsuccess = (ev) =>{
            $('#'+idBody).append(
                ev.target.result.map((user)=>{
                    return `<tr><td><input type="radio" name="select" value=${user.identification}></td>
                    <td> ${user.identification} </td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.role}</td></tr>`;
                })
            )
        }

    };
    buildData = (idBody) => {
        let txtBuild = makeTransaction('data','readonly');
        let append;
        txtBuild.oncomplete = (ev) => {
            console.log('complete',ev);
            $('#BTNRefreshData').attr('disabled',true);
        }
        let result = get(txtBuild,'data',null);
        result.onsuccess = (ev) => {
            $('#'+idBody).append(
                ev.target.result.map((data)=>{
                    append = `<tr><td> ${data.name} </td>
                    <td> ${data.version} </td>
                    <td>${data.file}</td>
                    <td>${data.type}</td>
                    <td>${data.classification}</td>
                    <td>${data.creation}</td>
                    <td>${data.update}</td>
                    <td>${data.description}</td>
                    <td>${data.size}</td>
                    <td>${data.format}</td>;
                    <td>${data.quality}</td></tr>`;
                    return append;
                })
            )
        }
    };
    buildsDataClean = (idBody) => {
        let txBuild = makeTransaction('data','readonly');
        txBuild.oncomplete = (ev) => {
            console.log('complete',ev);
            $('#BTNRefreshClean').attr('disabled',true);
        }
        let result = get(txBuild,'data',null);
        result.onsuccess = (ev) =>{
            $('#'+idBody).append(
                ev.target.result.map((data)=>{
                    return `<tr><td><input type="radio" name="select" value=${data.name}></td>
                    <td> ${data.name} </td>
                    <td> ${data.version} </td>
                    <td>${data.file}</td>
                    <td>${data.type}</td>
                    <td>${data.classification}</td>
                    <td>${data.description}</td>
                    <td>${data.size}</td>
                    <td>${data.format}</td></tr>`;
                })
            )
        }

    };
    buildSummary = (idBody) => {
        let txBuild = makeTransaction('summary','readonly');
        txBuild.oncomplete = (ev) => {
            console.log('complete',ev);
            $('#BTNRefreshSummary').attr('disabled',true);
        }
        let result = get(txBuild,'summary',null);
        result.onsuccess = (ev) =>{
            $('#'+idBody).append(
                ev.target.result.map((summary)=>{
                    return `<tr><td> ${summary.validity} </td>
                    <td>${summary.creation}</td>
                    <td>${summary.description}</td>
                    <td>${summary.file}</td>
                    <td>${summary.namedata}</td></tr>`;

                })
            )
        }
    };

    buildDataExtract = (idBody)=> {
        let txBuild = makeTransaction('data','readonly');
        txBuild.oncomplete = (ev) => {
            console.log('complete',ev);
            $('#BTNRefreshDataExtract').attr('disabled',true);
        }
        let result = get(txBuild,'data',null);
        result.onsuccess = (ev) =>{
            $('#'+idBody).append(
                ev.target.result.map((data)=>{
                    if(data.quality == 'High'){
                        return `<tr><td><input type="radio" name="select" value=${data.name}></td>
                        <td> ${data.name} </td>
                        <td>${data.version}</td>
                        <td>${data.file}</td>
                        <td>${data.type}</td>
                        <td>${data.classification}</td>
                        <td>${data.description}</td>
                        <td>${data.size}</td>
                        <td>${data.format}</td></tr>`;
                    }else{
                        return
                    }
                })
            )
        }

    };
    /**
     * ! Loading Operations
     */
    loadUserEdit = () => {
        let user = {
            identification: $('#idUser'),
            name: $('#nameUser'),
            password: $('#password'),
            email: $('#emailUser'),
            role: $('#roleUser'),
            job: $('#jobScientist'),
            experience: $('#experienceScientist'),
            background: $('#backgroundScientist'),
            style: $('#styleScientist'),
        }

        var QueryId = (new URL(location.href)).searchParams.get('id');
        let txBuild = makeTransaction('user','readonly');
        txBuild.oncomplete = (ev) => {
            console.log('complete edit',ev);
        }
        let result = get(txBuild,'user',QueryId);
        result.onsuccess = (ev) => {
            let userData = ev.target.result;
            for (var i in userData){
                if (i == 'role'){
                    user[i].val(userData[i]).prop('selected',true).trigger('change');
                }else{
                    user[i].val(userData[i]);
                }
            }
        }
    };
    loadProvideClean = () => {
        loadProvideData();
        let data = {
            name: $('#nameDataClean'),
            type: $('#typeData'),
            classification: $('#classificationData'),
            description: $('#descriptionData'),
            format: $('#formatData'),
        }
        var QueryId = (new URL(location.href)).searchParams.get('id');
        let txClean = makeTransaction('data','readonly');
        let result = get(txClean,'data',QueryId);
        result.onsuccess = (ev) =>{
            let dataBD = ev.target.result;
            console.log(dataBD);
            for (var i in data){
                if(i == 'type'){
                    data[i].val(dataBD[i]).prop('selected',true).trigger('change');;
                }else{
                    data[i].val(dataBD[i]);
                }
            }
        }
        
    }
    /**
     * ! Elimination Operations
     */
    deleteUser = () =>{
        var idUserDelete;
        $("input[name='select']").each(function(){
        if(this.checked){
            idUserDelete = this.value;
        }});
        let txUpdate = makeTransaction('user','readwrite');
        txUpdate.oncomplete = (ev) => {
            console.log('complete',ev);
            clearTable('infoEditsUser');
            buildUserEdit('infoEditsUser');
        };
        let result = drop(txUpdate,'user',idUserDelete);
        result.onsuccess = (ev) => {
            window.alert('User deleted successfully');
        };

    };
    /**
     * ! Updating Operations
     */
    UpdataData = (form, event) =>{
        event.preventDefault();
        const date = new Date();
        const updataDate = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' +date.getSeconds();
        let dataForm = Object.fromEntries(new FormData(form).entries());
        let size = Math.round(dataForm['file'].size/1024) + 'KB';
        let key = dataForm['name'];
        let tx = makeTransaction('data','readonly');
        tx.oncomplete = (ev) => {
            console.log('complete',ev);
        };
        let result = get(tx,'data',key);
        result.onsuccess = (ev) => {
            let data = ev.target.result;
            for(var i in data){
                switch (i) {
                    case 'creation':
                        data[i] = data[i];
                        break;
                    case 'file':
                        data[i] = dataForm[i].name;
                        break;
                    case 'quality':
                        data[i] = 'High';
                        break;
                    case 'size':
                        data[i] = size;
                        break;
                    case 'update':
                        data[i] = updataDate;
                        break;
                    case 'version':
                        data[i]++;
                        break;
                    default:
                        data[i] = dataForm[i];
                }
            }
            let txUpdate = makeTransaction('data','readwrite');
            txUpdate.oncomplete = (ev) => {
                window.alert('Data cleaned successfully');
            }
            let resultUpdate = update(txUpdate,'data',data);
            resultUpdate.onsuccess = (ev) => {
                window.location.href = 'cleans_data.html';
            
            }
        };
    }
    loadData = () => {
        let txUser = makeTransaction('user','readwrite');
        user.forEach((i)=>{
            let result = add(txUser,'user',i);
            result.onsuccess = (ev) =>{
                console.log('1');
            }
        });
        let txData = makeTransaction('data','readwrite');
        data.forEach((i) =>{
            let result = add(txData,'data',i);
            result.onsuccess = (ev) =>{
                console.log('1');
            }
        });
        let txSummary = makeTransaction('summary','readwrite');
        summary.forEach((i) =>{
            let result = add(txSummary,'summary',i);
            result.onsuccess = (ev) =>{
                console.log('1');
            }
        });
        let txModel = makeTransaction('model','readwrite');
        model.forEach((i) =>{
            let result = add(txModel,'model',i);
            result.onsuccess = (ev) =>{
                console.log('1');
            }
        });
        let txApp = makeTransaction('application','readwrite');
        application.forEach((i) =>{
            let result = add(txApp,'application',i);
            result.onsuccess = (ev) =>{
                console.log('1');
            }
        });
        let txSolution = makeTransaction('solution','readwrite');
        solution.forEach((i) =>{
            let result = add(txSolution,'solution',i);
            result.onsuccess = (ev) =>{
                console.log('1');
            }
        });
        let txResult = makeTransaction('result','readwrite');
        txResult.oncomplete = (ev) => {
            $('#BTNindex').attr('disabled', true);
            alert("BD created succesfully, don't use again!!!!!!!");
        }
        result.forEach((i) =>{
            let result = add(txResult,'result',i);
            result.onsuccess = (ev) =>{
                console.log('1');
            }
        });
        
    }
})();
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
function nextExtracts(){
    var elemToClean;
    $("input[name='select']").each(function(){
        if(this.checked){
            elemToClean = this.value;
            console.log(elemToClean);
            window.location.href = "extracts_summary_2.html?id="+elemToClean;
        }
    })
}
function loadProvideData() {
    var type = ["STRUCTURED","UNSTRUCTURED"];
    for(var i=0;i<type.length;i+=1){
        var option = document.createElement("option");
        option.innerHTML=type[i];
        document.getElementById("typeData").appendChild(option)

    }
};
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
};
function createSolution(){
    var namemodel = (new URL(location.href)).searchParams.get('namemodel');
    var namedata;
    $("input[name='select']").each(function(){
        if(this.checked){
            namedata = this.value;
            window.location.href = "updates_model_3_create_solution.html?namemodel="+namemodel+'&namedata='+namedata;
        }
    })
}
function selectApplication(){
    var namemodel;
    $("input[name='select']").each(function(){
        if(this.checked){
            namemodel = this.value;
            window.location.href = "updates_model_2_select_application.html?namemodel="+namemodel;
        }
    })
}
function editUser () {
    var idUserEdit;
    $("input[name='select']").each(function(){
        if(this.checked){
            idUserEdit = this.value;
            window.location.href = "edits_user.html?id="+idUserEdit;
        }
    })
};
function clearTable(idBody){
    $('#'+idBody).empty();
};
function createApplication(){
    var idData = (new URL(location.href)).searchParams.get('idData');
    var idModel;
    $("input[name='select']").each(function(){
        if(this.checked){
            idModel = this.value;
            window.location.href = "builds_application_3_create_application.html?idData="+idData+'&idModel='+idModel;
        }
    })
}
function selectModel(){
    var idDataSelect;
    $("input[name='select']").each(function(){
        if(this.checked){
            idDataSelect = this.value;
            window.location.href = "builds_application_2_select_model.html?idData="+idDataSelect;
        }
    })
}
function clearUser() {
    document.getElementById('formCreate').reset();
};
function clearProvide(){
    document.getElementById('formProvide').reset();
};
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
};
function index(){
    window.location.href="../index.html"
};
// export function index2(){
//     alert('ji');
// };

