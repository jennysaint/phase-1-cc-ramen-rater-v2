// index.js

// Callbacks
const handleClick = (ramen) => {
  // Add code
  document.querySelector('.detail-image').src = ramen.image;
  document.querySelector('.detail-image').alt = ramen.name;
  document.querySelector('.name').textContent = ramen.name;
  document.querySelector('.restaurant').textContent = ramen.restaurant;
  document.getElementById('rating').textContent = ramen.rating;
  document.getElementById('comment').textContent = ramen.comment;
};

const addSubmitListener = () => {
  // Add code
  const form = document.getElementById('new-ramen');
  form.addEventListener('submit', event => {
    event.preventDefault();

    const newRamen = {
      name: form.name.value,
      restaurant: form.restaurant.value,
      image: form.image.value,
      rating: form.rating.value,
      comment: form['new-comment'].value
    };

    const img = document.createElement('img');
    img.src = newRamen.image;
    img.alt = newRamen.name;
    img.addEventListener('click', () => handleClick(newRamen));
    document.getElementById('ramen-menu').appendChild(img);

    form.reset(); 
  });
}

const displayRamens = () => {
  // Add code
  fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(ramens => {
      ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener('click', () => handleClick(ramen));
        document.getElementById('ramen-menu').appendChild(img);
      });
    });
};

const main = () => {
  displayRamens();
  addSubmitListener();
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};

document.addEventListener('DOMContentLoaded', main);
