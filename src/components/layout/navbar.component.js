import angular from 'angular';

const template = `
  <h1>Useless todo app</h1>
  <button class="change-language" ng-click="$ctrl.changeLanguage()" translate>Change language</button>

  <p ng-if="$ctrl.count > 0" translate>Total number todos: {{ $ctrl.count }}</p>
  <p ng-if="$ctrl.count == 0" translate>No todos yet, start by creating a few</p>
`;

class NavbarComponent {
  constructor($bus, gettextCatalog) {
    this.$bus = $bus;
    this.$gettext = gettextCatalog;
  }

  $onInit() {
    this.count = 0;

    this.$bus.subscribe(this, 'todo.new', (data) => {
      this.count++;
    });
  }

  changeLanguage() {
    if (this.$gettext.getCurrentLanguage() === 'en') {
      this.$gettext.setCurrentLanguage('de');
    } else {
      this.$gettext.setCurrentLanguage('en');
    }
  }

  $onDestroy() {
    this.$bus.off(this);
  }
}

NavbarComponent.$inject = ['$bus', 'gettextCatalog'];

const component = {
  controller: NavbarComponent,
  template: template
};

export default angular.module('app.components.navbar', [])
  .component('navbar', component)
  .name;
