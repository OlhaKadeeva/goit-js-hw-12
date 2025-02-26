import axios from 'axios';

export default async function fetchImages(query, page) {
  const options = {
    params: {
      key: '48865125-4f8597dc0399716036b78fee9',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 40,
      page,
    },
  };
  const res = await axios.get('https://pixabay.com/api/', options);
  return res.data;
}
