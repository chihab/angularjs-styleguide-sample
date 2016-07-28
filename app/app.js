// Vendor
import angular from 'angular';
import uiBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';

// App
import AppComponent from './app.component';
import Components from './components';
import Common from './common';

const app = angular
    .module('app', [
        Components,
        Common,
        uiRouter,
        uiBootstrap
    ])
    .component('app', AppComponent)
    .name;

export default app;