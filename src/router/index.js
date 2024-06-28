// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/HomeComponent.vue';
import Detail from '@/components/DetailComponent.vue';
import Login from '@/components/LoginComponent.vue';
import FixedHeadercontainer from "@/containers/fixedHeadercontainer.vue";

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/',
        name: 'index',
        redirect: '/home',
        component: FixedHeadercontainer,
        children: [
            {
                path: '/home',
                name: 'home',
                component: Home,
                meta: {
                    auth: false,
                }
            },
            {
                path: '/detail/:id',
                name: 'detail',
                component: Detail,
                meta: {
                    auth: false,
                }
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
