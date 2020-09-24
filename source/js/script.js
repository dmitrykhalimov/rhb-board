var navMain = document.querySelector('.page__nav');
var navToggle = document.querySelector('.hamburger');

var OPENED_BUTTON = 'is-active';
var OPENED_NAV = 'page__nav--is-active'

// navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
if (navToggle.classList.contains(OPENED_BUTTON)) {
  navToggle.classList.remove(OPENED_BUTTON)
  navMain.classList.remove(OPENED_NAV);
}
else {
  navToggle.classList.add(OPENED_BUTTON)
  navMain.classList.add(OPENED_NAV)
}
});

var buttonsExpand = document.querySelectorAll('.button-expand');
console.log(buttonsExpand);

var handleExpand = function(evt) {
  if (evt.target.classList.contains(OPENED_BUTTON)) {
    evt.target.classList.remove(OPENED_BUTTON);
  } else {
    evt.target.classList.add(OPENED_BUTTON);
  }
}

buttonsExpand.forEach(button => {
  button.addEventListener('click', handleExpand);
});
// var buttonBefore = document.querySelector('.example__catchange-text--before');
// var buttonAfter = document.querySelector('.example__catchange-text--after');

// var pictureBefore = document.querySelector('.example__cat-before');
// var pictureAfter = document.querySelector('.example__cat-after');

// var hiddenClass = 'visually-hidden';

// buttonBefore.addEventListener('click', function() {
//   pictureAfter.classList.add(hiddenClass);
//   pictureBefore.classList.remove(hiddenClass);
// });
// buttonAfter.addEventListener('click', function() {
//   pictureBefore.classList.add(hiddenClass);
//   pictureAfter.classList.remove(hiddenClass);
// });
