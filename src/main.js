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
  let maxPage = Math.ceil(total / params.per_page); // дізнаємось максимальну сторінку і округляємо
  if (images.length === 0) {
    checkBtnStatus(maxPage);
    showMessage();
    return; //
  } else {
    renderImages(images, page);
    checkBtnStatus(maxPage);
    if (page === maxPage) {
      showMessageTheEnd();
    } else {
      if (params.page >= maxPage) {
        showMessageTheEnd();
      }
    }
  }
}

form.addEventListener('submit', async e => {
  e.preventDefault();
  // querry parameters
  params.page = 1;
  params.query = input.value.trim(); //запит користувача(що ввів користувач)

  if (!params.query) return;
  input.value = '';
  // Loader start
  showLoader();
  //  Qerry
  try {
    const data = await fetchImages(params.query, params.page, params.per_page); //чекаємо результат запиту
    await handleSearchResults(data.hits, params.page, data.total); //передаємо отримані зображення
  } catch (err) {
    console.error('Помилка запиту:', err);
    showMessageErr();
  } finally {
    // input.value = '';//очистити
    params.total = data.total;
    hideLoader(); //ховаємо лоадер в будь-якому випадку
  }
});

// Load more button
buttonLoadMore.addEventListener('click', async () => {
  showLoader();
  params.page++;
  // Querry
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
function checkBtnStatus(lastPage) {
  if (params.page >= lastPage) {
    hideLoadMoreBtn(); //кнопку сховати
  } else {
    showLoadMoreBtn(); //кнопку показати
  }
}
