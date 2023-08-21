class Gallery {
  constructor(gallery) {
    if (!(gallery instanceof Element)) {
      throw new Error('No gallery passed in');
    }

    this.gallery = gallery;

    this.images = Array.from(gallery.querySelectorAll('.img-container'));
    this.modal = document.querySelector('.modal');
    this.prevButton = this.modal.querySelector('.prevBtn');
    this.nextButton = this.modal.querySelector('.nextBtn');

    this.showNextImage = this.showNextImage.bind(this);
    this.showPrevImage = this.showPrevImage.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);

    this.images.forEach((image) =>
      image.addEventListener('click', (e) => this.showImage(e.currentTarget)),
    );

    this.images.forEach((image) =>
      image.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') this.showImage(e.currentTarget);
      }),
    );

    this.modal.addEventListener('click', this.handleClickOutside);
  }

  openModal() {
    if (this.modal.matches('.open')) return;

    this.modal.classList.add('open');

    window.addEventListener('keyup', this.handleKeyUp);
    this.nextButton.addEventListener('click', this.showNextImage);
    this.prevButton.addEventListener('click', this.showPrevImage);
  }

  closeModal() {
    this.modal.classList.remove('open');

    window.removeEventListener('keyup', this.handleKeyUp);
    this.nextButton.removeEventListener('click', this.showNextImage);
    this.prevButton.removeEventListener('click', this.showPrevImage);
  }

  showImage(container) {
    if (!container) return;

    this.modal.querySelector('img').src = container.firstElementChild.src;
    this.currentImage = container.firstElementChild;

    this.openModal();
  }

  handleClickOutside(e) {
    if (e.target === e.currentTarget.firstElementChild) this.closeModal();
  }

  handleKeyUp(e) {
    if (e.key === 'Escape') return this.closeModal();
    if (e.key === 'ArrowRight') return this.showNextImage();
    if (e.key === 'ArrowLeft') return this.showPrevImage();
  }

  showNextImage() {
    this.showImage(
      this.currentImage.parentElement.nextElementSibling || this.images[0],
    );
  }

  showPrevImage() {
    this.showImage(
      this.currentImage.parentElement.previousElementSibling ||
        this.images[this.images.length - 1],
    );
  }
}

export default Gallery;
