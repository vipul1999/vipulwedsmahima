const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for the main wedding card
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'wedding-card.html'));
});

// Health check endpoint for Render
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Wedding Card Server is running' });
});

app.listen(PORT, () => {
    console.log(`🎉 Rajasthani Wedding Card Server is running on port ${PORT}`);
    console.log(`🌐 Visit: http://localhost:${PORT}`);
});
