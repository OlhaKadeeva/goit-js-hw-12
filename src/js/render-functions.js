import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');
const loaderBox = document.querySelector('.loader-box');

export function renderImages(images, page) {
  const galleryHtml = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
            <li class="gallery-item">
              <a class="gallery-link" href="${largeImageURL}">
                <figure class="thumb-container">
                  <img
                    class="thumb-image"
                    src="${webformatURL}"
                    data-source="${largeImageURL}"
                    alt="${tags}"
                  />
  
                  <figcaption class="thumb-data">
                    <dl class="thumb-data-list">
                      <div class="thumb-data-item">
                        <dt class="thumb-data-title">Likes</dt>
                        <dd class="thumb-data-data">${likes}</dd>
                      </div>
                      <div class="thumb-data-item">
                        <dt class="thumb-data-title">Views</dt>
                        <dd class="thumb-data-data">${views}</dd>
                      </div>
                      <div class="thumb-data-item">
                        <dt class="thumb-data-title">Comments</dt>
                        <dd class="thumb-data-data">${comments}</dd>
                      </div>
                      <div class="thumb-data-item">
                        <dt class="thumb-data-title">Downloads</dt>
                        <dd class="thumb-data-data">${downloads}</dd>
                      </div>
                    </dl>
                  </figcaption>
                </figure>
              </a>
            </li>
          `
    )
    .join('');
  if (page === 1) {
    gallery.innerHTML = galleryHtml;
  } else {
    gallery.insertAdjacentHTML('beforeend', galleryHtml);
  }
  lightbox.refresh();
  hideLoader();
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function showLoader() {
  loaderBox.classList.remove('hidden');
}

export function hideLoader() {
  gallery.classList.remove('hidden');
  loaderBox.classList.add('hidden');
}

export function showMessage() {
  iziToast.show({
    position: 'topRight',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    close: `true`,
    title: 'Error',
    messageSize: '16px',
    messageLineHeight: '24px',
    messageColor: 'white',
    maxWidth: '432px',
    backgroundColor: '#EF4040',
  });
}
export function showMessageErr() {
  iziToast.show({
    position: 'topRight',
    message: 'Something went wrong...',
    close: `true`,
    title: 'Error',
    messageSize: '16px',
    messageLineHeight: '24px',
    messageColor: 'white',
    maxWidth: '432px',
    backgroundColor: '#EF4040',
  });
}
export function showMessageTheEnd() {
  iziToast.show({
    position: 'bottomRight',
    message: "We're sorry, but you've reached the end of search results.",
    close: `true`,
    title: 'Info',
    messageSize: '16px',
    messageLineHeight: '24px',
    messageColor: 'white',
    maxWidth: '432px',
    backgroundColor: '#EF4040',
  });
}

//при натисканні на кнопку лоад мор плавний скрол
export function scrollPage() {
  const info = gallery.lastElementChild.getBoundingClientRect();
  const height = info.height; //звертаємось до властивості висота в об'єкті
  window.scrollBy({
    behavior: 'smooth', //плавність прокручування
    top: height * 3,
  });
}
