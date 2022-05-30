$(document).ready(function () {
    let existUsers = false;

    const ids = [
        "admin",
        "adminTxt",
        "rdAdminCreate",
        "rdAdminCreateTxt",
        "rdAdminEdit",
        "rdAdminEditTxt",
        "rdAdminDelete",
        "rdAdminDeleteTxt",
        "user",
        "userTxt",
        "employee",
        "employeeTxt",
        "stakeholder",
        "rdStakeholderProvide",
        "scientist",
        "rdScientistClean",
        "rdScientistExtract",
        "rdScientistDetermine",
        "rdScientistBuild",
        "rdScientistUpdate",
        "rdScientistRelease",
        "data",
        "summary",
        "solution",
        "application",
        "model",
        "project",
        "userRequirement",
        "result",
        "feedback",
        "enhancingPerformance",
    ];
    const objects = { 
        admin: { link: 'admin.html', canOpen: () => true, failAction: () => alert('admin')}, 
        adminTxt: { link: 'admin.html', canOpen: () => true, failAction: () => alert('admin')}, 
        rdAdminCreate: { link: 'admin_create.html', canOpen: () => true, failAction: () => alert('admin')}, 
        rdAdminCreateTxt: { link: 'admin_create.html', canOpen: () => true, failAction: () => alert('admin')}, 
        rdAdminEdit: { link: 'admin_manages.html', canOpen: () => true, failAction: () => alert('admin')}, 
        rdAdminEditTxt: { link: 'admin_manages.html', canOpen: () => true, failAction: () => alert('admin')}, 
        rdAdminDelete: { link: 'admin_manages.html', canOpen: () => true, failAction: () => alert('admin')}, 
        rdAdminDeleteTxt: { link: 'admin_manages.html', canOpen: () => true, failAction: () => alert('admin')}, 
        user:{ link: 'user.html', canOpen: () => true, failAction: () => alert('user')}, 
        userTxt:{ link: 'user.html', canOpen: () => true, failAction: () => alert('user')}, 
        employee:{ link: 'employee.html', canOpen: () => true, failAction: () => alert('employee')}, 
        employeeTxt:{ link: 'employee.html', canOpen: () => true, failAction: () => alert('employee')}, 
        stakeholder:{ link: 'stakeholder.html', canOpen: () => true, failAction: () => alert('stakeholder')}, 
        rdStakeholderProvide:{ link: 'stakeholder_provide.html', canOpen: () => true, failAction: () => alert('stakeholder')}, 
        scientist: { link: 'scientist.html', canOpen: () => true, failAction: () => alert('scientist')}, 
        rdScientistClean: { link: 'scientist_clean.html', canOpen: () => true, failAction: () => alert('scientist')}, 
        rdScientistExtract: { link: 'scientist_extract.html', canOpen: () => true, failAction: () => alert('scientist')}, 
        rdScientistDetermine: { link: 'scientist_determine.html', canOpen: () => true, failAction: () => alert('scientist')}, 
        rdScientistBuild: { link: 'scientist_build1.html', canOpen: () => true, failAction: () => alert('scientist')}, 
        rdScientistUpdate: { link: 'scientist_update1.html', canOpen: () => true, failAction: () => alert('scientist')}, 
        rdScientistRelease: { link: 'scientist_release.html', canOpen: () => true, failAction: () => alert('scientist')}, 
        data: { link: 'data.html', canOpen: () => true, failAction: () => alert('data')}, 
        summary: { link: 'summary.html', canOpen: () => true, failAction: () => alert('summary')}, 
        solution: { link: 'solution.html', canOpen: () => true, failAction: () => alert('solution')}, 
        application: { link: 'application.html', canOpen: () => true, failAction: () => alert('application')}, 
        model: { link: 'model.html', canOpen: () => true, failAction: () => alert('model')}, 
        project: { link: 'project.html', canOpen: () => true, failAction: () => alert('project')}, 
        userRequirement: { link: 'user_requirement.html', canOpen: () => true, failAction: () => alert('user_requirement')}, 
        result: { link: 'result.html', canOpen: () => true, failAction: () => alert('result')}, 
        feedback: { link: 'feedback.html', canOpen: () => true, failAction: () => alert('feedback')}, 
        enhancingPerformance: { link: 'enhancing_performance.html', canOpen: () => true, failAction: () => alert('enhancing_performance')}}

    ids.forEach(id => {
        const element = $("#" +id); //Equivale a document.getElementById
        if (element){
            element.attr("pointer-events","all");
            element.addClass("selectable");
            
            const object = objects[id];
            element.click(object, function(event){
                const object = event.data;
                console.log('object.link', object.canOpen());
                if (object.canOpen()) {
                    window.location.href = object.link;
                }else{
                    object.failAction();
                }
            });

        }
    })   
 });

