import axios from 'axios';

const EndPoint = "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";

async function getAllCountries() {
  try {
    const response = await axios.get(EndPoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];    
    
  }
}

export default getAllCountries;