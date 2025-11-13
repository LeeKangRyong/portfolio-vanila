import { PROJECT } from "../../data/projectData.js";
import { ProjectComponent } from "../components/project/ProjectComponent.js";
import { ProjectToastComponent } from "../components/project/ProjectToastComponent.js";
import { useAsset } from "../utils/useAsset.js";

class Project {
    constructor() {
        this.projectWrapper = document.querySelector('.projectWrapper');
        this.#addModalEvents();
    }

    #addModalEvents() {
        this.projectWrapper.addEventListener('click', this.#handleModalClick.bind(this));
    }

    #handleModalClick(event) {
        const target = event.target;

        if (target.classList.contains('openModal')) {
            this.#openModal(target);
        }

        if (target.classList.contains('closeModal')) {
            this.#closeModal(target);
        }

        if (target.classList.contains('openDemo')) {
            this.#openDemo(target);
        }
    }

    #openDemo(target) {
        const project = target.closest('.project');
        if (project) {
            const demoLink = project.dataset.demoLink;
            if (demoLink && demoLink !== 'none') {
                window.open(demoLink, '_blank');
            } else if (demoLink === 'none') {
                const toast = new ProjectToastComponent(target);
                toast.show();
            }
        }
    }

    #openModal(target) {
        const project = target.closest('.project');
        if (project) {
            project.querySelector('.modal').style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

    #closeModal(target) {
        const modal = target.closest('.modal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
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
            be_stack: projectData.BE_STACK,
            deployment: projectData.DEPLOYMENT,
            tool: projectData.TOOL,
            github: projectData.GITHUB,
            top_color: projectData.TOP_COLOR,
            demo_link: projectData.DEMO_LINK
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