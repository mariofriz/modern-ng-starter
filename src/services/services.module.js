import angular from 'angular';

import DummyService from './dummy.service';

export default angular.module('app.services', [])
  .service('DummyService', DummyService)
  .name;
