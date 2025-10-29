import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreButton = document.querySelector('.button-more');

const simpleGallery = new SimpleLightbox('.gallery-item .link', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGallery(images) {
  const markup = images
    .map(
      ({
         webformatURL,
         largeImageURL,
         tags,
         likes = 0,
         views = 0,
         comments = 0,
         downloads = 0,
       }) => `
      <li class="gallery-item">
        <a class="link" href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" class="image" width="400">
        </a>
        <div class="information like">
          <h4>Likes</h4>
          <p>${likes}</p>
        </div>
        <div class="information views">
          <h4>Views</h4>
          <p>${views}</p>
        </div>
        <div class="information comments">
          <h4>Comments</h4>
          <p>${comments}</p>
        </div>
        <div class="information downloads">
          <h4>Downloads</h4>
          <p>${downloads}</p>
        </div>
      </li>
  `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  simpleGallery.refresh();
}

function clearGallery() {
  gallery.innerHTML = '';
}

function showLoader() {
  loader.classList.remove('hide');
}

function hideLoader() {
  loader.classList.add('hide');
}

function showLoadMoreButton() {
  loadMoreButton.classList.remove('hide');
}

function hideLoadMoreButton() {
  loadMoreButton.classList.add('hide');
}

export {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
};