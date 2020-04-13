import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import routeMap from '../src/api/CompentList.js'
/* eslint-disable */
Vue.prototype.$axios = axios
Vue.use(ElementUI);
Vue.config.productionTip = false
const NotFound = () => import('../src/views/NotFound.vue')

const formatRoutes = function (routes, routeData) {
  if (!routeData) {
      routeData = {
          name: 'home',
          path: '/home',
          // 组件匹配成功的话才可以访问具体的页面
          component: routeMap['Home'],
          children: [],
      };
  }
  routes.length && routes.forEach(route => {
      if(route.vuemodel) {
          route.vuemodel = routeMap[route.vuemodel];
          routeData.children.push({
              path: `/home/${route.path}`,
              name: route.index,
              component: route.vuemodel,
              meta: {
                  title: route.title,
              },
          })
      }
      if (route.children && route.children.length) {
          formatRoutes(route.children, routeData);
      }
  });
  return routeData;
};
const resourceApp = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

let isFet = true;

//使用钩子进行权限跳转
router.beforeEach((to, from, next) => {
  const username = sessionStorage.getItem('username');
  if(!username && to.path !== '/login'){
    next({path: '/login'});
  }else if(isFet && to.path !== '/login'){
    resourceApp.$axios.get("/api/menubar").then(res => {
                isFet = false;
                const menuData = res.data.data;
                localStorage.setItem('menudata', JSON.stringify(menuData));
                const routeData = formatRoutes(menuData);
                resourceApp.$router.addRoutes([routeData].concat([
                    {name:'NotFound',path:'/NotFound',component:NotFound},
                    {path:'*',redirect: '/NotFound'}]));
            }).catch(err => {
                console.log(err)
            })
  } else {
    next()
  }
})









