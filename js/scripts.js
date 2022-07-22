// Custom Scripts
const startBtn = document.querySelector('.quiz__start-btn'),
    questionContent = document.querySelectorAll('.questions__content'),
    questionItem = document.querySelector('.questions__item'),
    questionBtn = document.querySelector('.questions__btn'),
    quizFinish = document.querySelector('.quiz__finish-test'),
    result = document.querySelector('.quiz__result'),
    allPages = document.querySelector('.quiz__all-pages'),
    reload = document.querySelector('.quiz__reload')

let quizPosition = 0
startBtn.addEventListener('click', () => {
    startBtn.parentNode.classList.remove('visible')
    questionContent[quizPosition].classList.add('visible')
    questionItem.classList.add('pattern')
    questionBtn.classList.add('visible')
    quizPosition++
})


/*Question Answers*/
const quizAnswers = ['b', 'a', 'd']

/*Function for get answers*/
let personAnswers = []
function getAnswer(){
    questionItem.addEventListener('click', (event) => {
        let et = event.target
        if(et.name == quizPosition){
            personAnswers[quizPosition] = et.value
        }
    })
}

/*Function for check answers*/
let correct = 0
function checkAnswer(){
    personAnswers.shift()
    for(let i = 0; i < quizAnswers.length; i++){
        if(quizAnswers[i] == personAnswers[i]) correct++
    }
    result.textContent = correct
    allPages.textContent = questionContent.length
}

const prev = document.querySelector('.prev'),
    next = document.querySelector('.next')

prev.addEventListener('click', () => {
    if(quizPosition == 1) prev.setAttribute('disabled')
    else prev.removeAttribute('disabled')

    quizPosition--
    questionContent[quizPosition].classList.remove('visible')
    questionContent[quizPosition - 1].classList.add('visible')
    console.log(personAnswers)
})

next.addEventListener('click', () => {
    if(quizPosition == questionContent.length){
        quizFinish.classList.add('visible')
        questionBtn.classList.remove('visible')
        questionItem.classList.remove('pattern')
        checkAnswer(quizAnswers, personAnswers)
    }
    questionContent[quizPosition - 1].classList.remove('visible')
    questionContent[quizPosition].classList.add('visible')
    quizPosition++
    console.log(personAnswers)
})

reload.addEventListener('click', () => {
    location.reload()
})
getAnswer(questionItem)
