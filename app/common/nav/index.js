import NavComponent from './nav.component';

const nav = angular
  .module('nav', [])
  .component('nav', NavComponent)
  .name;

export default nav;