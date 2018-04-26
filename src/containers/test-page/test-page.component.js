import template from './test-page.component.html';

class TestPageComponent {
  constructor() {
    this.title = 'This is a test page';
  }
}

const component = {
  controller: TestPageComponent,
  template: template
};

export default component;
