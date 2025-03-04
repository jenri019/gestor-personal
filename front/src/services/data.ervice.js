import axios from 'axios';

const API_URL = 'https://api.example.com/data';

const fetchData = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('There was a problem with the axios operation:', error);
        throw error;
    }
};

export default fetchData;