import { PROJECT } from "../../data/projectData.js";
import { ProjectComponent } from "../components/project/ProjectComponent.js";
import { useAsset } from "../utils/useAsset.js";

class Project {
    constructor() {
        this.projectWrapper = document.querySelector('.projectWrapper');
    }

    async #getProjectElement(projectData) {
        const thumbnailPath = await useAsset(projectData.THUMBNAIL);
        
        const projectComponent = new ProjectComponent({
            title: projectData.TITLE,
            thumbnail: thumbnailPath,
            description: projectData.DESCRIPTION,
            member: projectData.MEMBER,
            role: projectData.ROLE,
            duration: projectData.DURATION,
            fe_stack: projectData.FE_STACK,
            github: projectData.GITHUB
        });

        return projectComponent;
    }

    async #makeProjectElement(projectData) {
        const projectComponent = await this.#getProjectElement(projectData);
        const projectElement = document.createElement('div');
        projectElement.innerHTML = projectComponent.makeProjectComponent();
        
        return projectElement.firstElementChild;
    }


    async #makeProjects() {
        const projectPromises = PROJECT.map(projectData => 
            this.#makeProjectElement(projectData)
        );
        
        const projectElements = await Promise.all(projectPromises);
        
        projectElements.forEach(element => {
            this.projectWrapper.appendChild(element);
        });
    }

    init() {
        this.#makeProjects();
    }
}

export { Project };