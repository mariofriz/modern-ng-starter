// add some styling...
import './style/index.scss';

// ...and a some framework action
import angular from 'angular';
import ngRoute from 'angular-route';

// import routes
import routes from './app.routes';

// import components and containers
import components from './components/components.module';
import containers from './containers/containers.module';

if (process.env.NODE_ENV !== 'production') {
  console.log('Development mode is on');
}

angular.module('app', [
  ngRoute,
  components,
  containers
]).config(routes);
