class ProjectToastComponent {
  constructor(target) {
    this.target = target;
    this.toast = null;
  }

  #createToast() {
    this.toast = document.createElement("div");
    this.toast.className = "projectToast";
    this.toast.textContent = "준비중입니다!";
  }

  #appendToast() {
    const thumbnailInfo = this.target.closest(".thumbnailInfo");
    thumbnailInfo.appendChild(this.toast);
  }

  #showToast() {
    setTimeout(() => {
      this.toast.classList.add("show");
    }, 10);
  }

  #hideToast() {
    setTimeout(() => {
      this.toast.classList.remove("show");
      setTimeout(() => {
        this.#removeToast();
      }, 300);
    }, 800);
  }

  #removeToast() {
    const thumbnailInfo = this.target.closest(".thumbnailInfo");
    if (thumbnailInfo.contains(this.toast)) {
      thumbnailInfo.removeChild(this.toast);
    }
  }

  show() {
    this.#createToast();
    this.#appendToast();
    this.#showToast();
    this.#hideToast();
  }
}

export { ProjectToastComponent };
