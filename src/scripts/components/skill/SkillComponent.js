class SkillComponent {
    constructor(name, icon) {
        this.name = name;
        this.icon = icon;
    }

    makeSkillComponent() {

        return `
            <div class="skillItem">
                <img src=${this.icon} alt=${this.name} class="skillIcon" />
                <span class="skillDescription">${this.name}</span>
            </div>
        `
    }
}

export { SkillComponent };