import fetchImages from './js/pixabay-api';
import {
  hideLoader,
  renderImages,
  showLoader,
  showMessage,
  showMessageErr,
} from './js/render-functions';

const form = document.querySelector('form');
const input = document.querySelector('#search-text');
const btnLoadMore = document.querySelector('.btn-load');
const loadElem = document.querySelector('.js-loader');
const gallery = document.querySelector('.gallery');

let query;
let page;
let total;
let per_page = 20;

form.addEventListener('submit', handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();

  const searchText = input.value.trim();
  if (!searchText) return;
  input.value = '';
  showLoader();

  let page = 1;
  let query = e.target.elements.query.value;

  try {
    const result = await fetchArticles(query, page, total, per_page);

    fetchImages(searchText);

    const data = handleSearchResults(result, data.data.hits);
    total = result.totalResults;
  } catch {
    hideLoader();
    showMessageErr();
    console.log(err);
  }

  function handleSearchResults(images) {
    if (images.length == 0) {
      showMessage();
    }
    renderImages(images);
  }
  checkBtnStatus();
  hideSpinner();
}
btnLoadMore.addEventListener('click', async () => {
  page += 1;
  showSpinner();
  checkBtnStatus();
  const result = await fetchArticles(query, page, total, per_page);
  const markup = articlesTemplate(result.images);
  gallery.insertAdjacentHTML('beforeend', markup);
  hideSpinner();

  scrollPage();
});

function showLoadMoreBtn() {
  btnLoadMore.disabled = false;
}

function hideLoadMoreBtn() {
  btnLoadMore.disabled = true;
}

function checkBtnStatus(page, total, per_page) {
  const perPage = 20;
  const maxPage = Math.ceil(total / perPage);

  if (page >= maxPage) {
    hideLoadMoreBtn();
    iziToast.info('This is last page');
  } else {
    showLoadMoreBtn();
  }
}

function showSpinner() {
  loadElem.classList.remove('hidden');
}

function hideSpinner() {
  loadElem.classList.add('hidden');
}

function scrollPage() {
  const info = gallery.firstElementChild.getBoundingClientRect();
  const height = info.height;
  scrollBy({
    behavior: 'smooth',
    top: height * 2,
  });
}
