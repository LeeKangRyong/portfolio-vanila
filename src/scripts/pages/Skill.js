import { SkillListComponent } from "../components/skill/SkillListComponent.js";
import { SKILL } from "../../data/skillData.js";

class Skill {
    constructor () {
        this.target = document.querySelector('#skill .skillWrapper');
    }

    #addSkillComponent(skill) {
        const skillComponent = new SkillListComponent({
            title: skill.TITLE,
            data: skill
        });

        return skillComponent;
    }

    async #renderSkill() {
        const promises = SKILL.map(skillObj => {
            const skillComponent = this.#addSkillComponent(skillObj);
            return skillComponent.makeSkillListComponent();
        });

        const skillHtmlArray = await Promise.all(promises);

        this.target.innerHTML = skillHtmlArray.join('');
    }

    init() {
        this.#renderSkill();
    }
}

export { Skill };