let card = document.querySelectorAll('.card');

let faculty = [
    {
        name: "Abhik Mukherjee",
        designation: "Associate Professor",
        photo: "photos/am.jpg",
        email: "abhik@cs.iiests.ac.in",
        qualification: "PhD",
        subjects: "Current semester subjects — update according to the CST timetable.",
        research: "Computational geometry, image processing, shape analysis, shape classification, text summarization and graph compression."
    },

    {
        name: "Sekhar Mandal",
        designation: "Professor",
        photo: "photos/sm.jpg",
        email: "sekhar@cs.iiests.ac.in",
        qualification: "PhD",
        subjects: "Current semester subjects — update according to the CST timetable.",
        research: "Computer vision, pattern recognition and image processing."
    },

    {
        name: "Tamal Pal",
        designation: "Associate Professor",
        photo: "photos/tp.jpg",
        email: "tamal@cs.iiests.ac.in",
        qualification: "PhD",
        subjects: "Current semester subjects — update according to the CST timetable.",
        research: "Games programming, Artificial Intelligence, Machine Learning and multimedia security."
    },

    {
        name: "Apurba Sarkar",
        designation: "Associate Professor",
        photo: "photos/as.jpg",
        email: "apurba@cs.iiests.ac.in",
        qualification: "PhD, IIT Kanpur",
        subjects: "Current semester subjects — update according to the CST timetable.",
        research: "Digital geometry, computational geometry, image processing, shape analysis and recognition, and text summarization."
    },

    {
        name: "Biplab K. Sikdar",
        designation: "Professor",
        photo: "photos/bkd.jpg",
        email: "biplab@cs.iiests.ac.in",
        qualification: "PhD",
        subjects: "Current semester subjects — update according to the CST timetable.",
        research: "Cellular automata and computer architecture."
    },

    {
        name: "Jaya Sil",
        designation: "Professor",
        photo: "photos/js.jpg",
        email: "js@cs.iiests.ac.in",
        qualification: "PhD in Computer Science",
        subjects: "Current semester subjects — update according to the CST timetable.",
        research: "Image processing, computer vision, machine learning and soft computing."
    },

    {
        name: "Nirnay Ghosh",
        designation: "Assistant Professor",
        photo: "photos/ng.jpg",
        email: "nirnay@cs.iiests.ac.in",
        qualification: "PhD, IIT Kharagpur",
        subjects: "Current semester subjects — update according to the CST timetable.",
        research: "Information and network security, mobile crowdsensing, IoT, cloud computing, privacy and access control."
    },

    {
        name: "Sipra Das Bit",
        designation: "Professor",
        photo: "photos/sdb.jpg",
        email: "sb@cs.iiests.ac.in",
        qualification: "PhD, Jadavpur University",
        subjects: "Current semester subjects — update according to the CST timetable.",
        research: "Mobile computing, wireless sensor networks, delay tolerant networks and IoT."
    },

    {
        name: "Ashish Kumar Layek",
        designation: "Assistant Professor",
        photo: "photos/akl.jpg",
        email: "ashish@cs.iiests.ac.in",
        qualification: "M.E. CST and B.E. CST",
        subjects: "Current semester subjects — update according to the CST timetable.",
        research: "Wireless networking, pattern recognition, computer vision and digital image processing."
    },

    {
        name: "Surajeet Ghosh",
        designation: "Associate Professor",
        photo: "photos/sjg.jpg",
        email: "surajeet@cs.iiests.ac.in",
        qualification: "PhD in Engineering, Jadavpur University",
        subjects: "Current semester subjects — update according to the CST timetable.",
        research: "Hardware accelerators, machine learning for embedded systems, neuromorphic/custom computing, FPGA embedded systems and computational architecture."
    },

    {
        name: "Asit Kumar Das",
        designation: "Professor",
        photo: "photos/akd.jpg",
        email: "akdas@cs.iiests.ac.in",
        qualification: "PhD",
        subjects: "Current semester subjects — update according to the CST timetable.",
        research: "Data mining, pattern recognition, social networks, bioinformatics, machine learning and multimedia analysis."
    },
    {
        name: "Sulata Mitra",
        designation: "Professor",
        photo: "photos/sulata.jpg",
        email: "sulata@cs.iiests.ac.in",
        qualification: "PhD",
        subjects: "Current semester subjects — update according to the CST timetable.",
        research: "Mobile computing, QoS issues in cellular networks, ad-hoc networks, multihomed mobile networks and disaster management."
    },

    {
        name: "Malay Kule",
        designation: "Assistant Professor",
        photo: "photos/malay.jpg",
        email: "malay@cs.iiests.ac.in",
        qualification: "PhD",
        subjects: "Current semester subjects — update according to the CST timetable.",
        research: "Security issues in social networking, hardware security, cryptology, defect tolerance and testing of nanoscale circuits."
    }
];


// Select all cards

card.forEach(function (c) {

    c.addEventListener('click', function () {

        let index = Array.from(card).indexOf(c);

        showProfile(index);

    });

});


// Show profile

function showProfile(index) {

    let f = faculty[index];

    document.getElementById("profileName").innerText = f.name;

    document.getElementById("profileDesignation").innerText =
        f.designation + " - Department of Computer Science and Technology";

    document.getElementById("profileQualification").innerText =
        f.qualification;

    document.getElementById("profileSubjects").innerText =
        f.subjects;

    document.getElementById("profileResearch").innerText =
        f.research;

    document.getElementById("profileImage").src =
        f.photo;

    document.getElementById("profileImage").alt =
        f.name;

    document.getElementById("profileEmail").innerText =
        f.email;

    document.getElementById("profileEmail").href =
        "mailto:" + f.email;

    document.querySelector(".profile").classList.add("active");

    document.body.classList.add("profile-open");
}


// Close profile

document.querySelector(".close").addEventListener('click', function (event) {

    event.stopPropagation();

    document.querySelector(".profile").classList.remove("active");

    document.body.classList.remove("profile-open");

});


// Faculty dropdown

document.getElementById("facultySelect").addEventListener('change', function () {

    let index = this.value;

    if (index !== "") {

        showProfile(index);

    }

});