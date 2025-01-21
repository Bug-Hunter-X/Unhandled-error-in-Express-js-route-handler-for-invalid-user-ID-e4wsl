const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Validate that userId is a number before parsing
  if (isNaN(userId) || !Number.isInteger(parseInt(userId))) {
    return res.status(400).send('Invalid user ID');
  }
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    res.status(404).send('User not found');
  } else {
    res.send(user);
  }
});