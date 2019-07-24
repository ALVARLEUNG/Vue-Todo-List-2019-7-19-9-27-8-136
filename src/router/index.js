import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TodoList from '@/components/TodoList'
import Main from '@/components/Main'
import Home from '@/components/Home'
import Information from '@/components/Information'

Vue.use(Router)

const routes = [
  {
    path: '/helloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/todoList',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {path: '', component: TodoList},
      {path: 'information', component: Information}
    ]
  }
]

const router = new Router({mode: 'history', routes});

export default router;

