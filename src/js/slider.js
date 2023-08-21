class Slider {
  constructor(slider) {
    if (!(slider instanceof Element)) {
      throw new Error('No slider passed in');
    }

    this.slider = slider;

    this.slides = slider.querySelector('.slides');

    const prevButton = slider.querySelector('.prevBtn');
    const nextButton = slider.querySelector('.nextBtn');

    this.startSlider();
    this.addClasses();

    prevButton.addEventListener('click', () => this.move('back'));
    nextButton.addEventListener('click', () => this.move());
  }

  startSlider() {
    this.current =
      this.slider.querySelector('.current') || this.slides.firstElementChild;
    this.prev =
      this.current.previousElementSibling || this.slides.lastElementChild;
    this.next =
      this.current.nextElementSibling || this.slides.firstElementChild;
  }

  addClasses() {
    this.current.classList.add('current');
    this.prev.classList.add('prev');
    this.next.classList.add('next');
  }

  move(direction) {
    const classesToRemove = ['prev', 'current', 'next'];

    this.prev.classList.remove(...classesToRemove);
    this.current.classList.remove(...classesToRemove);
    this.next.classList.remove(...classesToRemove);

    if (direction === 'back') {
      [this.prev, this.current, this.next] = [
        this.prev.previousElementSibling || this.slides.lastElementChild,
        this.prev,
        this.current,
      ];
    } else {
      [this.prev, this.current, this.next] = [
        this.current,
        this.next,
        this.next.nextElementSibling || this.slides.firstElementChild,
      ];
    }

    this.addClasses();
  }
}

export default Slider;
