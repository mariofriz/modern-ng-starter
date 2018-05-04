export default class ShinyService {
  constructor($http) {
    this.endpoint = process.env.API_ENDPOINT;
    this._$http = $http;
  }

  fetchUser() {
    return this._$http.get(this.endpoint)
      .then((response) => {
        return response.data[0];
      }).catch(error => {
        throw error;
      });
  }
}

ShinyService.$inject = ['$http'];
