const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());

// Endpoint to get Customer Type data
app.get('/api/customer-type', (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/CustomerType.json')));
    res.json(data);
});

// Endpoint to get Account Industry data
app.get('/api/account-industry', (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/AccountIndustry.json')));
    res.json(data);
});

// Endpoint to get Team data
app.get('/api/team', (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/Team.json')));
    res.json(data);
});

// Endpoint to get Product Line data
app.get('/api/product-line', (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/ProductLine.json')));
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
