const questions = [
    {
        question:"Quel artiste est célèbre pour ses tableaux de tournesols",
        answers: [
            {Text: "vin Vandam ", correct: false},
            {Text: " Jan Gog", correct: false},
            {Text: "vincent van Gogh", correct:true },
            {Text: "dincent Ban Robert ", correct:false },
        ]
    },
    {
        question:"Quel animal est connu comme le Roi de la jungle",
        answers: [
            {Text: "le lion ", correct: true},
            {Text: "le loin", correct: false},
            {Text: "la lion", correct:false },
            {Text: "la loin ", correct:false },
        ]   
    },
    {
        question:"Quel eat la plus haute montagne du monde",
        answers: [
            {Text: "Mont ", correct: false},
            {Text: "Le mont Everest", correct: true},
            {Text: "Everest", correct:false },
            {Text: "Evarest ", correct:false },
        ]   
    },
    {
        question:"Combien d'os y a-t-il dans le corps humain adulte",
        answers: [
            {Text: "220 os", correct: false},
            {Text: "208 os", correct: false},
            {Text: "206 os", correct:true },
            {Text: "188 os", correct:false },
        ]   
    },
    {
        question:"Quel pays a la plus grande population au monde",
        answers: [
            {Text: "Australie ", correct: false},
            {Text: "India", correct: false},
            {Text: "Asia", correct:false },
            {Text: "la Chine ", correct:true },
        ]   
    },
    {
        question:"Quel pays connu comme le Pays du Soleil Levant",
        answers: [
            {Text: "Canada ", correct: false},
            {Text: "Italy", correct: false},
            {Text: "Le Japon", correct:true },
            {Text: "Egypt ", correct:false },
        ]   
    },
    {
        question:"Quelle partie du corps humain produit de l'insuline",
        answers: [
            {Text: "Le pancréas ", correct: true},
            {Text: "Les pommones", correct: false},
            {Text: "Le fois", correct:false},
            {Text: "Le coeur", correct:false },
        ]   
    },
    {
        question:"Quel est le plus grand mammifére au monde",
        answers: [
            {Text: "La baleine ", correct: false},
            {Text: " La baleine bleue", correct: true},
            {Text: "La baleine de mer", correct:false},
            {Text: "La baleine sigaina", correct:false },
        ]   
    },
    {
        question:"Quelle est la capitale de l'Australie",
        answers: [
            {Text: "Banberra ", correct: false},
            {Text: " kanberra", correct: false},
            {Text: "Canberra", correct:true },
            {Text: "Manberra ", correct:false },
        ]   
    },
    {
        question:"Combien y a-t-il de continets dans le monde",
        answers: [
            {Text: "siven ", correct: false},
            {Text: "7", correct: false},
            {Text: "sept", correct:true },
            {Text: "sett ", correct:false },
        ]   
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("Next");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex =0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
startQuiz();