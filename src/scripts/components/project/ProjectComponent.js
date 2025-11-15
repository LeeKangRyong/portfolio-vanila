import { ProjectModalComponent } from "./ProjectModalComponent.js";

class ProjectComponent {
    constructor({ title, thumbnail, description, member, role, duration, fe_stack, be_stack, deployment, tool, github, top_color, demo_link, functions, result, trouble, images }) {
        this.title = title;
        this.thumbnail = thumbnail;
        this.description = description;
        this.member = member;
        this.role = role;
        this.duration = duration;
        this.fe_stack = fe_stack;
        this.be_stack = be_stack;
        this.deployment = deployment;
        this.tool = tool;
        this.github = github;
        this.top_color = top_color;
        this.demo_link = demo_link;
        this.functions = functions;
        this.result = result;
        this.trouble = trouble;
        this.images = images;
    }

    #makeStackComponent(stack) {
        return `
            <div class="stack">
                <p class="stackText">${stack}</p>
            </div>
        `;
    }

    #makeAllStackComponents() {
        const stacks = this.fe_stack.map(stackName => this.#makeStackComponent(stackName));
        return stacks.join('');
    }

    #createModal() {
        const modal = new ProjectModalComponent({
            title: this.title,
            topColor: this.top_color,
            member: this.member,
            role: this.role,
            duration: this.duration,
            feStack: this.fe_stack,
            beStack: this.be_stack,
            deployment: this.deployment,
            tool: this.tool,
            github: this.github,
            functions: this.functions,
            result: this.result,
            trouble: this.trouble,
            images: this.images
        });

        return modal.makeProjectModalComponent();
    }

    makeProjectComponent() {
        return `
            <div class="project" data-demo-link="${this.demo_link}">
                <div class="projectThumbnail">
                    <img src="${this.thumbnail}" alt="thumbnail" class="thumbnail" />
                    <div class="thumbnailInfo">
                        <button class="thumbnailText openDemo">데모 보기</button>
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
                            ${this.#makeAllStackComponents()}
                        </div>
                    </div>
                </div>

                ${this.#createModal()}
            </div>
        `;
    }
}

export { ProjectComponent };