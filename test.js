const axios = require('axios');

axios.get('http://localhost:5001/metrics').then(
  () => {
    console.log('success');
  },
  () => {
    console.log('error');
  },
)