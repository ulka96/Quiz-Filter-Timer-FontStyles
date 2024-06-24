const questions = [
    {
        question: "What is the capital of France?",
        answers: {
            a:"Berlin",
            b:"Madrid",
            c:"Paris",
            d:"Rome",
        },
        correct: "Paris",
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: {
            a:"gold",
            b:"iron",
            c:"diamond",
            d:"platinum",
        },
        correct: "diamond",
    },
    {
        question: "What color is a Himalayan Puppy?",
        answers: {
            a:"blue",
            b:"green",
            c:"red",
            d:"white",
        },
        correct: "white",
    },
    {
        question: "What is the capital of France?",
        answers: {
            a:"Berlin",
            b:"Rome",
            c:"Paris",
            d:"London",
        },
        correct: "Paris",
    },
    {
        question: "Who is known as the Father of Computers?",
        answers: {
            a:"Charles Babbage",
            b:"Bill Gates",
            c:"Alan Turing",
            d:"Steve Jobs",
        },
        correct: "Charles Babbage",
    },
];

const totalQuestions = document.getElementById("total");
const currentQuestions = document.getElementById("current");
const questionContainer = document.getElementById("questionContainer");
const question = document.getElementById("question");
const answerBtns = document.querySelectorAll(".answer");

let index;
if (localStorage.getItem("currentIndex")) {
    index = JSON.parse(localStorage.getItem("currentIndex"));
} else {
    index = 0;
}

totalQuestions.textContent = questions.length;
currentQuestions.textContent = index + 1;

const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = `rgb(${r}, ${g}, ${b})`;

    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    const textColor = luminance > 186 ? "black" : "white";

    return { backgroundColor: color, textColor: textColor };
};

const displayQuestion = () => {
    question.textContent = questions[index].question;

    const { backgroundColor, textColor } = getRandomColor();
    questionContainer.style.backgroundColor = backgroundColor;
    questionContainer.style.color = textColor;

    const [a, b, c, d] = answerBtns;
    a.textContent = questions[index].answers.a;
    b.textContent = questions[index].answers.b;
    c.textContent = questions[index].answers.c;
    d.textContent = questions[index].answers.d;

    currentQuestions.textContent = index + 1;
    localStorage.setItem("currentIndex", index);
};

const clearAnswerStyles = () => {
    answerBtns.forEach((answerBtn) => {
        answerBtn.classList.remove("bg-red-500", "bg-green-500");
    });
};

answerBtns.forEach((answerBtn) => {
    answerBtn.addEventListener("click", (event) => {
        const givenAnswer = answerBtn.textContent;
        const correctAnswer = questions[index].correct;

        const correctAnswerElement = [...answerBtns].find(
            (answerBtn) => answerBtn.textContent === correctAnswer
        );

        if (correctAnswer === givenAnswer) {
            answerBtn.classList.add("bg-green-500");
        } else {
            answerBtn.classList.add("bg-red-500");
            setTimeout(() => {
                correctAnswerElement.classList.add("bg-green-500");
            }, 500);
        }

        if (index < questions.length - 1) {
            index++;
        } else {
            index = 0; // Loop back to the first question
        }
        localStorage.setItem("currentIndex", index);

        setTimeout(() => {
            clearAnswerStyles();
            displayQuestion();
        }, 3000); // 3 seconds delay to show the next question
    });
});

displayQuestion();