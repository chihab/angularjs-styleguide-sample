/* ----- todo/todo-list/index.js ----- */
import angular from 'angular';
import TodoListComponent from './todo-list.component';

const todoList = angular
  .module('todo.list', [])
  .component('todoList', TodoListComponent)
  .name;

export default todoList;