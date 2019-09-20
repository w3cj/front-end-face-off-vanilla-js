https://barkwireapi.brooks.now.sh/dogs

```html
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
```