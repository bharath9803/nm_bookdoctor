import axios from 'axios';

const fetchDoctors = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/doctors');
        console.log(response.data); // Check the data received
    } catch (error) {
        console.error("Error fetching doctors:", error);
    }
};

// Call the function somewhere in your component
useEffect(() => {
    fetchDoctors();
}, []);
