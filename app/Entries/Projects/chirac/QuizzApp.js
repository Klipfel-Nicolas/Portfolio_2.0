import Quiz from './Quiz.js';
import Countdown from './Countdown.js';

export default class QuizzApp {
    constructor(quiz){
        this.initQuiz();
        this.jokerEvents();
    }

    /**
     * Init Quiz
     * fetch questions datas
     * create Quiz instance
     * create Countdown instance
     * handle Quiz
     */
    async initQuiz() {
        // Fetch from controller questions datas
        this.questionArray = await this.fetchDatas(`${process.env.APP_URL}project/jacques_chirac/datas`);
        this.quiz = new Quiz(this.questionArray);
        this.countdown = new Countdown(document.getElementById("countdown"), this.quiz.getCurrentQuestion().time, this.quiz);
        this.handleQuiz();
    }


    /**
     * fetch datas
     * @param {String} url 
     * @returns 
     */
    async fetchDatas(url) {
        try {
            let data = await fetch(url);
            data = await data.json();

            return data;
        } catch (error) {
            console.error('Error fetching datas', error);
            return [];
        }
    }

    /**
     * Handle Quiz
     */
    handleQuiz() {
        if(this.quiz.hasEnded()){
            this.showEndQuiz();
        }else{ 
            this.resetJokerEffect();
            this.showImage();
            this.showQuestion();
            this.showChoices();
            this.progress();

            this.countdown.mountCountdown();
            this.onCountdownEnd();
        }
    }

    /* ---------------- Display functions ---------------- */

    /**
     * Inner HTML element
     * @param {String} id 
     * @param {String} text 
     * @param {Object} dataset 
     */
    innerElementHtml (id, text, dataset){
        let element = document.getElementById(id);
        if(dataset) element.setAttribute(Object.keys(dataset)[0], Object.values(dataset)[0]); 
        element.innerHTML = text; 
    }

    /**
     * Show the current question
     */
    showQuestion() {     
        this.innerElementHtml("question", this.quiz.getCurrentQuestion().text);
    }

    /**
     * Show the current choices
     */
    showChoices() {
        let choices = this.quiz.getCurrentQuestion().choices;

        let guessHandler = (id, guess)=>{
            document.getElementById(id).onclick = () => {
                this.countdown.destroyCountdown();
                this.quiz.guess(guess);       
                this.handleQuiz();
            }
        }
        
        choices.forEach((choice, i) => {
            let dataAttribute = {'data-value': choice};
            this.innerElementHtml(`choice${i}`, choice, dataAttribute);
            guessHandler(`choice${i}`, choice);
        });    
    }

    /**
     * Show the current image
     */
    showImage(){
        let container = document.getElementById('question-image');
        let img = container.querySelector('img') || document.createElement('img');
        
        img.src = this.quiz.getCurrentQuestion().image.url;
        img.alt = this.quiz.getCurrentQuestion().image.alt;
        container.classList.add(`${this.quiz.getCurrentQuestion().image.position}`);
    }

    /**
     * Show the current progress (question number)
     */
    progress() {
        let currentQuestionNumber = this.quiz.currentQuestionIndex + 1;
        this.innerElementHtml('progress', `Question <span>0${currentQuestionNumber}</span> / <span>0${this.quiz.questions.length}</span>`);
    }

    /**
     * Show the end of the quiz
     */
    showEndQuiz(){        
        let endQuizHTML = `
            <h1>Fin de Citations !</h1>
            <h3>
                Votre score est de : ${this.quiz.score} / ${this.quiz.questions.length}
            </h3>
            <ul id="errors">
               
            </ul>
        `
        this.innerElementHtml("quiz", endQuizHTML);

        let displayErrors = ()=>{
            console.log(this.quiz.errors);
            this.quiz.errors.forEach(error=>{
                let err = document.createElement('li');
                err.innerHTML = `${error.text} <span class="false">  ${error.answer}</span>`;
                document.getElementById('errors').appendChild(err);
            }) 
        }
        displayErrors();
    }

    /* ---------------- JOKERS Functions ---------------- */

    /**
     * Reset Joker effect(display all choices)
     */
    resetJokerEffect() {
        let choicesElements = document.querySelectorAll('.question__answers-list li');
        choicesElements.forEach(choice => {
            choice.style.display = 'block';
        })
    }

    /**
     * Jacques Chirac or other joker
     */
    chiracOrOtherJoker() {
        let choicesElements = document.querySelectorAll('.question__answers-list li');
        
        choicesElements.forEach(choice => {
            if(this.quiz.getCurrentQuestion().answer == 'Jacques Chirac') {
                if(choice.dataset.value !== 'Jacques Chirac') choice.style.display = 'none';
            } else {
                if(choice.dataset.value == 'Jacques Chirac') choice.style.display = 'none';
            }
        })
    }

    /**
     * Call Google Joker
     */
    callGoogleJoker() {
        this.countdown.destroyCountdown();
        window.open("https://www.google.com/", "_blank");
    }

    /**
     * 50/50 Joker
     */
    fiftyFiftyJoker() {
        let choicesElements = Array.from(document.querySelectorAll('.question__answers-list li')).filter(choice => choice.dataset.value !== this.quiz.getCurrentQuestion().answer);
        
        choicesElements[0].style.display = 'none';
        choicesElements[2].style.display = 'none';
    }



    /* ---------------- LISTENERS ---------------- */

    /**
     * Listen on countdown end
     */
    onCountdownEnd(){
        if(this.countdown.isTimeOut) {
            this.countdown.isTimeOut = false;
            this.countdown.destroyCountdown();
            this.quiz.guess();       
            this.handleQuiz();
        } else {
            window.requestAnimationFrame(() => this.onCountdownEnd());
        }
    }

    /**
     * 
     */
    jokerEvents() {
        let jokers = document.querySelectorAll('.joker__item');
        jokers.forEach(joker => {
            joker.addEventListener('click', (e) => {
                let jockerType = joker.dataset.type;
                console.log(jockerType);

                switch (jockerType) {
                    case 'Jacques Chirac ou les autres.':
                        this.chiracOrOtherJoker();
                        break;
                    case 'Appelle ton amis Google':
                        this.callGoogleJoker();
                        break;
                    case '50/50':
                        this.fiftyFiftyJoker();
                        break;
                
                    default:
                        break;
                }
            })
        })
    }

}