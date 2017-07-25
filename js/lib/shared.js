const shared = {
  dogTemplate: (dog) => `
    <section class="dog-listing">
      <a href="#/dogs/${dog.id}">
        <h3 class="name">${dog.name}</h3>
        <section>
          <figure>
            <img src="${dog.imageUrl}" alt="${dog.name}" />
            <figcaption>${dog.imageCaption}</figcaption>
          </figure>
          <p>${dog.description}</p>
        </section>
      </a>
    </section>
  `
}
