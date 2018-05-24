// define routes for the app
export default function routes($routeProvider) {
  $routeProvider
    .when('/', {
      template: '<todo-page></todo-page>'
    })
    .otherwise('/');
}

routes.$inject = ['$routeProvider'];
