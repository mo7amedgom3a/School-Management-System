import Cors from 'micro-cors';

// Initialize CORS middleware
const cors = Cors({
    origin: '*', // Allow requests from any origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    // Allow specific HTTP methods
});

export default cors;