import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/view/HomeView.vue';
import CatalogView from "@/view/CatalogView.vue";
import AboutUsView from "@/view/AboutUsView.vue";
import NewView from "@/view/NewView.vue";


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/catalog',
        name: 'catalog',
        component: CatalogView,
    },
    {
        path: '/about-us',
        name: 'about',
        component: AboutUsView,
    },
    {
        path: '/new-view',
        name: 'new',
        component: NewView,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;