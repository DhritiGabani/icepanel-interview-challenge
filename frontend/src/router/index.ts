import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FormComponent from '../views/FormComponent.vue' // Import your form component

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/form', // Path for the form
      name: 'form', // Name for the route
      component: FormComponent // Component to render
    }
  ]
})

export default router