import angular from "angular"
import template from './dummy.component.html'

class DummyController {

  constructor() {
    this.name = "world"
  }
}

const component = {
  controller: DummyController,
  template: template
}

export default angular.module("app.dummy", [])
  .component("dummyComponent", component)
  .name
