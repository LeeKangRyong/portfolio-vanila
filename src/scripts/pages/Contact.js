class Contact {
  constructor() {
    this.contactInfos = document.querySelectorAll(".contactInfo");
  }

  #copyContactText(contactText) {
    navigator.clipboard
      .writeText(contactText)
      .then(() => {
        alert("복사되었습니다!");
      })
      .catch((error) => {
        console.error("복사 실패:", error);
      });
  }

  #linkToContact(link) {
    window.open(link, "_blank");
  }

  #getContactLink(imgAlt) {
    const links = {
      github: "https://github.com/LeeKangRyong/",
      instagram: "https://www.instagram.com/gangryongi/",
      notion:
        "https://mulberry-browser-9b0.notion.site/FE-Engineer-2aaf36144c5f80d9b867db263c85e9ab?pvs=74",
    };
    return links[imgAlt];
  }

  #handleImageClick(imgAlt) {
    const link = this.#getContactLink(imgAlt);
    if (link) {
      this.#linkToContact(link);
    }
  }

  #handleTextClick(text) {
    this.#copyContactText(text);
  }

  #addEventListeners(info) {
    const text = info.querySelector(".contactText").textContent;
    const img = info.querySelector("img");
    const imgAlt = img.alt;

    img.addEventListener("click", () => {
      this.#handleImageClick(imgAlt);
    });

    info.querySelector(".contactText").addEventListener("click", () => {
      this.#handleTextClick(text);
    });
  }

  init() {
    this.contactInfos.forEach((info) => {
      this.#addEventListeners(info);
    });
  }
}

export { Contact };
