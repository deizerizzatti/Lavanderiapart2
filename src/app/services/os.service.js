import { runInThisContext } from "vm";

export default class OSService {
  constructor($http) {
    this.http = $http;
    this.url = "http://localhost:3000/os";
  }

  findByPesquisa(pesquisa) {
    return this.http
      .get(this.url + "-pesquisa", { params: { pesquisa } })
      .then(function(response) {
        return response.data;
      });
  }

  findById(id) {
    return this.http.get(this.url + "/" + id).then(function(response) {
      return response.data;
    });
  }

  findAll() {
    return this.http.get(this.url).then(function(response) {
      return response.data;
    });
  }

  insert(registro) {
    return this.http.post(this.url, registro).then(function(response) {
      return response.data;
    });
  }

  update(registro) {
    return this.http
      .put(this.url + "/" + registro._id, registro)
      .then(function(response) {
        return response.data;
      });
  }

  remove(id) {
    return this.http.delite(this.url + "/" + id).then(function(response) {
      return response.data;
    });
  }
}
OSService.$inject = ["$http"];
