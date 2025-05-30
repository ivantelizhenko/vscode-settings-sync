'use strict';

const sectionAbout = document.querySelector('.section-about');
const sectionFeatures = document.querySelector('.section-features');
const sectionTours = document.querySelector('.section-tours');
const sectionStories = document.querySelector('.section-stories');
const sectionBook = document.querySelector('.section-book');
const btns = document.querySelectorAll('.navigation__link');

const sections = [...document.querySelectorAll('section')];

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    if (!e.target.closest('.navigation__link')) return;
    console.log(btn);
    // console.log(coords.btn.dataset.section);
    // scrollTo(0, coords.btn.dataset);
  });
});

const getCoords = section => {
  const sectinCoords = section.getBoundingClientRect();
  return sectinCoords.y + window.scrollY;
};

const coords = Object.fromEntries(
  new Map(
    sections.map(section => {
      return [section.dataset.section, getCoords(section)];
    })
  )
);
console.log(coords);
// console.log(window.scrollX);
// console.log(window.scrollY);
