import {createRouter, createWebHashHistory} from 'vue-router';
import PostView from '../src/modules/posts/PostView.vue';
import PostNew from '../src/modules/posts/PostNew.vue';
import PostEdit from '../src/modules/posts/PostEdit.vue';
import CategoryView from '../src/modules/categories/CategoryView.vue';
import CategoryNew from '../src/modules/categories/CategoryNew.vue';
import CategoryEdit from '../src/modules/categories/CategoryEdit.vue';

const routes = [
    {
        path: '/',
        component: PostView
    },
    {
        path: '/posts/create',
        component: PostNew
    },
    {
        path: '/posts/edit',
        component: PostEdit
    },
    {
        path: '/categories',
        component: CategoryView
    },
    {
        path: '/categories/create',
        component: CategoryNew
    },
    {
        path: '/categories/edit',
        component: CategoryEdit
    },
];

const router = createRouter( {
    history: createWebHashHistory(),
    routes
});

export default router;