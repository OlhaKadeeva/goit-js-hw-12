import axios from 'axios';

export default function fetchImages(searchText) {
  const options = {
    params: {
      key: '48865125-4f8597dc0399716036b78fee9',
      q: searchText,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };
  return axios.get('https://pixabay.com/api/', options);
}
