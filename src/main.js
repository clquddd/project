import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './components/Home.vue'
import TestApi from './components/TestApi.vue'
import ChatPage from './components/Chat.vue'
import NotFound from './components/NotFound.vue'

const routes = [
    { path: '/', name: 'Home', component: HomePage},
    { path: '/test', name: 'TestApi', component: TestApi},
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
    { path: '/chat', name: 'Chat', component: ChatPage},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})



createApp(App).use(router).mount('#app')
