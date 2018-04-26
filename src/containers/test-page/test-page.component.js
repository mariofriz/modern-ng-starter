const template = `
<div class="container">
  <h1>Title: {{ $ctrl.title }}</h1>
  <dummy-component></dummy-component>
</div>
`;

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
