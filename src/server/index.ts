import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '..', '..', 'build')));

app.get('/ping', (req, res) => {
  res.send('pong');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listening on port ` + port);
});