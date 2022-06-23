// import {index2} from '/script.js';
$(document).ready(function () {
    let existUsers = false;
    let userRoleAdmin = false;
    let userRoleStakeholder = false;
    let userRoleScientist = false;
    let validitySummary = false;
    let dataQuality = false;
    let projectStatus = false; // False no esta en progreso
    let projectValidation = false;
    function randomAction(mu, sigma){

        if(distribucionNormal(mu, sigma)<0.05){
            existUsers = true;
            alert("A user arrived!!!");
        }
        else{
            existUsers = false;
            alert("No user has arrived");
        }

        function distribucionNormal(mu, sigma){
            var observation = getRandomInt(1,20);
            return (1/(sigma*Math.sqrt(2*Math.PI)))*Math.exp(-Math.pow((observation-mu),2)/(2*Math.pow(sigma,2)))
        }

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
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
        "administrator",
        "administratorTxt",
        "createsUser",
        "createsUserTxt",
        "editsUser",
        "editsUserTxt",
        "deletesUser",
        "deletesUserTxt",
        "user",
        "userTxt",
        "employee",
        "employeeTxt",
        "stakeholder",
        "providesData",
        "dataScientist",
        "cleansData",
        "extractsSummary",
        "determinesModel",
        "buildsApplication",
        "updatesModel",
        "releasesResult",
        "data",
        "summary",
        "solution",
        "application",
        "model",
        "project",
        "userRequirement",
        "result",
        "feedback",
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
        "enhancingPerformance",
        "obtainingTypeOfModel",
        "ensuringProjectHasData",
        "increasingQualityOfData",
        "fosteringDataHasSummary",
        "achievingTheResult",
        "forestingFeedback",
        "accomplishingApplicationSolution",
        "conservingTheEndDate",
        "controllingTheStatus",
        "mantainingTheUsers",
    ];
    const objects = {
        administrator: {
            link: "class_concepts/administrator.html",
            link2: "h.tml",
            canOpen: () => true,
            canOpen2:() => true,
            failAction: () => alert("admin"),
        },
        administratorTxt: {
            link: "class_concepts/administrator.html",
            link2: "h.html",
            canOpen: () => true,
            canOpen2:() => true,
            failAction: () => alert("admin"),
        },
        createsUser: {
            link: "dynamic_relationships/creates_user.html",
            link2: "specifications/creates_user_specification.html",
            canOpen: () => existUsers,
            canOpen2:() => true,
            failAction: () => alert("At least one condition is not met"),
        },
        createsUserTxt: {
            link: "dynamic_relationships/creates_user.html",
            link2: "specifications/creates_user_specification.html",
            canOpen: () => existUsers && userRoleAdmin,
            canOpen2:() => true,
            failAction: () => alert("At least one condition is not met"),
        },
        editsUser: {
            link: "dynamic_relationships/manages_user.html",
            link2: "specifications/edits_user_specification.html",
            canOpen: () => userRoleAdmin,
            canOpen2:() => true,
            failAction: () => alert("At least one condition is not met"),
        },
        editsUserTxt: {
            link: "dynamic_relationships/manages_user.html",
            link2: "specifications/edits_user_specification.html",
            canOpen: () => userRoleAdmin,
            canOpen2:() => true,
            failAction: () => alert("At least one condition is not met"),
        },
        deletesUser: {
            link: "dynamic_relationships/manages_user.html",
            link2: "specifications/deletes_user_specification.html",
            canOpen: () => userRoleAdmin,
            canOpen2:() => true,
            failAction: () => alert("At least one condition is not met"),
        },
        deletesUserTxt: {
            link: "dynamic_relationships/manages_user.html",
            link2: "specifications/deletes_user_specification.html",
            canOpen: () => userRoleAdmin,
            canOpen2:() => true,
            failAction: () => alert("At least one condition is not met"),
        },
        user: {
            link: "class_concepts/user.html",
            link2: "class_concepts/user.html",
            canOpen: () => true,
            canOpen2:() => true,
            failAction: () => alert("user"),
        },
        userTxt: {
            link: "class_concepts/user.html",
            link2: "class_concepts/user.html",
            canOpen: () => true,
            canOpen2:() => true,
            failAction: () => alert("user"),
        },
        employee: {
            link: "class_concepts/employee.html",
            link2: "class_concepts/employee.html",
            canOpen: () => true,
            canOpen2:() => true,
            failAction: () => alert("employee"),
        },
        employeeTxt: {
            link: "class_concepts/employee.html",
            link2: "class_concepts/employee.html",
            canOpen: () => true,
            canOpen2:() => true,
            failAction: () => alert("employee"),
        },
        stakeholder: {
            link: "class_concepts/stakeholder.html",
            link2: "class_concepts/stakeholder.html",
            canOpen: () => true,
            canOpen2:() => true,
            failAction: () => alert("stakeholder"),
        },
        providesData: {
            link: "dynamic_relationships/provides_data.html",
            link2: "specifications/provides_data_specification.html",
            canOpen: () => (userRoleStakeholder && existUsers) || (userRoleStakeholder && validitySummary),
            canOpen2:() => true,
            failAction: () => alert("At least one condition is not met"),
        },
        dataScientist: {
            link: "class_concepts/data_scientist.html",
            link2: "class_concepts/data_scientist.html",
            canOpen: () => true,
            canOpen2:() => true,
            failAction: () => alert("scientist"),
        },
        cleansData: {
            link: "dynamic_relationships/cleans_data.html",
            link2: "specifications/cleans_data_specification.html",
            canOpen: () => userRoleScientist && (!dataQuality) && projectStatus,
            canOpen2:() => true,
            failAction: () => alert("At least one condition is not met"),
        },
        extractsSummary: {
            link: "dynamic_relationships/extracts_summary_1.html",
            link2: "specifications/extracts_summary_specification.html",
            canOpen: () => userRoleScientist && dataQuality && projectStatus,
            canOpen2:() => true,
            failAction: () => alert("At least one condition is not met"),
        },
        determinesModel: {
            link: "dynamic_relationships/determines_model.html",
            link2: "specifications/determines_model_specification.html",
            canOpen: () => userRoleScientist && validitySummary,
            canOpen2:() => true,
            failAction: () => alert("At least one condition is not met"),
        },
        buildsApplication: {
            link: "dynamic_relationships/builds_application_1_select_data.html",
            link2: "specifications/builds_application_specification.html",
            canOpen: () => userRoleScientist,
            canOpen2:() => true,
            failAction: () => alert("At least one condition is not met"),
        },
        updatesModel: {
            link: "dynamic_relationships/updates_model_1_select_model.html",
            link2: "specifications/updates_model_specification.html",
            canOpen: () => userRoleScientist && projectValidation,
            canOpen2:() => true,
            failAction: () => alert("At least one condition is not met"),
        },
        releasesResult: {
            link: "dynamic_relationships/releases_result.html",
            link2: "specifications/releases_result_specification.html",
            canOpen: () => userRoleScientist && projectValidation,
            canOpen2:() => true,
            failAction: () => alert("At least one condition is not met"),
        },
        data: {
            link: "class_concepts/data.html",
            link2: "class_concepts/data.html",
            canOpen: () => true,
            canOpen2:() => true,
            failAction: () => alert("data"),
        },
        summary: {
            link: "class_concepts/summary.html",
            link2: "class_concepts/summary.html",
            canOpen: () => true,
            canOpen2:() => true,
            failAction: () => alert("summary"),
        },
        solution: {
            link: "class_concepts/solution.html",
            link2: "class_concepts/solution.html",
            canOpen: () => true,
            canOpen2:() => true,
            failAction: () => alert("solution"),
        },
        application: {
            link: "class_concepts/application.html",
            link2: "class_concepts/application.html",
            canOpen: () => true,
            canOpen2:() => true,
            failAction: () => alert("application"),
        },
        model: {
            link: "class_concepts/model.html",
            link2: "class_concepts/model.html",
            canOpen: () => true,
            canOpen2:() => true,
            failAction: () => alert("model"),
        },
        project: {
            link: "class_concepts/project.html",
            link2: "class_concepts/project.html",
            canOpen: () => true,
            canOpen2:() => true,
            failAction: () => alert("project"),
        },
        userRequirement: {
            link: "class_concepts/user_requirement.html",
            link2: "class_concepts/user_requirement.html",
            canOpen: () => true,
            canOpen2:() => true,
            failAction: () => alert("user_requirement"),
        },
        result: {
            link: "class_concepts/result.html",
            link2: "class_concepts/result.html",
            canOpen: () => true,
            canOpen2:() => true,
            failAction: () => alert("result"),
        },
        feedback: {
            link: "class_concepts/feedback.html",
            link2: "class_concepts/feedback.html",
            canOpen: () => true,
            canOpen2:() => true,
            failAction: () => alert("feedback"),
        },
        /**
         * ! -----------------------------------------------start goals--------------------------------------------------------------------------------start goals
         */
        enhancingPerformance: {
            link: "goals/enhancing_performance.html",
            link2: "specifications/average_performance_specification.html",
            canOpen: () => true,
            canOpen2: () => true,
        },
        obtainingTypeOfModel: {
            link: "goals/obtaining_type_model.html",
            link2: "specifications/model_solution_ratio_specification.html",
            canOpen: () => true,
            canOpen2: () => true,
        },
        ensuringProjectHasData: {
            link: "goals/ensuring_project_has_data.html",
            link2: "specifications/data_creation_speed_specification.html",
            canOpen: () => true,
            canOpen2: () => true,
        },
        increasingQualityOfData: {
            link: "goals/increasing_quality.html",
            link2: "specifications/summary_creation_speed_specification.html",
            canOpen: () => true,
            canOpen2: () => true,
        },
        fosteringDataHasSummary: {
            link: "goals/fostering_summary.html",
            link2: "specifications/data_creation_speed_specification.html",
            canOpen: () => true,
            canOpen2: () => true,
        },
        achievingTheResult: {
            link: "goals/achieving_result.html",
            link2: "specifications/result_feedback_ratio_specification.html",
            canOpen: () => true,
            canOpen2: () => true,
        },
        forestingFeedback : {
            link: "goals/achieving_result.html",
            link2: "specifications/result_feedback_ratio_specification.html",
            canOpen: () => true,
            canOpen2: () => true,
        },
        accomplishingApplicationSolution :  {
            link: "goals/accomplishing_application_has_solution.html",
            link2: "specifications/average_performance_specification.html",
            canOpen: () => true,
            canOpen2: () => true,
        },
        conservingTheEndDate:{
            link: "goals/controlling_status_conserving_end_date.html",
            link2: "specifications/average_project_duration_specification.html",
            canOpen: () => true,
            canOpen2: () => true,
        },
        controllingTheStatus:{
            link: "goals/controlling_status_conserving_end_date.html",
            link2: "specifications/average_project_duration_specification.html",
            canOpen: () => true,
            canOpen2: () => true,
        },
        mantainingTheUsers:{
            link: "goals/maintaining_users.html",
            link2: "specifications/user_creation_speed_specification.html",
            canOpen: () => true,
            canOpen2: () => true,
        },
        /**
         * ! --start events---------------------------------------------------------------------------------------------------------------------------------------
         */
        eventUser1:{
            link2: 'specifications/user_arises_specification.html',
            canOpen: () => true,
            canOpen2: () => true,
            doAction: () => randomAction(10, 4),
            failAction: () => alert("Evento"),
        },
        eventUser2:{
            link2: 'specifications/user_arises_specification.html',
            canOpen: () => true,
            canOpen2: () => true,
            doAction: () => randomAction(10, 4),
            failAction: () => alert("Evento"),
        },
        eventUser3:{
            link2: 'specifications/user_arises_specification.html',
            canOpen: () => true,
            canOpen2: () => true,
            doAction: () => randomAction(10, 4),
            failAction: () => alert("Evento"),
        },
        eventUser4:{
            link2: 'specifications/user_arises_specification.html',
            canOpen: () => true,
            canOpen2: () => true,
            doAction: () => randomAction(10, 4),
            failAction: () => alert("Evento"),
        },
        eventUser5:{
            link2: 'specifications/user_arises_specification.html',
            canOpen: () => true,
            canOpen2: () => true,
            doAction: () => randomAction(10, 4),
            failAction: () => alert("Evento"),
        },
        eventUser6:{
            link2: 'specifications/user_arises_specification.html',
            canOpen: () => true,
            canOpen2: () => true,
            doAction: () => randomAction(10, 4),
            failAction: () => alert("Evento"),
        },
        eventUser7:{
            link2: 'specifications/user_arises_specification.html',
            canOpen: () => true,
            canOpen2: () => true,
            doAction: () => randomAction(10, 4),
            failAction: () => alert("Evento"),
        },
        eventUser8:{
            link2: 'specifications/user_arises_specification.html',
            canOpen: () => true,
            canOpen2: () => true,
            doAction: () => randomAction(10, 4),
            failAction: () => alert("Evento"),
        },
        eventUserRoleManages:{
            canOpen: () => true,
            canOpen2: () => true,
            doAction: () => userRoleManages(),
        },
        eventUserRoleStakeholder:{
            canOpen: () => true,
            canOpen2: () => true,
            doAction: () => userRoleProvide(),
        },
        eventStakeholder:{
            link2: 'specifications/stakeholder_show_up_specification.html',
            canOpen: () => true,
            canOpen2: () => true,
            doAction: () => randomAction(10, 4),
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
                    console.log(object);
                    window.location.href = object.link;
                }else{
                    object.failAction();
                }
            });
            element.contextmenu(object, function(event){
                event.preventDefault();
                const object = event.data;
                if (object.canOpen2()) {
                    window.location.href = object.link2;
                }
            });
        }
    });
 });