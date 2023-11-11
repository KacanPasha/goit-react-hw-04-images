import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
export const fetchImages = async (newFilter, page = 1) => {
  const params = new URLSearchParams({
    key: '32986488-9ce982f9b759e16f036d99c30',
    q: newFilter,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 12,
  });

  const response = await axios.get(`?${params}`);

  return response.data;
};
