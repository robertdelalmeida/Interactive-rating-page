

const ratingForm = document.querySelector('#ratingForm');

const feedback = document.querySelector('#feedback');

const thankYou = document.querySelector('#thankYou');


ratingForm.addEventListener('submit', e => {
  e.preventDefault();
  
  const ratingButtons = document.getElementsByName('rating');
  const selectedRating = [...ratingButtons].filter(rating => rating.checked === true);
  
  if (selectedRating.length === 0) return;
  
  theMessage(selectedRating[0].defaultValue);
  ThankYouDiv();
});

function theMessage(rating) {
  document.querySelector('#note').textContent = rating;
}

function ThankYouDiv() {
  feedback.style.display = 'none';
  thankYou.style.display = 'block';
}
