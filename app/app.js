import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import Components from './components/components';
import Common from './common/common';

const app = angular
    .module('app', [
        Components,
        Common,
        uiRouter
    ])
    .component('app', AppComponent)
    .name;

export default app;