const quizData = [
    {
        question:"HTMLda o'rtasida chiziq mavjud kod berilgan qatorni toping",
        a: "del",
        b: "u",
        c: "mark",
        d: "i",
        correct : "a",
    },
    {
        question:"HTMLda 1rem necha px ga teng?",
        a: "15px",
        b: "16px",
        c: "17px",
        d: "20px",
        correct : "b",
    },
    {
        question:"HTMLda formani tozalab o'chirib yuboradigan input qaysi?",
        a: "radio",
        b: "text",
        c: "submit",
        d: "reset",
        correct : "d",
    },
    {
        question:"CSSda opacity qanday vazifani bajaradi?",
        a: "shaffoflik",
        b: "rang",
        c: "kattalik",
        d: "ramka",
        correct : "a",
    },
    {
        question:"CSSda rasm markazda joylashgan, takrorlanmaydigan va scroll qilinsa ham markazda turadigan kod berilgan qatorni toping",
        a: "background: url() center no-repeat scroll;",
        b: "background: url() center no-repeat fixed;",
        c: "background: url() center no-repeat color fixed;",
        d: "background: url() center repeat-x fixed;",
        correct : "b",
    },
    {
        question:"CSSda id nomi qanday chaqiriladi?",
        a: "#id",
        b: ".id",
        c: "id",
        d: ">id",
        correct : "a",
    },
    {
        question:"CSSda 3px qora solid turdagi ramka qanday hasil qilinadi?",
        a: "border:3px solid black;",
        b: "border:3px solid black",
        c: "border:3px double black;",
        d: "border-width:3px; border-style:solid;",
        correct : "a",
    },
    {
        question:"CSSda universal selector qaysi?",
        a: "body{}",
        b: "*{}",
        c: "head{}",
        d: "html{}",
        correct : "b",
    },
    {
        question:"CSSda rgb(0,0,0) qaysi rang?",
        a: "qora",
        b: "oq",
        c: "yashil",
        d: "sariq",
        correct : "a",
    },
    {
        question:"CSSda xatboshi qanday hosil qilinadi?",
        a: "text-transform",
        b: "text-indent",
        c: "line-height",
        d: "letter-spacing",
        correct : "b",
    },
    {
        question:"CSSda text-shadow to'g'ri yozilgan qatorni toping",
        a: "text-shadow:3px black;",
        b: "text-shadow:3px 3px black",
        c: "text-shadow:3px 3px black;",
        d: "text-shadov:3px 3px black;",
        correct : "b",
    },
    {
        question:"CSSda matndagi barcha harflarni katta harf qiluvchi kod qaysi?",
        a: "text-transform:uppercase;",
        b: "text-transform:lowercase;",
        c: "text-transform:capitalize;",
        d: "font-transform:uppercase;",
        correct : "a",
    },
    {
        question:"CSSda belgilangan hududdan tashqarida qolgan kodlarni yashirish qaysi?",
        a: "overflow:scroll;",
        b: "overflow-x:hidden;",
        c: "overflow:hidden;",
        d: "overflow:visible;",
        correct : "c",
    },
    {
        question:"CSSda ikkita element ustma ust joylashib qolsa, ust tarafdagi elementni qanday qilib ost tomonga o'tkizamiz?",
        a: "z-index: 100000;",
        b: "position:absolute;",
        c: "float:left;",
        d: "z-index:-1;",
        correct : "d",
    },
    {
        question:"HTMlda input kodi ichida ko'rinib turadigan yozuvni qanday hosil qilamiz?",
        a: "placeholder",
        b: "id",
        c: "value",
        d: "submit",
        correct : "a",
    },

];
const quiz = document.getElementById("quiz");
    const answerElements = document.querySelectorAll(".answer");

const questionElement = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz  = 0;
let score = 0;
const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement)=>{
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};
const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer){
        if(answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if(currentQuiz < quizData.length) loadQuiz();
        else{
            quiz.innerHTML = `
            <h2> Sizning to'gri javoblaringiz ${score}/${quizData.length} ta</h2>
            <button onclick="history.go(0)">Qaytadan boshlash</button>`
        }
    }
});