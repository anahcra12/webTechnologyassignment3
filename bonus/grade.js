document.getElementById("calculate").addEventListener("click", function () {

    let name = document.getElementById("studentName").value;

    let dbms = Number(document.getElementById("dbms").value);
    let os = Number(document.getElementById("os").value);
    let cn = Number(document.getElementById("cn").value);
    let web = Number(document.getElementById("web").value);
    let ds = Number(document.getElementById("ds").value);

    let marks = [dbms, os, cn, web, ds];

    let result = document.getElementById("result");


    /* Validation */

    if (name === "" ||
        marks.some(function (mark) {
            return mark < 0 || mark > 100;
        })) {

        result.className = "fail";

        result.innerHTML =
            "<b>Please enter the student name and valid marks between 0 and 100.</b>";

        return;
    }


    /* Total */

    let total = dbms + os + cn + web + ds;

    let percentage = total / 5;


    /* Grade Point */

    function getGrade(mark) {

        if (mark >= 90) {
            return ["A+", 10];
        }
        else if (mark >= 80) {
            return ["A", 9];
        }
        else if (mark >= 70) {
            return ["B+", 8];
        }
        else if (mark >= 60) {
            return ["B", 7];
        }
        else if (mark >= 50) {
            return ["C", 6];
        }
        else if (mark >= 40) {
            return ["D", 5];
        }
        else {
            return ["F", 0];
        }
    }


    let dbmsGrade = getGrade(dbms);
    let osGrade = getGrade(os);
    let cnGrade = getGrade(cn);
    let webGrade = getGrade(web);
    let dsGrade = getGrade(ds);


    /* SGPA */

    let sgpa =
        (dbmsGrade[1] +
         osGrade[1] +
         cnGrade[1] +
         webGrade[1] +
         dsGrade[1]) / 5;


    /* Check Pass / Fail */

    let pass = true;

    if (dbms < 40 ||
        os < 40 ||
        cn < 40 ||
        web < 40 ||
        ds < 40) {

        pass = false;
    }


    /* Display Result */

    if (pass) {

        result.className = "pass";

        result.innerHTML = "<h2>PASS</h2>";

    }
    else {

        result.className = "fail";

        result.innerHTML = "<h2>FAIL</h2>";

    }


    result.innerHTML +=

        "<p><b>Student Name:</b> " + name + "</p>" +

        "<p><b>Total Marks:</b> " +
        total + " / 500</p>" +

        "<p><b>Percentage:</b> " +
        percentage.toFixed(2) + "%</p>" +

        "<p><b>SGPA:</b> " +
        sgpa.toFixed(2) + "</p>" +


        "<table>" +

        "<tr>" +
        "<th>Subject</th>" +
        "<th>Marks</th>" +
        "<th>Grade</th>" +
        "<th>Grade Point</th>" +
        "</tr>" +


        "<tr>" +
        "<td>DBMS</td>" +
        "<td>" + dbms + "</td>" +
        "<td>" + dbmsGrade[0] + "</td>" +
        "<td>" + dbmsGrade[1] + "</td>" +
        "</tr>" +


        "<tr>" +
        "<td>Operating System</td>" +
        "<td>" + os + "</td>" +
        "<td>" + osGrade[0] + "</td>" +
        "<td>" + osGrade[1] + "</td>" +
        "</tr>" +


        "<tr>" +
        "<td>Computer Networks</td>" +
        "<td>" + cn + "</td>" +
        "<td>" + cnGrade[0] + "</td>" +
        "<td>" + cnGrade[1] + "</td>" +
        "</tr>" +


        "<tr>" +
        "<td>Web Technology</td>" +
        "<td>" + web + "</td>" +
        "<td>" + webGrade[0] + "</td>" +
        "<td>" + webGrade[1] + "</td>" +
        "</tr>" +


        "<tr>" +
        "<td>Data Structures</td>" +
        "<td>" + ds + "</td>" +
        "<td>" + dsGrade[0] + "</td>" +
        "<td>" + dsGrade[1] + "</td>" +
        "</tr>" +


        "</table>";

});


/* Reset button */

document.getElementById("reset").addEventListener("click", function () {

    document.getElementById("studentName").value = "";

    document.getElementById("dbms").value = "";

    document.getElementById("os").value = "";

    document.getElementById("cn").value = "";

    document.getElementById("web").value = "";

    document.getElementById("ds").value = "";

    document.getElementById("result").innerHTML = "";

    document.getElementById("result").className = "";

});