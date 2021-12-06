let quiz = document.getElementById("quiz");
let quizQuestions = document.getElementById("quizQuestions");
let main = document.getElementById("main")

let questionAnswer = {
    "What Roman politician, a member of the First Triumvarite along with Caesar, was killed at the battle of Carrhae?": "Marcus Licinius Crassus",
    "What river did Julius Caesar famously cross prior to his march on Rome in 49 B.C.?": "Rubicon",
    "What was the decisive battle in the Roman civil war between Agustus and Mark Antony?": "Actium",
    "In what year did Constantinople fall to the Ottoman Empire?": "1453",
    "What Chiricahua Apache cheif made a peace agreement with the United States in 1872?": "Cochise",
    "What future president fought at the battle of Tippecannoe in 1811?": "William Henry Harrison",
    "What was the name of Tecumseh's brother?": "Tenskwatawa",
    "In what mountain range in northern Mexico did General Crook and Geronimo have their meeting?": "Sierra Madre",
    "On what river did Napolean hold a conferance on a raft with Czar Alexander of Russia?": "Niemen",
    "What peninsula of Egyptian territory did Israel occupy in 1969?": "Sinai"
};


let c = 1;

for (var question in questionAnswer) {
    let questionCard = document.createElement('li');
    questionCard.classList.add('list-group-item');
    questionCard.innerHTML = `
    <div class="card" id="question${c}">
        <div class="card-header" id="header${c}"> Question ${c} </div>
        <div class="card-body">
            <div id="body${c}">${question}</div>
            <input type="text" placeholder="Your answer here" id="answer${c}" class="form-control">
        </div>

    </div>
    `;
    c++;

    quizQuestions.append(questionCard);
}

quiz.addEventListener('submit', function (event) {
    event.preventDefault();
    let score = 0;
    let i = 1;
    while (i < c) {
        let currentHeader = document.getElementById(`header${i}`);
        let currentBody = document.getElementById(`body${i}`);
        let currentAnswer = document.getElementById(`answer${i}`).value;
        let questionText = currentBody.textContent;
        console.log(questionText);
        console.log(currentAnswer);
        console.log(questionAnswer[questionText]);
        if (currentAnswer.toLowerCase() == questionAnswer[questionText].toLowerCase()) {
            score++;
            currentHeader.classList.add('bg-success')
        }
        else {
            currentHeader.classList.add('bg-danger')
        };
        i++;
    }
    let scoreMessage = document.createElement('div');
    scoreMessage.id = "score-message"
    scoreMessage.innerHTML = `You scored ${score} correct out of ${c - 1} total questions.
    <a class="btn btn-secondary" href="index.html">Try Again?</a>`
    quizQuestions.append(scoreMessage)


})

