import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

// components
import TasksList from './components/TasksList.vue';
import Home from './components/Home.vue';
import App from './components/App.vue';
import Task from './components/Task.vue';
import EditTask from './components/EditTask.vue';

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
    },
    {
        path: '/task/:id',
        name: 'Task',
        component: Task
    },
    {
        path: '/task/edit/:id',
        name: 'EditTask',
        component: EditTask
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