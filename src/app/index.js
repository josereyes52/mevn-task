import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

// components
import TasksList from './components/TasksList.vue';
import Home from './components/Home.vue';
import App from './components/App.vue';

// routes -- config
const routes = [
    {
        path: '/', 
        name: 'Home',
        component: Home 
    },
    { 
        path: '/tasks',
        name: 'Tasks',
        component: TasksList 
    }
]

// vue router
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');