import Question from './Question';


export default class Quiz{
    constructor(questions){
        this.score = 0;
        this.questions = this.createQuestionObjects(questions);
        this.currentQuestionIndex = 0;
        this.errors = [];
    }

    createQuestionObjects(questions){
        return questions.map(q => new Question(q.question, q.answers, q.correct_answer, q.image));
    }

    getCurrentQuestion(){
        return this.questions[this.currentQuestionIndex];
    }

    decrementCurrentQuestionTime() {
        this.getCurrentQuestion().time--;
    };

    guess(answer){
        if(answer && this.getCurrentQuestion().isCorrectAnswer(answer)){
            this.score ++;
        }else{
            this.errors.push(this.getCurrentQuestion());
        }
        this.currentQuestionIndex++;
    }
    hasEnded(){
       return this.currentQuestionIndex >= this.questions.length;
    }


    /**
     * Reset Joker effect(display all choices)
     */
    resetJokerEffect(choices) {
        choices.forEach(choice => {
            choice.style.display = 'block';
        })
    }

    /**
     * Jacques Chirac or other joker
     */
    chiracOrOtherJoker(choices) {
        
        choices.forEach(choice => {
            if(this.getCurrentQuestion().answer == 'Jacques Chirac') {
                if(choice.dataset.value !== 'Jacques Chirac') choice.style.display = 'none';
            } else {
                if(choice.dataset.value == 'Jacques Chirac') choice.style.display = 'none';
            }
        })
    }

    /**
     * Call Google Joker
     */
    callGoogleJoker(countdown) {
        countdown.destroyCountdown();
        window.open("https://www.google.com/", "_blank");
    }

    /**
     * 50/50 Joker
     */
    fiftyFiftyJoker(choices) {
        let choicesElements = Array.from(choices).filter(choice => choice.dataset.value !== this.getCurrentQuestion().answer);
        
        choicesElements[0].style.display = 'none';
        choicesElements[2].style.display = 'none';
    }
}