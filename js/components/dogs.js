(function () {
  app.addComponent({
    name: 'dogs',
    model: {
      loading: true,
      title: 'All Dogs',
      dogs: []
    },
    view,
    controller
  });

  function view() {
    if(this.loading) return 'Loading...';

    const dogs = this
      .dogs
      .reduce((html, dog) => html + shared.dogTemplate(dog), '')

    return `
      <ul class="dogs">
        <li>
          ${dogs}
        </li>
      </ul>
    `
  }

  function controller() {
    this.loading = true;

    api
      .getAllDogs()
      .then(dogs => {
        this.dogs = dogs;
        this.loading = false;
      });
  }
})();
