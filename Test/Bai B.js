let $answerBlock = document.querySelector(`#answer-block`);
// let Bo=true;

let GetAPI = fetch(`https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple`);
GetAPI.then((resolve) => {
    let jP = resolve.json();
    jP.then((resolve) => {
        console.log(resolve);
        dataArr = resolve.results;
        quizProgram();
    });
});
let txtques = document.querySelector(`#question-txt`);
let contentQues = document.querySelector(`#question-content-txt`);
let $answers = document.querySelectorAll(`.answer-pair .answer`);
let $tellUser = document.querySelector(`#tell-user`);
let score = 0;

let isUserClick = false;
let dataArr;
// let Bo=true;
$tellUser.textContent = "";
function randomAToMax(a, MAX) {
    return Math.floor(Math.random() * (MAX - a)) + a;
}
function shuffleArray(arr) {
    let result = [...arr];
    let randomrr = [...arr];
    for (let i = 0; i < result.length; ++i) {
        let r = randomAToMax(0, randomrr.length);
        result[i] = randomrr[r];
        randomrr = randomrr.filter(item => {
            return item != randomrr[r];
        });
    }
    return result;
}


// function onclickAnswers(Right) {
//     for (let i = 0; i < $answers.length; ++i) {
//         $answers[i].nswers[i]textContent);
//             if (!isUerClick) {
//                 isUserClick = true;
//                 if ($answers[i].textContent == Right) {
//                     $tellUser.textContent = `Xin chúc mừng!!!`;
//                     setTimeout(() => {
//                         score=sore
//                         index++;
//                         quizProgram();
//                         $tellUser.textContent = ``;
//                     }, 500);
let index = 0;

function quizProgram() {
    isUserClick = false;
    if (index < dataArr.length) {
        contentQues.onclick = () => { };
        contentQues.style.visibility = `visible`;
        $tellUser.style.visibility = `visible`;
        $answerBlock.style.visibility = `visible`;
        contentQues.style.backgroundColor = "inherit";

        txtques.textContent = `Câu hỏi ${index + 1}:`;
        contentQues.textContent = dataArr[index].question;
        let Correct = dataArr[index].correct_answer;

        let incorrect = dataArr[index].incorrect_answers;
        let answersTxt = [Correct, ...incorrect];
        let shuffleAnswer = shuffleArray(answersTxt);
        for (let i = 0; i < shuffleAnswer.length; ++i) {
            $answers[i].textContent = shuffleAnswer[i];
        }
        onclickAnswers(Correct);
    } else {
        $tellUser.style.visibility = `hidden`;
        $answerBlock.style.visibility = `hidden`;
        txtques.textContent = `Số điểm bạn đạt được ${score}`;
        contentQues.textContent = `Bạn muốn chơi lại `;
        contentQues.style.backgroundColor = "pink";
        contentQues.onclick = () => {
            score = 0;
            index = 0;
            quizProgram();
        }
    }
}

// if (index < dataArr.length) {
//     $questionContentTxt.onclick = () => { };
//     $questionContentTxt.style.visibility = `none`;
//     $tellUser.style.visibility = `none`;
//     $answerBlock.style.visibility = `none`;
//     $questionContentTxt.style.backgroundColor = "inherit";

//     $questionTxt.textContent = `Câu số ${index + 1}:`;
//     $questionContentTxt.textContent = dataArr[index].question;


//     for (let i = 0; i < shuffleAnswerTxt.length; ++i) {
//         $answers[i].textContent = shuffleAnswerTxt[i];
//     }

function onclickAnswers(Right) {
    for (let i = 0; i < $answers.length; ++i) {
        $answers[i].onclick = () => {
            console.log($answers[i].textContent);
            if (!isUserClick) {
                isUserClick = true;
                if ($answers[i].textContent == Right) {
                    $tellUser.textContent = `Xin chúc mừng!!!`;
                    setTimeout(() => {
                        score=score+20;
                        index++;
                        quizProgram();
                        $tellUser.textContent = ``;
                    }, 500);

                } else {
                    $tellUser.textContent = `Đáp án đúng là ${Right}`;
                    setTimeout(() => {
                        index++;
                        quizProgram();
                        $tellUser.textContent = ``;
                    }, 500);
                    // setTimeout(() => {
                   
                         
                    //     $tellUser.textContent = ``;
                     //     index=index+1;
                    // }, 1000);
                    
                }
            } else {

            }

        };
    }
}