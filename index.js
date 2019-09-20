import App from './lib/App.js';
import Router from './lib/Router.js';
import API from './lib/API.js';

const app = new App('#app');
const router = new Router(app);

const dogTemplate = (dog) => `
<section class="dog-listing">
  <a href="#/dogs/${dog.id}">
    <h3 class="name">${dog.name}</h3>
    <section>
      <figure>
        <img src="${dog.url}" alt="${dog.name}" />
      </figure>
      <p>${dog.description}</p>
    </section>
  </a>
</section>
`;

app.addComponent({
  name: 'dogs',
  model: {
    dogs: []
  },
  view(model) {
    return `
    <ul class="dogs">
      ${model.dogs.map(dog => `<li>${dogTemplate(dog)}</li>`).join('')}
    </ul>
    `;
  },
  async controller(model) {
    const dogs = await API.getDogs();
    model.dogs = dogs;
  }
});

app.addComponent({
  name: 'dog',
  model: {
    dog: {}
  },
  view(model) {
    return dogTemplate(model.dog);
  },
  async controller(model) {
    const dog = await API.getDog(router.params[1]);
    model.dog = dog;
  }
});

router.addRoute('dogs', '^#/dogs$');
router.addRoute('dog', '^#/dogs/([0-9]+)$');
