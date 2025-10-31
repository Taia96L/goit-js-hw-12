import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  disableLoadMoreButton,
  enableLoadMoreButton,
  showInputError,
  hideInputError,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
let pageNumber = 1;
let searchInputValue = '';

form.addEventListener('submit', submitHandler);
document
  .querySelector('.button-more')
  .addEventListener('click', moreButtonHandler);

async function submitHandler(e) {
  e.preventDefault();
  pageNumber = 1;

  const { ['search-text']: searchInput } = e.target.elements;
  searchInputValue = searchInput.value.trim();

  clearGallery();
  hideLoadMoreButton();

  try {
    if (!searchInputValue.length) {
      showInputError(searchInput);
      showErrorPopup("Input shouldn't be empty!");
      return;
    }

    hideInputError(searchInput);
    showLoader();

    const { data, totalPages } = await getImagesByQuery(
      searchInputValue,
      pageNumber
    );

    if (!data.length) {
      throw new Error('No images found!');
    }

    createGallery(data);

    if (pageNumber < totalPages) {
      showLoadMoreButton();
    } else {
      showInfoPopup("We're sorry, but you've reached the end of search results.");
    }
  } catch (error) {
    showErrorPopup(error.message);
  } finally {
    hideLoader();
  }

  form.reset();
}

async function moreButtonHandler(e) {
  e.preventDefault();
  pageNumber += 1;
  showLoader();
  disableLoadMoreButton();

  try {
    const { data, totalPages } = await getImagesByQuery(
      searchInputValue,
      pageNumber
    );

    createGallery(data);

    if (pageNumber < totalPages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      showInfoPopup("We're sorry, but you've reached the end of search results.");
    }

    const galleryItem = gallery.querySelector('.gallery-item');
    if (galleryItem) {
      const itemHeight = galleryItem.getBoundingClientRect().height;
      window.scrollBy({
        top: itemHeight * 2,
        behavior: 'smooth',
      });
    }
  } catch (error) {
    hideLoadMoreButton();
    showErrorPopup(error.message);
  } finally {
    hideLoader();
    enableLoadMoreButton();
  }
}

function showErrorPopup(message) {
  iziToast.error({
    message,
    position: 'topRight',
    timeout: 3000,
  });
}

function showInfoPopup(message) {
  iziToast.info({
    message,
    position: 'topRight',
    timeout: 3000,
  });
}
