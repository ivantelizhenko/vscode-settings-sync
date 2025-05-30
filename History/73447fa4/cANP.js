'use strict';

const btns = document.querySelectorAll('.navigation__link');
const sections = [...document.querySelectorAll('section')];

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    if (!e.target.closest('.navigation__link')) return;
    const thisSection = btn.dataset.section;
    console.log(coords[thisSection]);
    scrollTo(0, coords[thisSection]);
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
