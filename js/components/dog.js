(function () {
  app.addComponent({
    name: 'dog',
    model: {
      loading: true,
      dog: {}
    },
    view,
    controller
  });

  function view() {
    if(this.loading) {
      return 'Loading...';
    }

    return shared.dogTemplate(this.dog)
  }

  function controller() {
    const id = router.params[0];
    this.loading = true;
    api
      .getDog(id)
      .then(dog => {
        this.dog = dog;
        this.loading = false;
      });
  }
})();
