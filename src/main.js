import iziToast from 'izitoast';
import fetchImages from './js/pixabay-api';
import {
  hideLoader,
  renderImages,
  showLoader,
  showMessage,
  showMessageErr,
  showMessageTheEnd,
  scrollPage,
} from './js/render-functions';

const form = document.querySelector('form');
// const gallery = document.querySelector('.gallery');
const input = document.querySelector('#search-text');
const buttonLoadMore = document.querySelector('.button');
const loadElem = document.querySelector('.js-loader');
const targetElem = document.querySelector('.js-target');

const params = {
  query: '',
  page: 1,
  per_page: 40,
  total: 100,
};

async function handleSearchResults(images, page) {
  if (images.length === 0) {
    if (page === 1) {
      showMessage();
    } else {
      checkBtnStatus();
    }
  } else {
    renderImages(images, page);
    checkBtnStatus();
  }
}

form.addEventListener('submit', async e => {
  e.preventDefault();
  showSpinner();
  params.page = 1;
  params.query = input.value.trim(); //запит користувача(що ввів користувач)

  if (!params.query) return;
  input.value = '';
  showLoader();
  // updateObserver();
  try {
    const data = await fetchImages(params.query, params.page, params.per_page); //чекаємо результат запиту
    await handleSearchResults(data.hits, params.page); //передаємо отримані зображення
    params.total = data.total;
  } catch (err) {
    console.error('Помилка запиту:', err);
    showMessageErr();
  } finally {
    hideLoader(); //ховаємо лоадер в будь-якому випадку
    hideSpinner();
  }
});

// Load more button

buttonLoadMore.addEventListener('click', async () => {
  params.page += 1;
  showSpinner();
  showLoader();
  const data = await fetchImages(params.query, params.page, params.per_page); //запит зі збільшеною сторінкою
  await handleSearchResults(data.hits, params.page);
  hideSpinner();
  // updateObserver();
  scrollPage(); //проскролювання
});

function showLoadMoreBtn() {
  buttonLoadMore.classList.remove('hidden'); //видалити
}
function hideLoadMoreBtn() {
  buttonLoadMore.classList.add('hidden'); //сховати
}

//функція, яка перевіряє показати кнопку 'Load more' чи сховати.
function checkBtnStatus() {
  const maxPage = Math.ceil(params.total / params.per_page); //дізнаємось максимальну сторінку і округляємо
  if (params.page >= maxPage) {
    hideLoadMoreBtn(); //кнопку сховати
    showMessageTheEnd();
  } else {
    showLoadMoreBtn(); //кнопку показати
  }
}

//Spinner
function showSpinner() {
  loadElem.classList.remove('hidden'); //видалити
}
function hideSpinner() {
  loadElem.classList.add('hidden'); //сховати
}

//клас IntersectionObserver в JS-створюємо спостерігача observer
const options = {
  rootMargin: '0px',
  threshold: 1,
};

const observer = new IntersectionObserver(arr => {
  const info = arr[0];
  console.log(info);

  if (info.isIntersecting) {
    fetchImages();
  }
}, options);

//функція для observer
function updateObserver() {
  if (params.page < maxPage) {
    console.log('+observer');
    observer.observe(targetElem); //додаємо обсервера
  } else {
    console.log('-observer');
    observer.unobserve(targetElem); //відключаємо обсервера
  }
}
