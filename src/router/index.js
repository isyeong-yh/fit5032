import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
import AddBookView from '@/views/AddBookView.vue'
import LogOutView from '@/views/LogOut.vue'
import GetBookCountView from '@/views/GetBookCountView.vue'
import WeatherView from '@/views/WeatherView.vue'
import CountBookAPI from '@/views/CountBookAPI.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    // your routes here
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/FireRegister',
      name: 'FireRegister',
      component: FirebaseRegisterView
    },
    {
      path: '/FireLogin',
      name: 'FireLogin',
      component: FirebaseSigninView
    },
    {
      path: '/addbook',
      name: 'AddBook',
      component: AddBookView
    },
    {
      path: '/GetBookCount',
      name: 'GetBookCount',
      component: GetBookCountView
    },
    {
      path: '/CountBookAPI',
      name: 'CountBookAPI',
      component: CountBookAPI
    },
    {
      path: '/WeatherCheck',
      name: 'WeatherCheck',
      component: WeatherView
    },
    {
      path: '/LogOut',
      name: 'LogOut',
      component: LogOutView
    }
  ]
})
