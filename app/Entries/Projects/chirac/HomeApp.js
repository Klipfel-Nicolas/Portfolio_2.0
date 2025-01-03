
export default class HomeApp {
    constructor(){
        this.citations = {
            list_elements: document.querySelectorAll('.citations__item') || [],
            elpase_element: document.querySelector('.citations__elapse') || null,
            index_element: document.querySelector('.citations__index') || null,
            currentIndex: 0,
            duration: 10000,
            interval_out: null
        };   
        
        this.playCitations();
    }

    /**
     * Launch citations carousel
     */
    playCitations() {
        this.citations.list_elements[this.citations.currentIndex].classList.add('active');

        setInterval(() => {
            this.printCitation();
        },this.citations.duration);
    };

    /**
     * Print the next citation
     */
    printCitation() {
        let currentActive = document.querySelector('.citations__item.active') || null;
        
        if(this.citations.currentIndex == (this.citations.list_elements.length - 1)) {
            this.citations.currentIndex = 0;
        } else {
            this.citations.currentIndex++;
        }

        if(currentActive) {
            currentActive.classList.add('out');

            // handle fade out effect
            this.interval_out = setTimeout(() => {
                currentActive.classList.remove('active');
                currentActive.classList.remove('out');
                this.citations.list_elements[this.citations.currentIndex].classList.add('active');
                clearTimeout(this.interval_out);
            }, 1000);
            
        }
    }
}