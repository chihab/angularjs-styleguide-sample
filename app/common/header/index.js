import HeaderComponent from './header.component';

const header = angular
  .module('header', [])
  .component('header', HeaderComponent)
  .name;

export default header;