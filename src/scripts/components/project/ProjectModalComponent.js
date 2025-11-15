class ProjectModalComponent {
    constructor({ title, topColor, member, role, duration, feStack, beStack, deployment, tool, github, functions, result, trouble, images }) {
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
        this.functions = functions;
        this.result = result;
        this.trouble = trouble;
        this.images = images;
    }

    #stackList(stack) {
        return `
            <div class="modalStack">
                <p>${stack}</p>
            </div>
        `;
    }

    #functionList(func) {
        return `<li>${func}</li>`;
    }

    #resultList(res) {
        return `<li>${res}</li>`;
    }

    #troubleList(item) {
        return `
            <div class="troubleItem">
                <div class="troubleRow">
                    <strong>문제 :</strong>
                    <p>${item.PROBLEM}</p>
                </div>
                <div class="troubleRow">
                    <strong>해결 :</strong>
                    <p>${item.SOLUTION}</p>
                </div>
                <div class="troubleRow">
                    <strong>결과 :</strong>
                    <p>${item.RESULT}</p>
                </div>
            </div>
        `;
    }

    #imageList(img) {
        return `<img src="${img}" alt="프로젝트 결과물" class="modalResultImage" />`;
    }

    #makeList(items, func) {
        if (!items) return '';
        return items.map(item => func(item)).join('');
    }

    #makeModalList() {
        return {
            feStackList: this.#makeList(this.feStack, this.#stackList),
            beStackList: this.#makeList(this.beStack, this.#stackList),
            deploymentList: this.#makeList(this.deployment, this.#stackList),
            toolList: this.#makeList(this.tool, this.#stackList),
            functionList: this.#makeList(this.functions, this.#functionList),
            resultList: this.#makeList(this.result, this.#resultList),
            troubleList: this.#makeList(this.trouble, this.#troubleList),
            imageList: this.#makeList(this.images, this.#imageList)
        };
    }

    makeProjectModalComponent() {
        const { feStackList, beStackList, deploymentList, toolList, functionList, resultList, troubleList, imageList } = this.#makeModalList();

        return `
            <div class="modal">
                <div class="modalContentWrapper">
                    <div class="modalTop" style="background-color: ${this.topColor}">
                        <h2 class="modalTitle">${this.title}</h2>
                        <p class="modalDuration">${this.duration}</p>
                    </div>
                    <div class="modalContent">
                        <div class="modalSection">
                            <h3>팀 구성 및 역할</h3>
                            <p>${this.member}</p>
                            <p>역할: ${this.role}</p>
                        </div>

                        ${this.images && this.images.length > 0 ? `
                        <div class="modalSection">
                            <h3>프로젝트 결과물</h3>
                            <div class="modalResultImages">
                                ${imageList}
                            </div>
                        </div>
                        ` : ''}

                        <div class="modalSection">
                            <h3>핵심 기능</h3>
                            <ul class="modalList">
                                ${functionList}
                            </ul>
                        </div>

                        <div class="modalSection">
                            <h3>개인 기여 및 성과</h3>
                            <ul class="modalList">
                                ${resultList}
                            </ul>
                        </div>

                        <div class="modalSection">
                            <h3>트러블 슈팅</h3>
                            <div class="troubleList">
                                ${troubleList}
                            </div>
                        </div>

                        <div class="modalSection">
                            <h3>전체 기술 스택</h3>
                            <div class="stackGroup">
                                <p class="stackLabel">FE</p>
                                <div class="modalStacks">${feStackList}</div>
                            </div>
                            <div class="stackGroup">
                                <p class="stackLabel">BE</p>
                                <div class="modalStacks">${beStackList}</div>
                            </div>
                            ${this.deployment ? `
                            <div class="stackGroup">
                                <p class="stackLabel">Deployment</p>
                                <div class="modalStacks">${deploymentList}</div>
                            </div>
                            ` : ''}
                            ${this.tool ? `
                            <div class="stackGroup">
                                <p class="stackLabel">Tool</p>
                                <div class="modalStacks">${toolList}</div>
                            </div>
                            ` : ''}
                        </div>
                    </div>
                    <button class="closeModal">✕</button>
                </div>
            </div>
        `;
    }
}

export { ProjectModalComponent };