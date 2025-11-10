class Navigation {
    constructor() {
        this.sections = [
            { id: 'about', page: './src/pages/about.html' },
            { id: 'history', page: './src/pages/history.html' },
            { id: 'skill', page: './src/pages/skill.html' },
            { id: 'project', page: './src/pages/project.html' },
            { id: 'contact', page: './src/pages/contact.html' }
        ];
    }

    async #loadSection(id, page) {
        const response = await fetch(page);
        const html = await response.text();
        document.getElementById(id).innerHTML = html;
    }

    async loadAll() {
        await Promise.all(
            this.sections.map(section => 
                this.#loadSection(section.id, section.page)
            )
        );
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const loader = new Navigation();
    loader.loadAll();
});