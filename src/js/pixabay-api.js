import axios from 'axios';

export default async function fetchImages(query, page, per_page) {
  const options = {
    params: {
      key: '48865125-4f8597dc0399716036b78fee9',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: per_page,
      page: page,
    },
  };
  const res = await axios.get('https://pixabay.com/api/', options);
  return res.data;
}
