import angular from 'angular';

import testPage from './test-page/test-page.component';

export default angular.module('app.containers', [])
  .component('testPage', testPage)
  .name;
