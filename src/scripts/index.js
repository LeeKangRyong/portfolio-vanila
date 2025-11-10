import { Navigation } from './components/Navigation.js';
import { About } from './pages/about.js';

window.addEventListener('DOMContentLoaded', () => {
    const navigation = new Navigation();
    navigation.init();

    const about = new About();
    about.init();
    
    window.scrollTo(0, 0);
});