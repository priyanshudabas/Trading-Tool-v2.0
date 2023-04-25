// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     async function fetchUserData() {
//       try {
//         const response = await axios.get('/api/v3/account', {
//           headers: {
//             'X-MBX-APIKEY': '',
//           },
//         });
//         setUserData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     fetchUserData();
//   }, []);

//   if (!userData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Hello, {userData.balances[0].asset}!</h1>
//       <p>Your account balance is {userData.balances[0].free}.</p>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import crypto from 'crypto-browserify';

function AccountDetails() {
  const [accountDetails, setAccountDetails] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const baseUrl = 'https://api.binance.com';
    const endpoint = '/api/v3/account';
    const apiKey = '';
    const secretKey = '';

    const timestamp = Date.now();
    const queryString = `timestamp=${timestamp}`;
    const signature = createSignature(queryString, secretKey);

    axios
      .get(`${baseUrl}${endpoint}?${queryString}&signature=${signature}`, {
        headers: {
          'X-MBX-APIKEY': apiKey,
        },
      })
      .then((response) => {
        setAccountDetails(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  function createSignature(queryString, secretKey) {
    const hmac = crypto.createHmac('sha256', secretKey);
    hmac.update(queryString);
    return hmac.digest('hex');
  }

  return (
    <div>
      {error && <p>Error fetching account details</p>}
      {!error && (
        <ul>
          <li>Account type: {accountDetails.accountType}</li>
          <li>Maker commission: {accountDetails.makerCommission}</li>
          <li>Taker commission: {accountDetails.takerCommission}</li>
        </ul>
      )}
    </div>
  );
}

export default AccountDetails;
