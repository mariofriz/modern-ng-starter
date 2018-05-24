import angular from 'angular';

const template = `
  <ul>
    <li
      ng-repeat="todo in $ctrl.filteredTodos"
      ng-click="$ctrl.onClick(todo)"
      ng-class="{ 'todo--done': todo.status == 1 }">
      {{ todo.title }}
    </li>
  </ul>
`;

const bindings = {
  todos: '<',
  filter: '<',
  onDone: '&',
  onArchived: '&'
};

class TodoListComponent {
  constructor() {}

  $onInit() {
    this.filteredTodos = this.filterTodos();
  }

  $onChanges(changes) {
    if (changes.todos || changes.filter) {
      this.filteredTodos = this.filterTodos();
    }
  }

  filterTodos() {
    if (this.filter === 'all') {
      return this.todos.filter(todo => todo.status === 0 || todo.status === 1);
    }

    if (this.filter === 'archived') {
      return this.todos.filter(todo => todo.status === 2);
    }
  }

  onClick(todo) {
    if (todo.status === 0) {
      this.onDone({todo});
    } else {
      this.onArchived({todo});
    }
  }
}

TodoListComponent.$inject = [];

const component = {
  controller: TodoListComponent,
  template: template,
  bindings: bindings
};

export default angular.module('app.components.todo-list', [])
  .component('todoList', component)
  .name;
