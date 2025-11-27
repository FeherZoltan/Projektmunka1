
// Egységes, működő kvízlogika a jelenlegi index.html-hez
const questions = [
    { subject: "történelem", question: "Mikor tört ki Pesten a forradalom?", options: ["1848. március 12.", "1848. március 15.", "1848. április 14", "1848. június 1."], answer: 1 },
    { subject: "történelem", question: "Ki vezette a magyar honvédsereg főparancsnokságát a szabadságharc nagy részében?", options: ["Kossuth Lajos", "Görgei Artúr", "Bem József", "Batthyány Lajos"], answer: 1 },
    { subject: "történelem", question: "Hol fogalmazták meg a 12 pontot?", options: ["Pozsony", "Debrecen", "Buda", "Pest"], answer: 3 },
    { subject: "történelem", question: "Mi volt a szabadságharc végének szimbolikus dátuma (a világosi fegyverletétel)?", options: ["1849. május 1.", "1849. június 13.", "1849. augusztus 13.", "1849. október 6."], answer: 2 },
    { subject: "matematika", question: "Mennyi a sin(30°) értéke?", options: ["0", "1/2", "√3/2", "1"], answer: 1 },
    { subject: "matematika", question: "Mennyi a cos(60°) értéke?", options: ["1", "√2/2", "1/2", "0"], answer: 2 },
    { subject: "matematika", question: "Mekkora a tg(45°)?", options: ["0", "1", "√3", "1/√3"], answer: 1 },
    { subject: "magyar", question: "Ki írta Az ember tragédiáját?", options: ["Arany János", "Madách Imre", "Vörösmarty Mihály", "Móricz Zsigmond"], answer: 1 },
    { subject: "magyar", question: "Kik a mű két fő állandó szereplői, akik végigkísérik a színeket?", options: ["Ádám és Lucifer", "Éva és Péter", "Lucifer és Mefisztó", "Ádám és József"], answer: 0 },
    { subject: "magyar", question: "Mi a mű műfaja?", options: ["Eposz", "Lírai versciklus", "Drámai költemény", "Történelmi regény"], answer: 2 }
];

let currentIndex = 0;
let score = 0;

const questionNumberEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const resultsBtn = document.getElementById('results-btn');
const resultsContainer = document.getElementById('results-container');
const totalScoreEl = document.getElementById('total-score');
const answersTbody = document.querySelector('#answers-table tbody');

function loadQuestion() {
    const q = questions[currentIndex];
    questionNumberEl.textContent = `Kérdés ${currentIndex + 1}`;
    questionTextEl.textContent = q.question;

    // Clear previous options
    optionsEl.innerHTML = '';

    q.options.forEach((opt, idx) => {
        const label = document.createElement('label');
        label.className = 'list-group-item d-flex align-items-center';

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'option';
        radio.value = idx;
        radio.className = 'form-check-input me-2';

        radio.addEventListener('change', () => {
            nextBtn.disabled = false;
        });

        label.appendChild(radio);
        label.appendChild(document.createTextNode(opt));
        optionsEl.appendChild(label);
    });

    // Disable next until selection
    nextBtn.disabled = true;
}

function subjectClass(subject) {
    if(subject === 'matematika') return 'subject-math';
    if(subject === 'történelem') return 'subject-history';
    if(subject === 'magyar') return 'subject-lit';
    return '';
}

function addAnswerRow(questionObj, selectedText, correct) {
    const tr = document.createElement('tr');
    tr.className = subjectClass(questionObj.subject);

    const noTd = document.createElement('td');
    noTd.textContent = answersTbody.children.length + 1;

    const subjTd = document.createElement('td');
    subjTd.textContent = questionObj.subject;

    const qTd = document.createElement('td');
    qTd.textContent = questionObj.question;

    const ansTd = document.createElement('td');
    ansTd.textContent = selectedText;

    const evalTd = document.createElement('td');
    evalTd.textContent = correct ? 'Jó' : 'Hibás';

    tr.appendChild(noTd);
    tr.appendChild(subjTd);
    tr.appendChild(qTd);
    tr.appendChild(ansTd);
    tr.appendChild(evalTd);

    answersTbody.appendChild(tr);
}

nextBtn.addEventListener('click', () => {
    const selected = document.querySelector('input[name="option"]:checked');
    if (!selected) return;
    const selectedIndex = Number(selected.value);
    const q = questions[currentIndex];
    const selectedText = q.options[selectedIndex];
    const correct = selectedIndex === q.answer;
    if (correct) score += 1;

    addAnswerRow(q, selectedText, correct);

    currentIndex += 1;
    if (currentIndex < questions.length) {
        loadQuestion();
    } else {
        // End of quiz
        nextBtn.style.display = 'none';
        resultsBtn.style.display = 'inline-block';
    }
});

resultsBtn.addEventListener('click', () => {
    totalScoreEl.textContent = `${score} / ${questions.length}`;
    resultsContainer.style.display = 'block';
    resultsBtn.disabled = true;
});

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
});

            q.options.forEach((opt, idx) => {
                const label = document.createElement('label');
                label.className = 'list-group-item d-flex align-items-center';

                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'option';
                radio.value = idx;
                radio.className = 'form-check-input me-2';

                radio.addEventListener('change', () => {
                    nextBtn.disabled = false;
                });

                label.appendChild(radio);
                label.appendChild(document.createTextNode(opt));
                optionsEl.appendChild(label);
            });

            // Disable next until selection
            nextBtn.disabled = true;
        

        function subjectClass(subject) {
            if(subject === 'matematika') return 'subject-math';
            if(subject === 'történelem') return 'subject-history';
            if(subject === 'magyar') return 'subject-lit';
            return '';
        }

        function addAnswerRow(questionObj, selectedText, correct) {
            const tr = document.createElement('tr');
            tr.className = subjectClass(questionObj.subject);

            const noTd = document.createElement('td');
            noTd.textContent = answersTbody.children.length + 1;

            const subjTd = document.createElement('td');
            subjTd.textContent = questionObj.subject;

            const qTd = document.createElement('td');
            qTd.textContent = questionObj.question;

            const ansTd = document.createElement('td');
            ansTd.textContent = selectedText;

            const evalTd = document.createElement('td');
            evalTd.textContent = correct ? 'Jó' : 'Hibás';

            tr.appendChild(noTd);
            tr.appendChild(subjTd);
            tr.appendChild(qTd);
            tr.appendChild(ansTd);
            tr.appendChild(evalTd);

            answersTbody.appendChild(tr);
        }

        nextBtn.addEventListener('click', () => {
            const selected = document.querySelector('input[name="option"]:checked');
            if (!selected) return;
            const selectedIndex = Number(selected.value);
            const q = questions[currentIndex];
            const selectedText = q.options[selectedIndex];
            const correct = selectedIndex === q.answer;
            if (correct) score += 1;

            addAnswerRow(q, selectedText, correct);

            currentIndex += 1;
            if (currentIndex < questions.length) {
                loadQuestion();
            } else {
                // End of quiz
                nextBtn.style.display = 'none';
                resultsBtn.style.display = 'inline-block';
            }
        });

        resultsBtn.addEventListener('click', () => {
            totalScoreEl.textContent = `${score} / ${questions.length}`;
            resultsContainer.style.display = 'block';
            resultsBtn.disabled = true;
        });

        document.addEventListener('DOMContentLoaded', () => {
            loadQuestion();
        });

