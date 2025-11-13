import { ProjectModalComponent } from "./ProjectModalComponent.js";

class ProjectComponent {
    constructor({ title, thumbnail, description, member, role, duration, fe_stack, github }) {
        this.title = title;
        this.thumbnail = thumbnail;
        this.description = description;
        this.member = member;
        this.role = role;
        this.duration = duration;
        this.fe_stack = fe_stack;
        this.github = github;
    }

    #makeProjectStackComponent({ stack }) {
        return `
            <div class="stack">
                <p class="stackText">${stack}</p>
            </div>
        `;
    }

    #makeAllStackComponents() {
        const stacks = this.fe_stack.map(stackName => this.#makeProjectStackComponent({ stack: stackName }));

        return stacks.join('');

    }

    makeProjectComponent() {
        const stackComponents = this.#makeAllStackComponents();
        const modalClass = new ProjectModalComponent();
        const modalComponent = modalClass.makeProjectModalComponent();
    
        return `
            <div class="project">
                <div class="projectThumbnail">
                    <img src="${this.thumbnail}" alt="thumbnail" class="thumbnail" />
                    <div class="thumbnailInfo">
                        <button class="thumbnailText openModal">데모 보기</button>
                        <button class="thumbnailText openModal">상세 보기</button>
                    </div>
                </div>
                <div class="projectInfo">
                    <a href="${this.github}" target="_blank" rel="noopener noreferrer" class="githubIcon">
                        <img src="./src/assets/skill/github.png" alt="github" class="skillIcon" />
                    </a>
                    <h3 class="projectTitle">${this.title}</h3>
                    <p class="projectText">${this.description}</p>
                    <div class="projectMember">
                        <p class="projectText">팀원 : ${this.member}</p>
                        <p class="projectText">역할 : ${this.role}</p>
                    </div>
                    <div class="projectDuration">
                        <p class="projectText">개발 기간</p>
                        <p class="projectText">${this.duration}</p>
                    </div>
                    <div class="stackWrapper">
                        <p class="projectText">FE Stack</p>
                        <div class="stacks">
                            ${stackComponents}
                        </div>
                    </div>
                </div>

                ${modalComponent}
            </div>
        `;
    }
}

export { ProjectComponent };