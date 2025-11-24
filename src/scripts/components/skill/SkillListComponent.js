import { SkillComponent } from "./SkillComponent.js";
import { useAsset } from "../../utils/useAsset.js";

class SkillListComponent {
  constructor({ title, data }) {
    this.title = title;
    this.data = data;
  }

  async #getSkillInfo() {
    const iconNames = this.data.ICON;
    const skillNames = this.data.NAME;

    const iconPathPromises = iconNames.map((iconName) => useAsset(iconName));

    const iconPaths = await Promise.all(iconPathPromises);

    let skillComponent = "";
    iconPaths.forEach((iconPath, i) => {
      if (iconPath) {
        //
        const skillName = skillNames[i];
        const skill = new SkillComponent(skillName, iconPath);
        skillComponent += skill.makeSkillComponent();
      }
    });

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
