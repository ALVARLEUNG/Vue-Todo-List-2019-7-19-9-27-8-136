import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TodoList from '@/components/TodoList'

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
    }
  ]

const router = new Router({mode: 'history', routes});

export default router;

