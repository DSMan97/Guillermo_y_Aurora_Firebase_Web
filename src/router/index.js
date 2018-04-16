import Vue from 'vue'
import Router from 'vue-router'
import LoginRegistro from '@/components/LoginRegistro'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginRegistro',
      component: LoginRegistro
    }
  ]
})
