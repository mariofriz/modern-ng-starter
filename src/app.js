// add some styling...
import './assets/index.scss';

// ...and a some framework action
import angular from 'angular';
import ngRoute from 'angular-route';
import gettext from 'angular-gettext';
import ngBus from 'ng-bus';

// import app boostrap files
import routes from './app.routes';
import startup from './app.startup';

// import components and containers
import services from './services/services.module';
import components from './components/components.module';
import containers from './containers/containers.module';

angular.module('app', [
  // vendor dependencies
  ngRoute,
  gettext,
  ngBus,
  // app dependencies
  services,
  components,
  containers
]).config(routes)
  .run(startup);
