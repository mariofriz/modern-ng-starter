import angular from 'angular';

const bindings = {
  user: '<',
  onUpdate: '&'
};

class DummyComponent {
  constructor() {
    this.user = '';
  }

  $onChanges(change) {
    if (change.user && change.user.currentValue !== '') {
      this.user = Object.assign({}, change.user.currentValue, {
        name: 'wonderful ' + change.user.currentValue.name
      });
    }
  }

  changeLanguage() {
    this.onUpdate();
  }
}

const component = {
  controller: DummyComponent,
  template: require('./dummy.component.html'),
  bindings
};

export default angular.module('app.components.dummy', [])
  .component('dummyComponent', component)
  .name;
