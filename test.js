const axios = require('axios');

axios.get('http://localhost:3300').then(
  (res) => {
    console.log('success');
    console.log(res.data);
  },
  () => {
    console.log('error');
  },
)