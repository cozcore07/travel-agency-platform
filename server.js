const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/dashboard', (req, res) => {
  res.sendFile(__dirname + '/dashboard.html');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
