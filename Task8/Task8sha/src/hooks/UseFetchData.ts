import axios from 'axios';

const fetchData = async () => {
    try {
        const response = await axios.get('https://your-api-endpoint');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};