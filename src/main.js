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
const input = document.querySelector('#search-text');
const buttonLoadMore = document.querySelector('.button');

const params = {
  query: '',
  page: 1,
  per_page: 40,
  total: 100,
};

async function handleSearchResults(images, page, total) {
  const maxPage = Math.ceil(total / params.per_page); // дізнаємось максимальну сторінку і округляємо

  if (images.length === 0) {
    checkBtnStatus(maxPage);
    showMessage();
  } else {
    renderImages(images, page);
    if (page === maxPage) {
      showMessageTheEnd();
    } else {
      checkBtnStatus(maxPage);
      if (params.page >= maxPage) {
        showMessageTheEnd();
      }
    }
  }
}

form.addEventListener('submit', async e => {
  e.preventDefault();

  params.page = 1;
  params.query = input.value.trim(); //запит користувача(що ввів користувач)

  if (!params.query) return;
  input.value = '';
  showLoader();

  try {
    const data = await fetchImages(params.query, params.page, params.per_page); //чекаємо результат запиту
    await handleSearchResults(data.hits, params.page, data.total); //передаємо отримані зображення
    params.total = data.total;
  } catch (err) {
    console.error('Помилка запиту:', err);
    showMessageErr();
  } finally {
    hideLoader(); //ховаємо лоадер в будь-якому випадку
  }
});

// Load more button

buttonLoadMore.addEventListener('click', async () => {
  params.page += 1;
  showLoader();
  const data = await fetchImages(params.query, params.page, params.per_page); //запит зі збільшеною сторінкою
  await handleSearchResults(data.hits, params.page, data.total);
  hideLoader();
  scrollPage(); //проскролювання
});

function showLoadMoreBtn() {
  buttonLoadMore.classList.remove('hidden'); //видалити
}
function hideLoadMoreBtn() {
  buttonLoadMore.classList.add('hidden'); //сховати
}

//функція, яка перевіряє показати кнопку 'Load more' чи сховати.
function checkBtnStatus(maxPage) {
  if (params.page >= maxPage) {
    hideLoadMoreBtn(); //кнопку сховати
  } else {
    showLoadMoreBtn(); //кнопку показати
  }
}
