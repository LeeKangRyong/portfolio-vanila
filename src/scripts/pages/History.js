import { HISTORY } from "../../data/historyData.js";
import { HistoryComponent } from "../components/history/HistoryComponent.js";

class History {
  constructor() {
    this.historyList = document.querySelector(".historyWrapper");
  }

  #makeHistoryDocument({ title, duration, description }) {
    const historyComponent = new HistoryComponent(title, duration, description);
    const history = document.createElement("div");
    history.innerHTML = historyComponent.makeHistoryComponent();

    return history.firstElementChild;
  }

  #makeHistoryList() {
    HISTORY.forEach((historyData) => {
      const historyElement = this.#makeHistoryDocument({
        title: historyData.TITLE,
        duration: historyData.DURATION,
        description: historyData.DESCRIPTION,
      });

      this.historyList.appendChild(historyElement);
    });
  }

  init() {
    this.#makeHistoryList();
  }
}

export { History };
