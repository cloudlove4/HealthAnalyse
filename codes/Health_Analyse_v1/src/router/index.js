import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue'; // 导入您已经创建的组件
import LoginPage from '../views/Login_Page.vue'; // 导入登录页面组件

const routes = [
  {
    path: '/',
    redirect:'/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage, // 替换为您的登录组件
  },{
    path: '/home',
    name: 'Home',
    component: HomePage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;