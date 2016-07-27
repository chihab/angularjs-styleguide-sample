import angular from 'angular';
import uiRouter from 'angular-ui-router';
import TodoComponent from './todo.component';
import TodoService from './todo.service';

const todo = angular
  .module('todo', [
    uiRouter
  ])
  .component('todo', TodoComponent)
  .service('TodoService', TodoService)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('todos', {
        url: '/todos',
        component: 'todo',
        resolve: {
          todoData: TodoService => TodoService.getTodos()
        }
      });
    $urlRouterProvider.otherwise('/');
  })
  .name;

export default todo;