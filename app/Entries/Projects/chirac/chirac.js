import HomeApp from './HomeApp.js';
import QuizApp from './QuizzApp.js';

class App {
    constructor() {
        this.currentPage = document.body.id;

        if(this.currentPage == 'home') {
            this.app = new HomeApp();
        } else if(this.currentPage == 'quiz') {
            this.app = new QuizApp();
        }
        
    }
}


// CREATE APP
new App();
  