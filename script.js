const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];


//get all the elements whichever is needed 

//quiz container
let quiz=document.getElementById('quiz')

//questionHeading
let questionHeading=document.getElementById('questionHeading')

//AlloptionList radio button

let optionList=document.querySelectorAll('.optionList')
console.log(optionList)

//EachOptionLabel

let aOption=document.getElementById('aOption')
let bOption=document.getElementById('bOption')
let cOption=document.getElementById('cOption')
let dOption=document.getElementById('dOption')


//submit button
let submitBtn=document.getElementById('submit')

// _______________________________________________________//

let score=0;
let currentQuizCount=0;
console.log(quizData[currentQuizCount])

//1st Question should load when the App is loaded in the browser
loadQuiz()
function loadQuiz(){
    deSelectOption()
    let currentQuizData=quizData[currentQuizCount];
    questionHeading.innerText=currentQuizData.question
    aOption.innerText=currentQuizData.a
    bOption.innerText=currentQuizData.b
    cOption.innerText=currentQuizData.c
    dOption.innerText=currentQuizData.d
}

//deselectOption

function deSelectOption(){
    optionList.forEach((element)=>{element.checked=false})
}

//selection of options:

function getSelected(){
    let selectedAnswer;
    optionList.forEach((element)=>{
        if(element.checked){
            selectedAnswer=element.id;
            //console.log(selectedAnswer)
        }
    })
    return selectedAnswer;
}
//getSelected()


submitBtn.addEventListener('click',()=>{
    let answer=getSelected()
    console.log(answer)
    if(answer){
        if(answer===quizData[currentQuizCount].correct){
            score++;

        }
        currentQuizCount++;

        if(currentQuizCount<quizData.length){
            loadQuiz()
        }

        else{
            quiz.innerHTML=(
                `
                <h2>You Scored ${score}/${quizData.length}</h2>
                <button class="submit" onClick=location.reload()>Reload</button>
                `
            )
            document.body.style.backgroundImage="url('https://i.ibb.co/frqqx3S/glitterimg.jpg')";
                quiz.style.backgroundColor="transparent";
                quiz.style.border="none";
            
        }
    }
})