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
        corrects: 2
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
let current = 0;
const id = `q${n}_c${i}`;
const label = document.createElement('label');
label.style.display = 'block';
label.style.cursor = 'pointer';


const radio = document.createElement('input');
radio.type = 'radio';
radio.name = `q${n}`;
radio.value = i;
radio.id = id;


radio.addEventListener('change', () => {
answers.querySelectorAll('label').forEach(l => l.style.background = '');
label.style.background = '#eef';
});


label.appendChild(radio);
const span = document.createElement('span');
span.textContent = ' ' + choice;
label.appendChild(span);
answers.appendChild(label);
;


quizArea.appendChild(answers);



function getChosen(qIndex){
const radios = document.getElementsByName(`q${qIndex}`);
for(const r of radios) if(r.checked) return Number(r.value);
return null;
}


function logAnswer(qIndex){
const chosen = getChosen(qIndex);
const tr = document.createElement('tr');
const no = document.createElement('td'); no.textContent = logTbody.children.length + 1;
const qCell = document.createElement('td'); qCell.textContent = questions[qIndex].q;
const chosenCell = document.createElement('td'); chosenCell.textContent = chosen === null ? '—' : questions[qIndex].choices[chosen];
const okCell = document.createElement('td');


if(chosen === null){
okCell.textContent = 'Nem válaszolt';
okCell.className = '';
} else if(chosen === questions[qIndex].a){
okCell.textContent = 'Igen';
okCell.className = 'correct';
} else {
okCell.textContent = 'Nem';
okCell.className = 'wrong';
}


tr.appendChild(no); tr.appendChild(qCell); tr.appendChild(chosenCell); tr.appendChild(okCell);
logTbody.appendChild(tr);


if(chosen === questions[qIndex].a) score += 1;
}


nextBtn.addEventListener('click', () => {
// bejegyezzük az éppen aktuális kérdést
logAnswer(current);
// léptetés
if(current < questions.length - 1){
current += 1;
renderQuestion(current);
} else {
// ha nincs több kérdés, kiírjuk az eredményt
finishQuiz();
}
});


finishBtn.addEventListener('click', () => {
// rögzítjük az aktuális választ (ha még nincs rögzítve)
logAnswer(current);
finishQuiz();
});


function finishQuiz(){
// letiltjuk a gombokat és kiírjuk az összesített eredményt
nextBtn.disabled = true;
finishBtn.disabled = true;
resultDiv.innerHTML = `Pontszám: <strong>${score}</strong> / ${questions.length}`;
}


// Kezdés
renderQuestion(0);

