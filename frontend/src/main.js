import { createApp } from 'vue';

// Styles
import './styles/main.css';

// Components
import App from './App.vue';

// Plugins
import router from './routers';
import stores from './stores';

createApp(App).use(stores).use(router).mount('#app');
