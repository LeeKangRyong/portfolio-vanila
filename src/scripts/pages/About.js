import { ABOUT } from '../../data/aboutData.js';

class About {
    constructor() {
        this.container = document.querySelector('.about');
        this.nextTextDelay = 800;
    }

    #removeDescriptions() {
        const descriptions = this.container.querySelector('p');
        if (descriptions) descriptions.remove();
    }

    #writeText(text) {
        const para = document.createElement('p');
        para.textContent = text;
        para.style.opacity = '0';
        return para;
    }

    #showText(para, delay) {
        setTimeout(() => {
            para.style.opacity = '1';
        }, delay);
    }

    #renderParagraph(text, index) {
        const para = this.#writeText(text);
        this.container.appendChild(para);
        this.#showText(para, index * this.nextTextDelay);
    }

    #renderDescriptions() {
        this.#removeDescriptions();
        ABOUT.DESCRIPTION.forEach((text, index) => {
            this.#renderParagraph(text, index);
        });
    }

    init() {
        this.#renderDescriptions();
    }
}

export { About };