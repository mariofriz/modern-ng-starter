
routes.$inject = ['$routeProvider'];

export default function routes($routeProvider) {
  $routeProvider
    .when('/test', {
      template: '<test-page></test-page>'
    })
    .otherwise('/test');
}
