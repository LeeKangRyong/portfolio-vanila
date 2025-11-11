class HistoryComponent {
    constructor(title, duration, description) {
        this.title = title;
        this.duration = duration;
        this.description = description;
    }

    makeHistoryComponent() {
        return `
            <div class="history">
                <div class="titleWrapper">
                    <h3 class="title">${this.title}</h3>
                    <p class="duration">${this.duration}</p>
                </div>
                <div class="verticalLine"></div>
                <div class="descWrapper">
                    <p class="description">${this.description}</p>
                </div>
            </div>
        `;
    }
}

export { HistoryComponent };