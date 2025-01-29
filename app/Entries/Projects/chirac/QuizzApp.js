import Quiz from './Quiz.js';
import Countdown from './Countdown.js';

export default class QuizzApp {
    constructor(quiz){
        this.initQuiz();
        this.jokerEvents();
        this.onClickMobileCta();
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
            this.quiz.resetJokerEffect(document.querySelectorAll('.question__answers-list li'));
            this.showImage();
            this.showQuestion();
            this.showChoices();
            this.progress();
            this.showCurrentGain();

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
    innerElementHtml (datasetSelector, text, dataset){
        let elements = document.querySelectorAll(`[data-quiz='${datasetSelector}']`);

        elements && elements.forEach(element => {
            if(dataset) element.setAttribute(Object.keys(dataset)[0], Object.values(dataset)[0]); 
            element.innerHTML = text; 
        });
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

        let guessHandler = (dataset, guess)=>{
            let currentChoices = document.querySelectorAll(`[data-quiz='${dataset}']`); // One Desktop and one Mobile
            currentChoices.forEach(currentChoice => {
                currentChoice.onclick = () => {
                    this.countdown.destroyCountdown();
                    this.quiz.guess(guess);       
                    this.handleQuiz();
                }
            });
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
        //document.querySelector('.questions-section').setAttribute('data-position', this.quiz.getCurrentQuestion().image.position);
        //container.setAttribute('data-position', this.quiz.getCurrentQuestion().image.position);
        let img = container.querySelector('img') || document.createElement('img');
        
        img.src = this.quiz.getCurrentQuestion().image.url;
        img.alt = this.quiz.getCurrentQuestion().image.alt;
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
            this.quiz.errors.forEach(error=>{
                let err = document.createElement('li');
                err.innerHTML = `${error.text} <span class="false">  ${error.answer}</span>`;
                document.getElementById('errors').appendChild(err);
            }) 
        }
        displayErrors();
    }

    showCurrentGain() {
        const gainsProgress = document.querySelectorAll('.gains-list li.gain');
        
        gainsProgress.forEach((gain, idx) => {
            if(gain.classList.contains('current') && this.quiz.score != idx) gain.classList.remove('current');
            if(this.quiz.score === idx) gain.classList.add('current');
            if(this.quiz.score > idx) gain.classList.add('won');
                
            
        })
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
                joker.classList.add('used');

                switch (jockerType) {
                    case 'Jacques Chirac ou les autres.':
                        this.quiz.chiracOrOtherJoker(document.querySelectorAll('.question__answers-list li'));
                        break;
                    case 'Appelle ton amis Google':
                        this.quiz.callGoogleJoker(this.countdown);
                        break;
                    case '50/50':
                        this.quiz.fiftyFiftyJoker(document.querySelectorAll('.question__answers-list li'));
                        break;
                
                    default:
                        break;
                }
            })
        })
    }

    onClickMobileCta() {
        let mobileCta = document.getElementById('widget-cta');
        mobileCta.addEventListener('click', () => {
            let mobileMenu = document.getElementById('content');
            mobileMenu.classList.toggle('open');
        })
    }

}