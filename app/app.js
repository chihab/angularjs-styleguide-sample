// Vendor
import angular from 'angular';
import uiRouter from 'angular-ui-router';

// App
import AppComponent from './app.component';
import Components from './components';
import Common from './common';

const app = angular
    .module('app', [
        Components,
        Common,
        uiRouter
    ])
    .component('app', AppComponent)
    .name;

export default app;