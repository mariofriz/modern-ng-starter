import angular from 'angular';

const template = `
  <button
    ng-click="$ctrl.changeFilter('all')"
    ng-class="{ active: $ctrl.filter == 'all' }"
    translate>
    all
  </button>
  <button
    ng-click="$ctrl.changeFilter('archived')"
    ng-class="{ active: $ctrl.filter == 'archived' }"
    translate>
    archived
  </button>
`;

const bindings = {
  filter: '<',
  onFilter: '&'
};

class TodoFilterComponent {
  constructor() {}

  $onInit() {}

  changeFilter(selectedFilter) {
    this.onFilter({filter: selectedFilter});
  }
}

TodoFilterComponent.$inject = [];

const component = {
  controller: TodoFilterComponent,
  template: template,
  bindings: bindings
};

export default angular.module('app.components.todo-filter', [])
  .component('todoFilter', component)
  .name;
