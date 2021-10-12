import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router";
import { routes } from "./routes";


Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode : 'history', // hash:Default..
  scrollBehavior(to, from, savedPosition){
    if(to.hash){
      return{
        selector : to.hash
      }
    }
    // return { x : 0, y : 800 }
  },
});

router.beforeEach((to, from, next) => {
  console.log("Global kontrol");
  next();
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
