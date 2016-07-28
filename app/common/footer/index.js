import FooterComponent from './footer.component';

const footer = angular
  .module('footer', [])
  .component('footer', FooterComponent)
  .name;

export default footer;