//Core CS classes
var cs111 = {
                grade : null,
                title : "Intro to Computing I",
                dept : "CS"
            }

var cs140 = {
                grade : null,
                title : "Intro to Computing II",
                dept : "CS"
            }

var cs150 = {   
                grade : null,
                title : "Intro to Computing I",
                dept : "CS"
            }

function submitClasses() {

    cs111.grade = document.getElementById("cs111").value;
    document.getElementById("error").innerText = cs111.grade;
}

function evaluateDegree() {



}

