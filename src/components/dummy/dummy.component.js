import angular from 'angular';

const template = `
<p>Hello {{ $ctrl.name }}!</p>
`;

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
