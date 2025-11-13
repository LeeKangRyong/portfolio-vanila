class ProjectModalComponent {
    constructor({ title, topColor, member, role, duration, feStack, beStack, deployment, tool, github }) {
        this.title = title;
        this.topColor = topColor;
        this.member = member;
        this.role = role;
        this.duration = duration;
        this.feStack = feStack;
        this.beStack = beStack;
        this.deployment = deployment;
        this.tool = tool;
        this.github = github;
    }

    #makeStackList(stacks) {
        return stacks.map(stack => `
            <div class="modalStack">
                <p>${stack}</p>
            </div>
        `).join('');
    }

    makeProjectModalComponent() {
        const feStackList = this.#makeStackList(this.feStack);
        const beStackList = this.#makeStackList(this.beStack);
        const deploymentList = this.deployment ? this.#makeStackList(this.deployment) : '';
        const toolList = this.tool ? this.#makeStackList(this.tool) : '';

        return `
            <div class="modal">
                <div class="modalContentWrapper">
                    <div class="modalTop" style="background-color: ${this.topColor}">
                        <h2 class="modalTitle">${this.title}</h2>
                        <p class="modalDuration">${this.duration}</p>
                    </div>
                    
                    <div class="modalContent">
                        <div class="modalSection">
                            <h3>팀 구성</h3>
                            <p>${this.member}</p>
                        </div>

                        <div class="modalSection">
                            <h3>역할</h3>
                            <p>${this.role}</p>
                        </div>

                        <div class="modalSection">
                            <h3>FE Stack</h3>
                            <div class="modalStacks">
                                ${feStackList}
                            </div>
                        </div>

                        <div class="modalSection">
                            <h3>BE Stack</h3>
                            <div class="modalStacks">
                                ${beStackList}
                            </div>
                        </div>

                        ${this.deployment ? `
                        <div class="modalSection">
                            <h3>Deployment</h3>
                            <div class="modalStacks">
                                ${deploymentList}
                            </div>
                        </div>
                        ` : ''}

                        ${this.tool ? `
                        <div class="modalSection">
                            <h3>Tool</h3>
                            <div class="modalStacks">
                                ${toolList}
                            </div>
                        </div>
                        ` : ''}

                        <div class="modalSection">
                            <a href="${this.github}" target="_blank" rel="noopener noreferrer" class="modalGithubLink">
                                GitHub 보기 →
                            </a>
                        </div>
                    </div>

                    <button class="closeModal">✕</button>
                </div>
            </div>
        `;
    }
}

export { ProjectModalComponent };