
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