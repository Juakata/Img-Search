import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID wU9CKkn8n6aveDSHb2vAdw51ZfLlC0A_TTMIzWmeE1I',
  }
});
