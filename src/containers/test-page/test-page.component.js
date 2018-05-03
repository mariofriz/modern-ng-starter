import angular from 'angular';
import template from './test-page.component.html';

class TestPageComponent {
  constructor(DummyService, gettextCatalog) {
    // DI
    this.dummyService = DummyService;
    this.gettextCatalog = gettextCatalog;

    // Properties
    this.user = '';
  }

  $onInit() {
    this.dummyService.fetchUser()
      .then(user => {
        this.user = user;
      });
  }

  changeLanguage() {
    if (this.gettextCatalog.getCurrentLanguage() === 'en') {
      this.gettextCatalog.setCurrentLanguage('de');
    } else {
      this.gettextCatalog.setCurrentLanguage('en');
    }
  }
}

TestPageComponent.$inject = ['DummyService', 'gettextCatalog'];

const component = {
  controller: TestPageComponent,
  template: template
};

export default angular.module('app.containers.test-page', [])
  .component('testPage', component)
  .name;
