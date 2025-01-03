

export default class Countdown {
    constructor(element, dots, quiz){
        this.containerHtml = element;
        this.timer = {text: 'seconds', dots: dots};
        this.quiz = quiz;
        this.setInterval = null;
        this.isTimeOut = false;
    }

    /**
     * Create Coundown Container
     */
    createCountdownContainer(){
        const timerHtml = document.createElement('div');
        timerHtml.classList.add('part', this.timer.text);
        timerHtml.style.setProperty("--dots", this.timer.dots);
        this.timer.element = timerHtml;
    }

    /**
     * Create Number element
     */
    setRemainingNumber(){
        const remainingEl = document.createElement("div");
        remainingEl.classList.add("remaining");
        remainingEl.innerHTML = `
                                    <span class="number"></span>
                                `;

        if(this.timer.element) this.timer.element.appendChild(remainingEl);
    }

    /**
     * Create Dots elements
     */
    createDots(){
        for(let i = 0; i < this.timer.dots; i++){
            const dotContainerEl = document.createElement("div");
            dotContainerEl.style.setProperty("--dot-idx", i);
            dotContainerEl.classList.add("dot-container")
            
            const dotEl = document.createElement("div");
            dotEl.classList.add("dot")
            dotContainerEl.append(dotEl);
            this.timer.element.append(dotContainerEl);
        }
    }

    /**
     * Handle Remaining Number and Dots
     * @param {Object} timer 
     * @param {Number} time 
     */
    getRemainingTime(timer, time){
        const remainingNumber = timer.element.querySelector(".number");
        const dots = timer.element.querySelectorAll(".dot");

        /* Remaining Number */
        remainingNumber.innerHTML = time;

        /* Dots */
        dots.forEach((dot, idx)=>{
            dot.dataset.active = idx <= time;
            dot.dataset.lastactive = idx == time;
        })
    }

    /**
     * Start Countdown
     */
    startCountdown(){
        this.setInterval = setInterval(()=>{
            if(this.quiz.getCurrentQuestion().time > 0) {
               this.quiz.decrementCurrentQuestionTime();
               this.getRemainingTime(this.timer, this.quiz.getCurrentQuestion().time);
            } else {
                this.isTimeOut = true;
            } 
        }, 1000);
    }

    /**
     * Stop Countdown
     */
    stopCountdown(){
        clearInterval(this.setInterval);
    }

    /**
     * Mount Countdown
     * in DOM
     * create Dots
     * set Remaining Number
     * start Countdown
     */
    mountCountdown(){
        this.createCountdownContainer();
        this.setRemainingNumber();
        this.createDots();

        this.containerHtml.append(this.timer.element);
        this.getRemainingTime(this.timer, this.quiz.getCurrentQuestion().time);
        this.startCountdown();
    }

    /**
     * Destroy Countdown
     * To avoid conficlts with the next countdown
     * and remove the countdown from the DOM
     */
    destroyCountdown(){
        this.containerHtml.innerHTML = '';
        clearInterval(this.setInterval);
    }
}