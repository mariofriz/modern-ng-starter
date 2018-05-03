// define routes for the app
export default function routes($routeProvider) {
  $routeProvider
    .when('/test', {
      template: '<test-page></test-page>'
    })
    .otherwise('/test');
}

routes.$inject = ['$routeProvider'];
