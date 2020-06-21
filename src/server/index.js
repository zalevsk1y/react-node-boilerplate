import express from 'express';
import path from 'path';
import render from './utils/utils.render';
import template from './utils/utils.template';

const initialState = { isFetching: false };
const dirname = process.cwd();
const app = express();
app.use('/public/images', express.static(path.resolve(dirname, 'public', 'images')));
app.use('/public/css', express.static(path.resolve(dirname, 'client-dist', 'css')));
app.use('/public/js', express.static(path.resolve(dirname, 'client-dist', 'js')));
app.get('/', (req, res) => {
  const { preloadedState, content } = render(initialState);
  const response = template('Tech test', preloadedState, content);
  console.log(path.resolve(dirname, 'public', 'images'));
  res.send(response);
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
