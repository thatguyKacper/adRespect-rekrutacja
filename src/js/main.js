import Macy from 'macy';
import Slider from './slider';
import Gallery from './gallery';

const mobileMenuIcon = document.getElementById('mobile-menu-button');
const offerMenuItem = document.getElementById('offer-mobile-item');
const searchMenuIcon = document.getElementById('search-menu-button');
const slider = document.querySelector('#slider');
const gallery = document.querySelector('#gallery');
const obesravable = document.querySelector('#projects');
const imgLazy = document.querySelectorAll('img[data-src]');
const openGallery = document.querySelector('#overlay-button');

mobileMenuIcon.addEventListener('click', () => {
  if (mobileMenuIcon.classList.contains('open')) {
    mobileMenuIcon.classList.remove('open');
  } else {
    mobileMenuIcon.classList.add('open');
  }
});

offerMenuItem.addEventListener('click', () => {
  if (offerMenuItem.classList.contains('open')) {
    offerMenuItem.classList.remove('open');
  } else {
    offerMenuItem.classList.add('open');
  }
});

searchMenuIcon.addEventListener('click', () => {
  if (searchMenuIcon.classList.contains('open')) {
    searchMenuIcon.classList.remove('open');
  } else {
    searchMenuIcon.classList.add('open');
  }
});

openGallery.addEventListener('click', () => {
  document.querySelector('#gallery').classList.remove('max-h-[800px]');

  openGallery.parentElement.remove();
});

// Obrerver for lazy loading

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  imgLazy.forEach((img) => {
    img.src = img.dataset.src;

    img.addEventListener('load', () => {
      img.classList.remove('blur-sm');
    });
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgObserver.observe(obesravable);

// Create instances

const mySlider = new Slider(slider);

const myGallery = new Gallery(gallery);

const macy = new Macy({
  container: '#gallery',
  mobileFirst: true,
  columns: 1,
  trueOrder: true,
  breakAt: {
    600: 2,
    1024: 3,
  },
  margin: {
    y: 42,
    x: 43,
  },
});
