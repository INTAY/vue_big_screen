import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 路由懒加载
const Login = () => import( /* webpackChunkName: "Index" */ '../views/components/login/login') //登录界面
const Home = () => import( /* webpackChunkName: "home" */ '../views/index') //主页面
const Interface = () => import( /* webpackChunkName: "home" */ '../views/components/displayInterface/displayInterface') //站点设备


const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/home',
    component: Home,
    redirect: '/interface',
    children: [{
      path: '/interface',
      component: Interface
    }, ],
  }
]

const router = new VueRouter({
  routes
})

// 全局路由守卫
router.beforeEach((to, from, next) => {

  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
  
  
});


export default router