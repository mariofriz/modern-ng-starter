import angular from 'angular';

import TodoService from './todo.service';

export default angular.module('app.services', [])
  .service('TodoService', TodoService)
  .name;
