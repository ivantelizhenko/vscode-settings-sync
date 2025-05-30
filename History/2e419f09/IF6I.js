'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////////////
//Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y):', window.scrollX, window.scrollY);

  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientWidth,
  //   document.documentElement.clientHeight
  // );

  // //First solution
  // window.scrollTo(s1coords.left, s1coords.top + window.scrollY);

  // //Second solution(the same)
  // window.scrollTo({
  //   left: s1coords.left,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  //Third solution(more modern)
  section1.scrollIntoView({ behavior: 'smooth' });
});

/////////////////////////////////////////////
//Page navigation

//this worst, but also can be
// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//this better
// 1. Add Event listener to common parent element
// 2.Determine what element orginated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

////////////////////////////////////////
//Tabbed component
// tabs.forEach(t =>
//   t.addEventListener('click', () => {
//     console.log('heeey');
//   })
// );

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  //Guard clause
  if (!clicked) return;

  //remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(content => {
    content.classList.remove('operations__content--active');
  });

  //Activate tab
  clicked.classList.add('operations__tab--active');

  //Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

///////////////////////////////////////
// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//////////////////////////////////////////////
// sticky navigation
// const initialCoords = section1.getBoundingClientRect();

// console.log(section1);
// window.addEventListener('scroll', function () {
//   console.log(`need`, initialCoords.top);
//   console.log(`curr`, window.scrollY);
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// Sticky naviigation: Intersection Observer API

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => console.log(entry));
// }; // те, що буде виконуватися, коли options будуть задоволені

// const obsOptions = {
//   root: null, // хто буде спостерігачем
//   rootMargin: '100% 100% 100% 100%', // відсоток площі бачення спостерігача з 4 сторін
//   threshold: [0, 0.2], // скільки відсотків повинно бути видно елемент, або добірка відсотків в array
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1); // елемент для спостерігання

const stickyNav = entries => {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

//////////////////////////////////////
//Revealing sections
const allSection = document.querySelectorAll('.section');

const revealSection = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSection.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//////////////////////////////////////
//Lazy Loading Images
const imgTargets = document.querySelectorAll('.features__img');
const loadImg = (entries, observer) => {
  const [entry] = entries;
  const data = entry.target.dataset.src;
  if (!entry.isIntersecting) return;
  entry.target.src = data;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => {
  imgObserver.observe(img);
  img.classList.add('lazy-img');
});

//////////////////////////////////////
// Slider
const slider = () => {
  const slides = document.querySelectorAll('.slide');
  const btnRight = document.querySelector('.slider__btn--right');
  const btnLeft = document.querySelector('.slider__btn--left');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  //Functions
  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class='dots__dot' data-slide=${i}></button>`
      );
    });
  };

  const activateDot = slide => {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide = 0) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  //Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else curSlide++;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  //prev slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else curSlide--;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = () => {
    goToSlide();
    createDots();
    activateDot(curSlide);
  };
  init();

  //event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  document.addEventListener('keydown', e => {
    if (e.code === 'ArrowRight') nextSlide();
    if (e.code === 'ArrowLeft') prevSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      goToSlide(e.target.dataset.slide);
      activateDot(e.target.dataset.slide);
    } else return;
  });
};
slider();

//Need it

const overlayNav = document.querySelector('.overlay__nav ');
const navLogo = document.querySelector('.nav__logo');

const showBar = () => {
  overlayNav.classList.remove('hidden');
  navLogo.style.display = 'none';
  if (nav.classList.contains('sticky')) nav.classList.remove('sticky');
  else return;
};
showBar();
