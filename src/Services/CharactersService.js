import { API_BASE_URL } from '../config';

const fetchAllCharacters = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/AllCharacters`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  
  export { fetchAllCharacters };