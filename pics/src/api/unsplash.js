import axios from 'axios';

// creating a customized instance of axios 
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ada1e41f37d29e38c127de43dc8af03a68e153987c13e162a4095fe486b07fb5'
  }
});