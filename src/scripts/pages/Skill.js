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
        let skill = '';

        for (let skillObj of SKILL) {
            const skillComponent = this.#addSkillComponent(skillObj);
            skill += await skillComponent.makeSkillListComponent();
        }

        this.target.innerHTML = skill;
    }

    init() {
        this.#renderSkill();
    }
}

export { Skill };