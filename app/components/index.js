import angular from 'angular';
import Calendar from './calendar';
import Todo from './todo';

const components = angular
  .module('app.components', [
    Calendar,
    Todo
  ])
  .name;

export default components;