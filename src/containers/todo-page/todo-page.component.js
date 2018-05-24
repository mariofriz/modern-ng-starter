import angular from 'angular';

const template = `
  <main class="container">
    <navbar></navbar>

    <hr>

    <p ng-if="$ctrl.isLoading">Loading...</p>

    <section ng-if="!$ctrl.isLoading">
      <todo-input on-new-todo="$ctrl.createNewTodo(todo)"></todo-input>
      <todo-list
        todos="$ctrl.todos"
        filter="$ctrl.filter"
        on-done="$ctrl.markAsDone(todo)"
        on-archived="$ctrl.markAsArchived(todo)"
      ></todo-list>
      <todo-filter
        filter="$ctrl.filter"
        on-filter="$ctrl.changeFilter(filter)"
      ></todo-filter>
    </section>
  </main>
`;

class TodoPageComponent {
  constructor($bus, TodoService) {
    this.$bus = $bus;
    this.TodoService = TodoService;
  }

  $onInit() {
    this.todos = [];
    this.filter = 'all';
    this.isLoading = true;

    // create some dummy content
    this.TodoService.fetchTodos().then((todos) => {
      todos.forEach(todo => {
        this.createNewTodo(todo);
      });
      this.isLoading = false;
    });
  }

  createNewTodo(todo) {
    todo.id = this.todos.length;
    todo.status = 0;
    this.todos = [...this.todos, todo];

    this.$bus.emit('todo.new', {
      todo: todo
    });
  }

  markAsDone(doneTodo) {
    this.todos = this.todos.map(todo => {
      if (doneTodo.id === todo.id) {
        todo.status = 1;
      }

      return todo;
    });
  }

  markAsArchived(archivedTodo) {
    this.todos = this.todos.map(todo => {
      if (archivedTodo.id === todo.id) {
        todo.status = 2;
      }

      return todo;
    });
  }

  changeFilter(newFilter) {
    this.filter = newFilter;
  }
}

TodoPageComponent.$inject = ['$bus', 'TodoService'];

const component = {
  controller: TodoPageComponent,
  template: template
};

export default angular.module('app.containers.todo-page', [])
  .component('todoPage', component)
  .name;
