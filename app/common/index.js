import angular from 'angular';
import Nav from './nav';
import Header from './header';
import Footer from './footer';

const common = angular
  .module('app.common', [
    Nav,
    Header,
    Footer
  ])
  .name;

export default common;