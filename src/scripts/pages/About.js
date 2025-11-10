import { ABOUT } from '../../data/aboutData.js';

class About {
    constructor() {
        this.container = document.querySelector('.aboutText');
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

    #renderText(text, index) {
        const para = this.#writeText(text);
        this.container.appendChild(para);
        this.#showText(para, index * this.nextTextDelay);
    }

    #renderDescriptions() {
        this.#removeDescriptions();
        ABOUT.DESCRIPTION.forEach((text, index) => {
            this.#renderText(text, index);
        });
    }

    #showMyInfo() {
    const infoData = [
        { label: '이름', value: ABOUT.NAME },
        { label: '출생년도', value: ABOUT.AGE }
    ];

    const aboutTitle = document.querySelector('.aboutTitle');
    
    infoData.forEach(({ label, value }) => {
        const p = document.createElement('p');
        p.textContent = `${label}: ${value}`;
        aboutTitle.appendChild(p);
    });
}

    init() {
        this.#renderDescriptions();
        this.#showMyInfo()
    }
}

export { About };