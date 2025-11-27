const quizQuestions = [
    {
        subject: "történelem",
        //1.
        question: "Mikor tört ki Pesten a forradalom?",
        answers: ["1848. március 12.", "1848. március 15.", "1848. április 14", "1848. június 1."],
        corrects: 1,
        //2.
        question: "Ki vezette a magyar honvédsereg főparancsnokságát a szabadságharc nagy részében?",
        answers: ["Kossuth Lajos", "Görgei Artúr", "Bem József", "Batthyány Lajos"],
        corrects: 1,
        //3.
        question: "Hol fogalmazták meg a 12 pontot?",
        answers: ["Pozsony", "Debrecen", "Buda", "Pest"],
        corrects: 3,
        //3+1
        question: "Mi volt a szabadságharc végének szimbolikus dátuma (a világosi fegyverletétel)?",
        answers: ["1849. május 1.", "1849. június 13.", "1849. augusztus 13.", "1849. október 6."],
        corrects: 2,
    },
    {
        subject: "matematika",
        //1.
        question: "Mennyi a sin(30°) értéke?",
        answers: ["0", "1/2", "√3/2", "1"],
        corrects: 1,
        //2.
        question: "Mennyi a cos(60°) értéke?",
        answers: ["1", "√2/2", "1/2", "0"],
        corrects: 2,
        //3.
        question: "Mekkora a tg(45°)?",
        answers: ["0", "1", "√3", "1/√3"],
        corrects: 1
    },
    {
        subject: "magyar",
        //1.
        question: "Ki írta Az ember tragédiáját?",
        answers: ["Arany János", "Madách Imre", "Vörösmarty Mihály", "Móricz Zsigmond"],
        corrects: 1,
        //2.
        question: "Kik a mű két fő állandó szereplői, akik végigkísérik a színeket?",
        answers: ["Ádám és Lucifer", "Éva és Péter", "Lucifer és Mefisztó", "Ádám és József"],
        corrects: 0,
        //3.
        question: "Mi a mű műfaja?",
        answers: ["Eposz", "Lírai versciklus", "Drámai költemény", "Történelmi regény"],
        corrects: 2
    }
]
const quizDiv = document.getElementById("quiz");
const tableBody = document.querySelector("answerstable and body");

