import { SkillComponent } from "./SkillComponent.js";
import { useAsset } from "../../utils/useAsset.js";

class SkillListComponent {
    constructor({ title, data }) {
        this.title = title;
        this.data = data;
    }

    async #getSkillInfo() {
        let skillComponent = '';

        const iconNames = this.data.ICON;
        const skillNames = this.data.NAME;

        for (let i = 0; i < iconNames.length; i++) {
            const iconName = iconNames[i];
            const skillName = skillNames[i];

            const iconPath = await useAsset(iconName);

            const skill = new SkillComponent(skillName, iconPath);

            skillComponent += skill.makeSkillComponent();
        }

        return skillComponent;
    }

    async makeSkillListComponent() {
        const skillComponent = await this.#getSkillInfo();

        return `
            <div class="skill">
                <h2>${this.title}</h2>
                <div class="skillContents">
                    ${skillComponent}
                </div>
            </div>
        `;
    }
}

export { SkillListComponent };