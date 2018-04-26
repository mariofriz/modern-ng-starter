import angular from 'angular';

import template from './dummy.component.html';

class DummyComponent {
  constructor() {
    this.name = 'world';
  }
}

const component = {
  controller: DummyComponent,
  template: template
};

export default angular.module('app.components.dummy', [])
  .component('dummyComponent', component)
  .name;
