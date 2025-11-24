import { Navigation } from "./components/layout/Navigation.js";
import { About } from "./pages/About.js";
import { History } from "./pages/History.js";
import { Skill } from "./pages/Skill.js";
import { Project } from "./pages/Project.js";
import { Contact } from "./pages/Contact.js";

window.addEventListener("DOMContentLoaded", () => {
  const navigation = new Navigation();
  navigation.init();

  const about = new About();
  about.init();

  const history = new History();
  history.init();

  const skill = new Skill();
  skill.init();

  const project = new Project();
  project.init();

  const contact = new Contact();
  contact.init();

  window.scrollTo(0, 0);
});
