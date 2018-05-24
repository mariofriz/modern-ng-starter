export default class TodoService {
  constructor($q, $timeout) {
    this.endpoint = process.env.API_ENDPOINT;
    this.$q = $q;
    this.$timeout = $timeout;
  }

  fetchTodos() {
    // simulate network delay
    return this.$q((resolve, reject) => {
      this.$timeout(() => {
        resolve([
          {
            title: 'go diving'
          }
        ]);
      }, 1000);
    });
  }
}

TodoService.$inject = ['$q', '$timeout'];
