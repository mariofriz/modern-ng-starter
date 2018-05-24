import angular from 'angular';

const bindings = {
  user: '<',
  onUpdate: '&'
};

class DummyComponent {
  constructor($bus) {
    this.$bus = $bus;
    this.user = '';
  }

  $onInit() {
    this.$bus.subscribe(this, 'init', (data) => {
      console.log('init', data);
    });

    this.$bus.emit('init', {
      time: Date.now()
    });

    this.$bus.off(this);

    this.$bus.emit('init', {
      time: Date.now()
    });
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

DummyComponent.$inject = ['$bus'];

const component = {
  controller: DummyComponent,
  template: require('./dummy.component.html'),
  bindings
};

export default angular.module('app.components.dummy', [])
  .component('dummyComponent', component)
  .name;
