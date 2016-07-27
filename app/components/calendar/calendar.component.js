import angular from 'angular';
import uiRouter from 'angular-ui-router';
import CalendarComponent from './calendar.component';

const calendar = angular
  .module('calendar', [
    uiRouter
  ])
  .component('calendar', CalendarComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('calendar', {
        url: '/calendar',
        component: 'calendar'
      });
    $urlRouterProvider.otherwise('/');
  })
  .name;

export default calendar;