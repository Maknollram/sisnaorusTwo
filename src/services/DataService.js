import http from "../http-common";

class DataService {
  getAll() {
    // to all, change limit to 100000
    return http.get("/pokemon?limit=100000&offset=0");
  }

  getOneById(id) {
    return http.get(`/pokemon/${id}`);
  }

  getOneByName(name) {
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
