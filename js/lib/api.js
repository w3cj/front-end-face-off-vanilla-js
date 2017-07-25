class API {
  constructor() {
    this.API_URL = 'https://barkwire-api.herokuapp.com/dogs';
  }
  getAllDogs() {
    return fetchJSON(this.API_URL)
      .then(data => data.dogs);
  }
  getDog(id) {
    return fetchJSON(`${this.API_URL}/${id}`)
      .then(data => data.dog);
  }
}
