//业务组件
import Login from '../pages/Login.vue'
import Main from '../pages/Main.vue'
import Page404 from '../pages/Page404.vue'
import Home from '../pages/Home.vue'
import SystemConfig from '../pages/systeminfo/SystemConfig.vue'
import Model1 from '../pages/baseinfo/Model1.vue'
const routes=[
  {path: '/Login', component: Login },
  {
    path: '/',
    component: Main,
    name: '系统管理',
    children: [
      { path: '/home', component: Home, name: '主页' },
       {path: '/model1', component: Model1 , name: '模块页'},
      {path: '/systemConfig', component: SystemConfig , name: '系统设置'},
      { path: '/*', component: Page404, name: '404页面' },
     
    ]
  },
  {path: '/*',component: Page404}
];

export default routes;