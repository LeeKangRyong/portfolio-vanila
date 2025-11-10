class Navigation {
    constructor() {
        this.links = document.querySelectorAll('.navigation a');
    }

    #scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: 'smooth' });
    }

    #handleNavigation(link, e) {
        e.preventDefault();
        const target = link.getAttribute('data-target');
        this.#scrollToSection(target);
    }

    #navigate() {
        this.links.forEach(link => {
            link.addEventListener('click', (e) => this.#handleNavigation(link, e));
        });
    }

    init() {
        this.#navigate();
    }
}

export { Navigation };