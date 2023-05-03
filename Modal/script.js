'use strict';

//store in the variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnOpen = document.querySelectorAll('.show-modal');
console.log(btnOpen);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpen.length; i++)
  btnOpen[i].addEventListener('click', openModal); ///Need to write only one line code then it is ok not use in the brackets for looping.

//close the modal popup
btnClose.addEventListener('click', closeModal);

//when we click the overlay, close the modal pop up
overlay.addEventListener('click', closeModal);

//adding the keypress event by pressing jz Esc to close the modal popup hence needed to check whether the modal is already popup or not
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
