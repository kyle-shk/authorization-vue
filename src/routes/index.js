import { createRouter,createWebHistory } from "vue-router";

import Home from './Home.vue'
import Signup from './Signup.vue'
import Login from './Login.vue'
import Ex from './Ex.vue'

const router =  createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component:Home,
    
        },
        {
            path: '/signup',
            component: Signup,
          },
          {
            path: '/login',
            component: Login,
          },
          {
            path:'/ex',
            component:Ex,
            meta:{
              auth:true
            }
          },

    ]
})

// router.beforeEach(function(to,_,next){
//   if(!to.meta.auth) {
//     next('/signup')
//   } else{
//     next()
//   }
// })

export default router