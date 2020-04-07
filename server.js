//Install express server
const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('./dist/vivaRDC'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/vivaRDC/'}
  );
});
app.listen(process.env.PORT);
