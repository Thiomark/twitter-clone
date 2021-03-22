
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'Home', path: '/', component: () => import('src/pages/HomeScreen.vue') },
      { name: 'Notifications', path: '/notifications', component: () => import('src/pages/NotificationScreen.vue') },
      { name: 'Messages', path: '/messages', component: () => import('src/pages/MessageScreen.vue') },
      { name: 'Search', path: '/find', component: () => import('src/pages/SearchScreen.vue') },
      { name: 'Chats', path: '/chats/:id', component: () => import('src/pages/ChatScreen.vue') },
      { name: 'Reply', path: '/reply', component: () => import('src/pages/ReplyScreen.vue') },
      { name: 'Register', path: '/register', component: () => import('src/pages/RegisterScreen.vue') },
      { name: 'Profile', path: '/profile', component: () => import('src/pages/ProfileScreen.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
