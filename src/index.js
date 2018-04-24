// add some styling...
import './style/index.scss';

// ...and a little framework
import angular from 'angular';

// import all dependencies
import config from './index.config';

if (process.env.NODE_ENV !== 'production') {
  console.log('Development mode is on');
}

angular.module('app', [

]).config(config);
