import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JournalView from '../views/JournalView.vue'
import NoticiasView from '../views/NoticiasView.vue'
import NotFoundView from '../views/NotFoundView'
// Vue.use(BootstrapVue);
const routes = [
{
path: "/",
name: "HomeView",
component:HomeView
},
{
path: '/journal',
name: 'JournalView',
component: JournalView, 
},
{
path: '/noticias',
name: 'NoticiasView',
component: NoticiasView, 
},
{ 
path: '/:pathMatch(.*)*',
name: 'NotFoundView',
component: NotFoundView 
}
]
const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes
})
export default router
