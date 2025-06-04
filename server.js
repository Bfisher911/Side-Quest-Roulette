const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

const quests = [
  'Explore a nearby park you have never visited before.',
  'Cook a meal from a cuisine you have never tried.',
  'Visit a local museum or art gallery.',
  'Take a scenic bike ride around your town.',
  'Attempt a DIY craft or home project.',
  'Try a new board game with friends or family.',
  'Go on a photo scavenger hunt in your city.'
];

app.get('/quest', (req, res) => {
  const index = Math.floor(Math.random() * quests.length);
  res.json({ quest: quests[index] });
});

// Serve index.html for any other request (single-page support)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
