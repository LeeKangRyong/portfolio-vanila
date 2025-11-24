import { PROJECT } from "../../data/projectData.js";
import { ProjectComponent } from "../components/project/ProjectComponent.js";
import { ProjectToastComponent } from "../components/project/ProjectToastComponent.js";
import { useAsset } from "../utils/useAsset.js";

class Project {
  constructor() {
    this.projectWrapper = document.querySelector(".projectWrapper");
    this.#addModalEvents();
  }

  #addModalEvents() {
    this.projectWrapper.addEventListener(
      "click",
      this.#handleModalClick.bind(this)
    );
  }

  #handleModalClick(event) {
    if (event.target.classList.contains("openModal")) {
      this.#openModal(event.target);
      return;
    }

    if (event.target.classList.contains("closeModal")) {
      this.#closeModal(event.target);
      return;
    }

    if (event.target.classList.contains("openDemo")) {
      this.#openDemo(event.target);
    }
  }

  #openDemo(target) {
    const project = target.closest(".project");

    if (!project) return;

    const demoLink = project.dataset.demoLink;

    if (demoLink && demoLink !== "none") {
      window.open(demoLink, "_blank");
      return;
    }

    const toast = new ProjectToastComponent(target);
    toast.show();
  }

  #openModal(target) {
    const project = target.closest(".project");

    if (!project) return;

    project.querySelector(".modal").style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  #closeModal(target) {
    const modal = target.closest(".modal");

    if (!modal) return;

    modal.style.display = "none";
    document.body.style.overflow = "";
  }

  async #loadImagePaths(images) {
    if (!images) {
      return null;
    }

    return await Promise.all(images.map((img) => useAsset(img)));
  }

  async #getProjectElement(projectData) {
    const thumbnailPath = await useAsset(projectData.THUMBNAIL);
    const imagePaths = await this.#loadImagePaths(projectData.IMAGES);

    return new ProjectComponent({
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
      demo_link: projectData.DEMO_LINK,
      functions: projectData.FUNCTION,
      result: projectData.RESULT,
      trouble: projectData.TROUBLE,
      images: imagePaths,
    });
  }

  async #makeProjectElement(projectData) {
    const projectComponent = await this.#getProjectElement(projectData);
    const projectElement = document.createElement("div");
    projectElement.innerHTML = projectComponent.makeProjectComponent();

    return projectElement.firstElementChild;
  }

  async #makeProjects() {
    const projectElements = await Promise.all(
      PROJECT.map((projectData) => this.#makeProjectElement(projectData))
    );

    projectElements.forEach((element) =>
      this.projectWrapper.appendChild(element)
    );
  }

  init() {
    this.#makeProjects();
  }
}

export { Project };
