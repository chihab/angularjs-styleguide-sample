/* ----- todo/todo-form/index.js ----- */
import angular from 'angular';
import TodoFormComponent from './todo-form.component';

const todoForm = angular
  .module('todo.form', [])
  .component('todoForm', TodoFormComponent)
  .value('EventEmitter', payload => ({ $event: payload}))
  .name;

export default todoForm;