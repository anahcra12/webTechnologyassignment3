// document.getElementById("calculate").addEventListener("click", function () {

//     let name = document.getElementById("studentName").value;

//     let dbms = Number(document.getElementById("dbms").value);
//     let os = Number(document.getElementById("os").value);
//     let cn = Number(document.getElementById("cn").value);
//     let web = Number(document.getElementById("web").value);
//     let ds = Number(document.getElementById("ds").value);

//     let marks = [dbms, os, cn, web, ds];

//     let result = document.getElementById("result");


//     /* Validation */

//     if (name === "" ||
//         marks.some(function (mark) {
//             return mark < 0 || mark > 100;
//         })) {

//         result.className = "fail";

//         result.innerHTML =
//             "<b>Please enter the student name and valid marks between 0 and 100.</b>";

//         return;
//     }


//     /* Total */

//     let total = dbms + os + cn + web + ds;

//     let percentage = total / 5;


//     /* Grade Point */

//     function getGrade(mark) {

//         if (mark >= 90) {
//             return ["A+", 10];
//         }
//         else if (mark >= 80) {
//             return ["A", 9];
//         }
//         else if (mark >= 70) {
//             return ["B+", 8];
//         }
//         else if (mark >= 60) {
//             return ["B", 7];
//         }
//         else if (mark >= 50) {
//             return ["C", 6];
//         }
//         else if (mark >= 40) {
//             return ["D", 5];
//         }
//         else {
//             return ["F", 0];
//         }
//     }


//     let dbmsGrade = getGrade(dbms);
//     let osGrade = getGrade(os);
//     let cnGrade = getGrade(cn);
//     let webGrade = getGrade(web);
//     let dsGrade = getGrade(ds);


//     /* SGPA */

//     let sgpa =
//         (dbmsGrade[1] +
//          osGrade[1] +
//          cnGrade[1] +
//          webGrade[1] +
//          dsGrade[1]) / 5;


//     /* Check Pass / Fail */

//     let pass = true;

//     if (dbms < 40 ||
//         os < 40 ||
//         cn < 40 ||
//         web < 40 ||
//         ds < 40) {

//         pass = false;
//     }


//     /* Display Result */

//     if (pass) {

//         result.className = "pass";

//         result.innerHTML = "<h2>PASS</h2>";

//     }
//     else {

//         result.className = "fail";

//         result.innerHTML = "<h2>FAIL</h2>";

//     }


//     result.innerHTML +=

//         "<p><b>Student Name:</b> " + name + "</p>" +

//         "<p><b>Total Marks:</b> " +
//         total + " / 500</p>" +

//         "<p><b>Percentage:</b> " +
//         percentage.toFixed(2) + "%</p>" +

//         "<p><b>SGPA:</b> " +
//         sgpa.toFixed(2) + "</p>" +


//         "<table>" +

//         "<tr>" +
//         "<th>Subject</th>" +
//         "<th>Marks</th>" +
//         "<th>Grade</th>" +
//         "<th>Grade Point</th>" +
//         "</tr>" +


//         "<tr>" +
//         "<td>DBMS</td>" +
//         "<td>" + dbms + "</td>" +
//         "<td>" + dbmsGrade[0] + "</td>" +
//         "<td>" + dbmsGrade[1] + "</td>" +
//         "</tr>" +


//         "<tr>" +
//         "<td>Operating System</td>" +
//         "<td>" + os + "</td>" +
//         "<td>" + osGrade[0] + "</td>" +
//         "<td>" + osGrade[1] + "</td>" +
//         "</tr>" +


//         "<tr>" +
//         "<td>Computer Networks</td>" +
//         "<td>" + cn + "</td>" +
//         "<td>" + cnGrade[0] + "</td>" +
//         "<td>" + cnGrade[1] + "</td>" +
//         "</tr>" +


//         "<tr>" +
//         "<td>Web Technology</td>" +
//         "<td>" + web + "</td>" +
//         "<td>" + webGrade[0] + "</td>" +
//         "<td>" + webGrade[1] + "</td>" +
//         "</tr>" +


//         "<tr>" +
//         "<td>Data Structures</td>" +
//         "<td>" + ds + "</td>" +
//         "<td>" + dsGrade[0] + "</td>" +
//         "<td>" + dsGrade[1] + "</td>" +
//         "</tr>" +


//         "</table>";

// });


// /* Reset button */

// document.getElementById("reset").addEventListener("click", function () {

//     document.getElementById("studentName").value = "";

//     document.getElementById("dbms").value = "";

//     document.getElementById("os").value = "";

//     document.getElementById("cn").value = "";

//     document.getElementById("web").value = "";

//     document.getElementById("ds").value = "";

//     document.getElementById("result").innerHTML = "";

//     document.getElementById("result").className = "";

// });

document.getElementById("calculate").addEventListener("click", function () {

    let name = document.getElementById("studentName").value.trim();

    let subjects = [
        {
            name: "Design and Analysis of Algorithm",
            marks: document.getElementById("daa").value,
            credit: 3
        },
        {
            name: "Computer Architecture and Organization I",
            marks: document.getElementById("cao").value,
            credit: 3
        },
        {
            name: "Programming Paradigms",
            marks: document.getElementById("pp").value,
            credit: 3
        },
        {
            name: "Theory of Computation",
            marks: document.getElementById("toc").value,
            credit: 4
        },
        {
            name: "Introduction to Data Science",
            marks: document.getElementById("ids").value,
            credit: 3
        }
    ];

    let result = document.getElementById("result");

    /* Validation */

    if (name === "") {
        result.className = "fail";
        result.innerHTML = "<b>Please enter the student name.</b>";
        return;
    }

    for (let subject of subjects) {

        if (subject.marks === "") {
            result.className = "fail";
            result.innerHTML = "<b>Please enter marks for all subjects.</b>";
            return;
        }

        subject.marks = Number(subject.marks);

        if (subject.marks < 0 || subject.marks > 100) {
            result.className = "fail";
            result.innerHTML =
                "<b>Marks must be between 0 and 100.</b>";
            return;
        }
    }

    /*
       IIEST Grade System

       90 - 100 : A+ = 10
       80 - 89  : A  = 9
       70 - 79  : B  = 8
       60 - 69  : C  = 7
       50 - 59  : D  = 6
       40 - 49  : P  = 5
       Below 40 : F  = 0
    */

    function getGrade(mark) {

        if (mark >= 90)
            return ["A+", 10];

        else if (mark >= 80)
            return ["A", 9];

        else if (mark >= 70)
            return ["B", 8];

        else if (mark >= 60)
            return ["C", 7];

        else if (mark >= 50)
            return ["D", 6];

        else if (mark >= 40)
            return ["P", 5];

        else
            return ["F", 0];
    }

    let totalMarks = 0;
    let totalCredits = 0;
    let totalGradePoints = 0;
    let pass = true;

    subjects.forEach(function(subject) {

        let grade = getGrade(subject.marks);

        subject.letterGrade = grade[0];
        subject.gradePoint = grade[1];

        totalMarks += subject.marks;

        totalCredits += subject.credit;

        totalGradePoints +=
            subject.credit * subject.gradePoint;

        if (subject.marks < 40) {
            pass = false;
        }
    });

    /* Calculate percentage */

    let percentage = totalMarks / subjects.length;

    /* Calculate SGPA using credits */

    let sgpa =
        totalGradePoints / totalCredits;

    /* Display PASS or FAIL */

    if (pass) {
        result.className = "pass";
    } else {
        result.className = "fail";
    }

    result.innerHTML =
        "<h2>" +
        (pass ? "PASS" : "FAIL") +
        "</h2>" +

        "<div class='summary'>" +

        "<p><b>Student Name:</b> " +
        name +
        "</p>" +

        "<p><b>Total Marks:</b> " +
        totalMarks +
        " / 500</p>" +

        "<p><b>Percentage:</b> " +
        percentage.toFixed(2) +
        "%</p>" +

        "<p><b>Total Credits:</b> " +
        totalCredits +
        "</p>" +

        "<p><b>SGPA:</b> " +
        sgpa.toFixed(2) +
        "</p>" +

        "</div>" +

        "<table>" +

        "<tr>" +
        "<th>Subject</th>" +
        "<th>Credit</th>" +
        "<th>Marks</th>" +
        "<th>Grade</th>" +
        "<th>Grade Point</th>" +
        "<th>Credit × Grade Point</th>" +
        "</tr>" +

        subjects.map(function(subject) {

            return "<tr>" +

                "<td>" +
                subject.name +
                "</td>" +

                "<td>" +
                subject.credit +
                "</td>" +

                "<td>" +
                subject.marks +
                "</td>" +

                "<td>" +
                subject.letterGrade +
                "</td>" +

                "<td>" +
                subject.gradePoint +
                "</td>" +

                "<td>" +
                (subject.credit *
                 subject.gradePoint) +
                "</td>" +

                "</tr>";

        }).join("") +

        "</table>" +

        "<p><b>SGPA = Σ(Credit × Grade Point) / Σ(Credit)</b></p>";
});


/* Reset button */

document.getElementById("reset").addEventListener("click", function () {

    document.getElementById("studentName").value = "";

    document.getElementById("daa").value = "";

    document.getElementById("cao").value = "";

    document.getElementById("pp").value = "";

    document.getElementById("toc").value = "";

    document.getElementById("ids").value = "";

    document.getElementById("result").innerHTML = "";

    document.getElementById("result").className = "";
});