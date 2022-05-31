$(document).ready(function () {
    let existUsers = false;
    let userRoleAdmin = false;
    let userRoleStakeholder = false;
    let userRoleScientist = false;
    let validitySummary = false;
    let dataQuality = false;
    let projectStatus = false; // False no esta en progreso
    let projectValidation = false;
    function randomAction(){
    var numValidate = getRandomInt(1,20);
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
        }
        if(numValidate<10){
            existUsers = true;
            alert("A user arrived!!!");
        }else{
            existUsers = false;
            alert("No user has arrived");
        }
        evaluateClass();
    }
    function userRoleManages(){
        if(userRoleAdmin){
            userRoleAdmin = false;
            alert("Lose Administrator permissions ")
        }else{
            userRoleAdmin = true;
            alert("He is now an Administrator")
        }
        evaluateClass();
    }
    function userRolePreProcess(){
        if(userRoleScientist){
            userRoleScientist = false;
            alert("Lose Data Scientist permissions")
        }else{
            userRoleScientist = true;
            alert("He is now a Data Scientist")
        }
        evaluateClass();
    }
    function userRoleProvide(){
        if(userRoleStakeholder){
            userRoleStakeholder = false;
            alert("Lose Stakeholder permissions")
        }else{
            userRoleStakeholder = true;
            alert("He is now a Stakeholder")
        }
        evaluateClass();
    }
    function summaryValidity(){
        if(validitySummary){
            validitySummary = false;
            alert("The summary is not valid")
        }else{
            validitySummary = true;
            alert("The summary is valid")
        }
        evaluateClass();
    }
    function dataQualityClean(){
        if(dataQuality){
            dataQuality = false;
            alert("Data quality is low")
        }else{
            dataQuality = true;
            alert("Data quality is high")
        }
        evaluateClass();
    }
    function projectStatusPreProcess(){
        if(projectStatus){
            projectStatus = false;
            alert("The project is not in progress")
        }else{
            projectStatus = true;
            alert("The project is in progress")
        }
        evaluateClass();
    }
    function userRoleProcess(){
        if(userRoleScientist){
            userRoleScientist = false;
            alert("Los Data Scientist permissions")
        }else{
            userRoleScientist = true;
            alert("He is now a Data Scientist")
        }
        evaluateClass();
    }
    function userRolePostProcess(){
        if(userRoleScientist){
            userRoleScientist = false;
            alert("Los Data Scientist permissions")
        }else{
            userRoleScientist = true;
            alert("He is now a Data Scientist")
        }
        evaluateClass();
    }
    function updateProcess(){
        if(projectValidation){
            projectValidation = false;
            alert("The solution has a higher performance")
        }else{
            projectValidation = true;
            alert("The solution has a lower performance")
        }
        evaluateClass();
    }
    function releasePostProcess(){
        if(projectValidation){
            projectValidation = false;
            alert("The solution has a lower performance")
        }else{
            projectValidation = true;
            alert("The solution has a higher or equal performance")
        }
        evaluateClass();
    }
    function summaryProcess(){
        if(validitySummary){
            validitySummary = false;
            alert("The summary is not valid")
        }else{
            validitySummary = true;
            alert("The summary is valid")
        }
        evaluateClass();
    }
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
        "obtainingTypeOfModel",
        "ensuring_project_has_data",
        "increasing_quality_of_data",
        "fostering_data_has_summary",
        "achieving_the_result",
        "forestingFeedback",
        "accomplishingApplicationSolution",
        "conservingTheEndDate",
        "controllingTheStatus",
        "mantainingTheUsers",
        "eventUser1",
        "eventUser2",
        "eventUser3",
        "eventUser4",
        "eventUser5",
        "eventUser6",
        "eventUser7",
        "eventUserRoleManages",
        "eventUserRoleStakeholder",
        "eventStakeholder",
        "eventSummaryProvide",
        "eventUserRolePreProcess",
        "eventDataQuality",
        "eventDataQuality2",
        "eventProjectStatus",
        "eventUserRoleProcess",
        "eventUpdates",
        "eventSummaryProcess",
        "eventUserRolePostProcess",
        "eventUserRelease",
    ];
    const objects = {
        admin: {
            link: "admin.html",
            canOpen: () => true,
            failAction: () => alert("admin"),
        },
        adminTxt: {
            link: "admin.html",
            canOpen: () => true,
            failAction: () => alert("admin"),
        },
        rdAdminCreate: {
            link: "admin_create.html",
            canOpen: () => existUsers,
            failAction: () => alert("At least one condition is not met"),
        },
        rdAdminCreateTxt: {
            link: "admin_create.html",
            canOpen: () => existUsers && userRoleAdmin,
            failAction: () => alert("At least one condition is not met"),
        },
        rdAdminEdit: {
            link: "admin_manages.html",
            canOpen: () => userRoleAdmin,
            failAction: () => alert("At least one condition is not met"),
        },
        rdAdminEditTxt: {
            link: "admin_manages.html",
            canOpen: () => userRoleAdmin,
            failAction: () => alert("At least one condition is not met"),
        },
        rdAdminDelete: {
            link: "admin_manages.html",
            canOpen: () => userRoleAdmin,
            failAction: () => alert("At least one condition is not met"),
        },
        rdAdminDeleteTxt: {
            link: "admin_manages.html",
            canOpen: () => userRoleAdmin,
            failAction: () => alert("At least one condition is not met"),
        },
        user: {
            link: "user.html",
            canOpen: () => true,
            failAction: () => alert("user"),
        },
        userTxt: {
            link: "user.html",
            canOpen: () => true,
            failAction: () => alert("user"),
        },
        employee: {
            link: "employee.html",
            canOpen: () => true,
            failAction: () => alert("employee"),
        },
        employeeTxt: {
            link: "employee.html",
            canOpen: () => true,
            failAction: () => alert("employee"),
        },
        stakeholder: {
            link: "stakeholder.html",
            canOpen: () => true,
            failAction: () => alert("stakeholder"),
        },
        rdStakeholderProvide: {
            link: "stakeholder_provide.html",
            canOpen: () => (userRoleStakeholder && existUsers) || (userRoleStakeholder && validitySummary),
            failAction: () => alert("At least one condition is not met"),
        },
        scientist: {
            link: "scientist.html",
            canOpen: () => true,
            failAction: () => alert("scientist"),
        },
        rdScientistClean: {
            link: "scientist_clean.html",
            canOpen: () => userRoleScientist && (!dataQuality) && projectStatus,
            failAction: () => alert("At least one condition is not met"),
        },
        rdScientistExtract: {
            link: "scientist_extract.html",
            canOpen: () => userRoleScientist && dataQuality && projectStatus,
            failAction: () => alert("At least one condition is not met"),
        },
        rdScientistDetermine: {
            link: "scientist_determine.html",
            canOpen: () => userRoleScientist && validitySummary,
            failAction: () => alert("At least one condition is not met"),
        },
        rdScientistBuild: {
            link: "scientist_build1.html",
            canOpen: () => userRoleScientist,
            failAction: () => alert("At least one condition is not met"),
        },
        rdScientistUpdate: {
            link: "scientist_update1.html",
            canOpen: () => userRoleScientist && projectValidation,
            failAction: () => alert("At least one condition is not met"),
        },
        rdScientistRelease: {
            link: "scientist_release.html",
            canOpen: () => userRoleScientist && projectValidation,
            failAction: () => alert("At least one condition is not met"),
        },
        data: {
            link: "data.html",
            canOpen: () => true,
            failAction: () => alert("data"),
        },
        summary: {
            link: "summary.html",
            canOpen: () => true,
            failAction: () => alert("summary"),
        },
        solution: {
            link: "solution.html",
            canOpen: () => true,
            failAction: () => alert("solution"),
        },
        application: {
            link: "application.html",
            canOpen: () => true,
            failAction: () => alert("application"),
        },
        model: {
            link: "model.html",
            canOpen: () => true,
            failAction: () => alert("model"),
        },
        project: {
            link: "project.html",
            canOpen: () => true,
            failAction: () => alert("project"),
        },
        userRequirement: {
            link: "user_requirement.html",
            canOpen: () => true,
            failAction: () => alert("user_requirement"),
        },
        result: {
            link: "result.html",
            canOpen: () => true,
            failAction: () => alert("result"),
        },
        feedback: {
            link: "feedback.html",
            canOpen: () => true,
            failAction: () => alert("feedback"),
        },
        enhancingPerformance: {
            link: "enhancing_performance.html",
            canOpen: () => true,
            failAction: () => alert("enhancing_performance"),
        },
        obtainingTypeOfModel: {
            link: "obtaining_type_model.html",
            canOpen: () => true,
            failAction: () => alert("obtaining_type_model "),
        },
        ensuring_project_has_data: {
            link: "ensuring_project_has_data.html",
            canOpen: () => true,
            failAction: () => alert("ensuring_project_has_data "),
        },
        increasing_quality_of_data: {
            link: "increasing_quality.html",
            canOpen: () => true,
            failAction: () => alert("increasing_quality "),
        },
        fostering_data_has_summary: {
            link: "fostering_summary.html",
            canOpen: () => true,
            failAction: () => alert("fostering_summary "),
        },
        achieving_the_result: {
            link: "achieving_result.html",
            canOpen: () => true,
            failAction: () => alert("achieving_result"),
        },
        forestingFeedback : {
            link: "achieving_result.html",
            canOpen: () => true,
            failAction: () => alert("achieving_result"),
        },
        accomplishingApplicationSolution :  {
            link: "average_performance.html",
            canOpen: () => true,
            failAction: () => alert("average_performance"),
        },
        conservingTheEndDate:{
            link: "average_project_duration.html",
            canOpen: () => true,
            failAction: () => alert("average_project_duration"),
        },
        controllingTheStatus:{
            link: "average_project_duration.html",
            canOpen: () => true,
            failAction: () => alert("average_project_duration"),
        },
        mantainingTheUsers:{
            link: "user_creation_speed.html",
            canOpen: () => true,
            failAction: () => alert("user_creation_speed"),
        },
        eventUser1:{
            canOpen: () => true,
            doAction: () => randomAction(),
            failAction: () => alert("Evento"),
        },
        eventUser2:{
            canOpen: () => true,
            doAction: () => randomAction(),
            failAction: () => alert("Evento"),
        },
        eventUser3:{
            canOpen: () => true,
            doAction: () => randomAction(),
            failAction: () => alert("Evento"),
        },
        eventUser4:{
            canOpen: () => true,
            doAction: () => randomAction(),
            failAction: () => alert("Evento"),
        },
        eventUser5:{
            canOpen: () => true,
            doAction: () => randomAction(),
            failAction: () => alert("Evento"),
        },
        eventUser6:{
            canOpen: () => true,
            doAction: () => randomAction(),
            failAction: () => alert("Evento"),
        },
        eventUser7:{
            canOpen: () => true,
            doAction: () => randomAction(),
            failAction: () => alert("Evento"),
        },
        eventUser8:{
            canOpen: () => true,
            doAction: () => randomAction(),
            failAction: () => alert("Evento"),
        },
        eventUserRoleManages:{
            canOpen: () => true,
            doAction: () => userRoleManages(),
        },
        eventUserRoleStakeholder:{
            canOpen: () => true,
            doAction: () => userRoleProvide(),
        },
        eventStakeholder:{
            canOpen: () => true,
            doAction: () => randomAction(),
        },
        eventSummaryProvide:{
            canOpen: () => true,
            doAction: () => summaryValidity(),
        },
        eventUserRolePreProcess:{
            canOpen: () => true,
            doAction: () => userRolePreProcess(),
        },
        eventDataQuality:{
            canOpen: () => true,
            doAction: () => dataQualityClean(),
        },
        eventDataQuality2:{
            canOpen: () => true,
            doAction: () => dataQualityClean(),
        },
        eventProjectStatus:{
            canOpen: () => true,
            doAction: () => projectStatusPreProcess(),
        },
        eventUserRoleProcess:{
            canOpen: () => true,
            doAction: () => userRoleProcess(),
        },
        eventUpdates:{
            canOpen: () => true,
            doAction: () => updateProcess(),
        },
        eventSummaryProcess:{
            canOpen: () => true,
            doAction: () => summaryProcess(),
        },
        eventUserRolePostProcess:{
            canOpen: () => true,
            doAction: () => userRolePostProcess(),
        },
        eventUserRelease:{
            canOpen: () => true,
            doAction: () => releasePostProcess(),
        },
    };

    function evaluateClass(){
        ids.forEach(id => {
            const element = $("#" +id); //Equivale a document.getElementById
            if (element){
                const object = objects[id];
                const canOpen = object.canOpen();
                element.toggleClass("selectable", canOpen);
                element.toggleClass("cantOpen", !canOpen);
            }
        }) 
    }
    

    ids.forEach(id => {
        const element = $("#" +id); //Equivale a document.getElementById
        if (element){
            element.attr("pointer-events","all");
            const object = objects[id];
            if(object.canOpen()){
                element.addClass("selectable")
            }else{
                element.addClass("cantOpen")
            }
            element.click(object, function(event){
                const object = event.data;
                if(object.doAction){
                    object.doAction();
                    return;
                }
                if (object.canOpen()) {
                    window.location.href = object.link;
                }else{
                    object.failAction();
                }
            });

        }
    })   
 });