import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 2ac0dc3e6cdcb6ce21dd289b4d9ca07276e730ee72f3c499c666f43143cddb49'
  }
});
