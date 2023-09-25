import { createApp } from 'vue';

// Styles
import './styles/main.css';

// Components
import App from './App.vue';

// Plugins
import router from './routers';
import stores from './stores';
import { OhVueIcon } from 'oh-vue-icons';

createApp(App)
    .use(stores)
    .use(router)
    .component('v-icon', OhVueIcon)
    .mount('#app');
