import { Navigation } from './components/layout/Navigation.js';
import { About } from './pages/about.js';
import { History } from './pages/History.js';
import { Skill } from './pages/Skill.js';

window.addEventListener('DOMContentLoaded', () => {
    const navigation = new Navigation();
    navigation.init();

    const about = new About();
    about.init();
    
    const history = new History();
    history.init();

    const skill = new Skill();
    skill.init();
    
    window.scrollTo(0, 0);
});