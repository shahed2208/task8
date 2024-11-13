import axios from 'axios';

const BASE_URL = 'https://test1.focal-x.com/api/items/5'; 

const apiService = {
  async getData() {
    const response = await axios.get(`${BASE_URL}/data`);
    return response.data;
  },
  
};

export default apiService;