import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Members from '@/pages/Members.vue'
import MemberInfo from '@/pages/MemberInfo.vue'
import Videos from '@/pages/Videos.vue'

import Test from '@/pages/Test.vue'
import TestChild from '@/pages/TestChild.vue'

import NotFound from '@/pages/NotFound.vue'


const router = createRouter({
    history: createWebHistory(),
    routes : [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/members', component: Members },
        { path: '/members/:id(\\d+)', 
          component: MemberInfo,
          name: 'member-info',
          beforeEnter: (to, from, next) => {
            if (from.name === 'member-info'|| from.path === '/members') next();
            else {
              alert("Nope")
              next(false)
            }

          } },
        { 
          path: '/videos', 
          component : Videos,
          name: 'vi',
        },
        { 
          path: '/test', 
          component: Test,
          children :[{ 
            path: ':num',         // /videos/:id
            component: TestChild,
            name : 'test/num',

          }]
        },
        {
          path : '/:paths(.*)*',  // 모든 매칭되지 않는 경로
          name : 'NotFound',
          component: NotFound 


        }
    ]
})

export default router;