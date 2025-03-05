import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/home/all';

const getAll = async (body) => {
    try {
        const response = await axios.post(`${API_URL}`, body);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default {
    getAll
};