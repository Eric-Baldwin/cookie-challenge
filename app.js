const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();


app.use(cookieParser());
app.get('/login', (req, res) => {

  const name = req.query.name || 'Guest';

  res.cookie('name', name, { maxAge: 900000, httpOnly: true });
  res.send('Cookie has been set!');
});


app.get('/hello', (req, res) => {
  if (req.cookies.name) {
    res.send(`Welcome ${req.cookies.name}!`);
  } else {
    res.send('Hello Guest!');
  }
});

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
