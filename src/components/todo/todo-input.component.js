import angular from 'angular';

const template = `
  <form ng-submit="$ctrl.createNewTodo()">
    <input ng-model="$ctrl.newTodo" type="text" placeholder="what needs to be done ?">
    <input type="submit" style="display: none;">
  </form>
`;

const bindings = {
  onNewTodo: '&'
};

class TodoInputComponent {
  constructor() {}

  $onInit() {
    this.newTodo = '';
  }

  createNewTodo() {
    var todo = {
      title: this.newTodo,
      status: 0
    };
    this.onNewTodo({todo: todo});

    // reset todo field
    this.newTodo = '';
  }
}

TodoInputComponent.$inject = [];

const component = {
  controller: TodoInputComponent,
  template: template,
  bindings: bindings
};

export default angular.module('app.components.todo-input', [])
  .component('todoInput', component)
  .name;
