import template from './test-page.component.html';

class TestPageComponent {
  constructor(DummyService) {
    // DI
    this.dummyService = DummyService;

    // Properties
    this.user = '';
  }

  $onInit() {
    this.dummyService.fetchUser()
      .then(user => {
        this.user = user;
      });
  }
}

TestPageComponent.$inject = ['DummyService'];

const component = {
  controller: TestPageComponent,
  template: template
};

export default component;
