import { createRouter, createWebHistory } from 'vue-router'
import ViewNotes from '@/views/ViewNotes.vue';
import ViewEditNotes from '@/views/ViewEditNotes.vue';
import ViewStats from '@/views/ViewStats.vue';

const routes =  [
        {
            path: '/',
            name: 'notes',
            component: ViewNotes
        },
        {
            path: '/editNotes/:id',
            name: 'editNotes',
            component: ViewEditNotes
        },
        {
            path: '/stats',
            name: 'stats',
            component: ViewStats
        }
    ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;