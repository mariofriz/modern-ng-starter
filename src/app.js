// add some styling...
import './style/index.scss';

// ...and a some framework action
import angular from 'angular';

// import pages and routes
import dummyComponent from './components/dummy.component';

if (process.env.NODE_ENV !== 'production') {
  console.log('Development mode is on');
}

angular.module('app', [ dummyComponent]);
