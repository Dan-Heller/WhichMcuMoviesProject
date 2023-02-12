import { API_BASE_URL } from '../config';

const fetchAllTitles = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/AllTitles`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAllTitlesToSelectedByMode = async (chosenTitleInd, watchOrderMode) => {
    try {
      const response = await fetch(`${API_BASE_URL}/AllTitlesToSelectedByMode?titleind=${chosenTitleInd}&mode=${watchOrderMode}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchMainTitlesOfCharacter = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/GetMainTitlesOfCharacter?characterId=${id}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
  }

  const fetchAppearingTitlesOfCharacter = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/GetAppearingTitlesOfCharacter?characterId=${id}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
  }

  

  const GetLatestCharacterTitle = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/GetTitleIndByCharacter?characterId=${id}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
  }
  
  export { fetchAllTitles, fetchAllTitlesToSelectedByMode, GetLatestCharacterTitle,fetchMainTitlesOfCharacter, fetchAppearingTitlesOfCharacter };