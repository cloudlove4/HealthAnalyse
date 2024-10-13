import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue'; // 导入您已经创建的组件
import LoginPage from '../views/Login_Page.vue'; // 导入登录页面组件
import IndexMain from '../components/index_main.vue'; // 注意修改名称为 PascalCase
import StepData from '../components/Step_data.vue'; // 同样注意修改名称为 PascalCase
import PhyActivity from '../components/Phy_activity.vue';
import SleepData from '../components/Sleep_data.vue';
import DietaryData from '../components/Dietary_data.vue';
import MedicationData from '../components/Medication_data.vue';
import DataUpload from '../components/Data_upload.vue';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
    children: [
      {
        path: '', // 将子路由路径设置为空
        redirect: 'index' // 重定向到 index
      },
      {
        path: 'index', // 去掉前面的 /
        name: 'Index', 
        component: IndexMain // 修改为 PascalCase
      },
      {
        path: 'step_data', // 去掉前面的 /，并且使用小写
        name: 'StepData', // 添加一个名字方便导航
        component: StepData // 修改为 PascalCase
      },
      {
        path:'phy_activity',
        name:'PhysicalActivity',
        component:PhyActivity
      },
      {
        path:'sleep_data',
        name:'SleepData',
        component:SleepData
      },
      {
        path:'dietary_data',
        name:'DietaryData',
        component:DietaryData
      },
      {
        path:'medication_data',
        name:'MedicationData',
        component:MedicationData
      },
      {
        path:'data_upload',
        name:'DataUpload',
        component:DataUpload
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
