import http from "../http-common";

class DataService {
  getAll() {
    return http.get("/pokemon?limit=100000&offset=0");
  }

  getById(id) {
    return http.get(`/pokemon/${id}`);
  }

  getByName(name) {
    return http.get(`/pokemon/${name}`);
  }

  // create(data) {
  //   return http.post("/tutorials", data);
  // }

  // update(id, data) {
  //   return http.put(`/tutorials/${id}`, data);
  // }

  // delete(id) {
  //   return http.delete(`/tutorials/${id}`);
  // }

  // deleteAll() {
  //   return http.delete(`/tutorials`);
  // }
}

export default new DataService();
