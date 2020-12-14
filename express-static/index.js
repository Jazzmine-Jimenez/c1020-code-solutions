const express = require('express');
const path = require('path');
const app = express();

const newPath = path.join(__dirname, 'public');
const staticFiles = express.static(newPath);
app.use(staticFiles);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
