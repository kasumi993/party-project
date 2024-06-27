// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/HomeComponent.vue';
import Login from '@/components/LoginComponent.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
