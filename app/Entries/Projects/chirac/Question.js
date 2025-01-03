//--------------------------------------------
//    Class Question
//--------------------------------------------
export default class Question {
    constructor(text, choices, answer,image){
        this.text = text,
        this.choices = choices,
        this.answer = answer
        this.image = image;
        this.time = 60;
    }

    isCorrectAnswer(choice){
        return this.answer === choice;
    }
}