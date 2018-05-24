import angular from 'angular';

import navbar from './layout/navbar.component';

import todoInput from './todo/todo-input.component';
import todoList from './todo/todo-list.component';
import todoFilter from './todo/todo-filter.component';

export default angular.module('app.components', [
  navbar,
  todoInput,
  todoList,
  todoFilter
]).name;
