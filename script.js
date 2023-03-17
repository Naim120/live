const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const videoFiles = [
    { name: 'Video 1', file: 'try1.mp4' },
    { name: 'Video 2', file: 'Friends.Sample.mkv' },
    { name: 'Video 3', file: 'video3.mp4' }
  ];

  res.render('index', { videoFiles });
});

app.listen(3000, () => {
  console.log('Video streaming website started on port 3000');
});
