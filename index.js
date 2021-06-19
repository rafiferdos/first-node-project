const express = require('express');

const app = express();

// const rootCall = (req, res) => res.send('Thank you for calling me');

app.get('/', (req,res) => {
    res.send('Thank you for calling me')
})
app.listen(4000, () => console.log('Lisening to port 4000'));
