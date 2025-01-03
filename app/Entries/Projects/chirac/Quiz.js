import Question from './Question';


export default class Quiz{
    constructor(questions){
        this.score = 0;
        this.questions = this.createQuestionObjects(questions);
        this.currentQuestionIndex = 0;
        this.errors = []
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
        console.log(this.currentQuestionIndex);
        this.currentQuestionIndex++;
    }
    hasEnded(){
       return this.currentQuestionIndex >= this.questions.length;
    }
}