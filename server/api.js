// our dependencies
const express = require('express');
const app = express();

// from top level path e.g. localhost:3000, this response will be sent
app.get('/api/getaccounts', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    res.send({ data: [
      {name: 'Shibu', dob: '22/05/1978'},
      {name: 'Rejitha', dob: '22/05/1978'}
    ]
    });
});

// set the server to listen on port 3000
app.listen(3000, () => console.log('Listening on port 3000'));
