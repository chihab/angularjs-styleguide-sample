import angular from 'angular';
import uiRouter from 'angular-ui-router';
import CalendarComponent from './calendar.component';
import CalendarNew from './calendar-new';

const calendar = angular
  .module('calendar', [
    uiRouter, 'calendar.new'
  ])
  .component('calendar', CalendarComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('calendar', {
        url: '/calendar',
        component: 'calendar'
      })
      .state('calendar.new', {
        component: 'calendarn'
      });      
    $urlRouterProvider.otherwise('/');
  })
  .name;

export default calendar;