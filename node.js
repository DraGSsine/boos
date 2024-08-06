const axios = require('axios');

const url = 'https://profile.intra.42.fr/user_data/142387/give_correction_point?campus_id=16&cursus_slug=42cursus';
const headers = {
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:124.0) Gecko/20100101 Firefox/124.0',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.5',
  'Accept-Encoding': 'gzip, deflate, br',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Origin': 'https://profile.intra.42.fr',
  'Connection': 'keep-alive',
  'Referer': 'https://profile.intra.42.fr/',
  'Cookie': '_intra_42_session_production=d6265b3810ea7aaa7c872aa521bb7fe6; intra=v2; user.id=MTYxOTAw--7e49b676db19b8fe1473394f8d4faf5be1d01042; locale=en; intra=v2; cf_clearance=wh5A1FKunREVzPaUC5SDPA76BioF.lkaRcq2XMV0uAM-1722953655-1.0.1.1-.hzgW7W3_8RVW8_euY_wGeN5SEm6WSm95ke6nY0by6YYceeWoaYPLLfMowCACd6vc6Iv666vrioykDWuMVjdYQ',
  'Upgrade-Insecure-Requests': '1',
  'Sec-Fetch-Dest': 'document',
  'Sec-Fetch-Mode': 'navigate',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-User': '?1',
  'TE': 'trailers'
};

const data = 'correction_point=1&commit=Donate';

const makeRequest = () => {
  return axios.post(url, data, { headers });
};

Promise.all([makeRequest(), makeRequest()])
  .then(responses => {
    console.log('Response 1:', responses[0].data);
    console.log('Response 2:', responses[1].data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
