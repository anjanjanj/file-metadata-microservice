import express from 'express';
import path from 'path';
import multer from 'multer';

const app = express();
const upload = multer();

require('dotenv').load();

app.post('/api/fileanalyse', upload.single('uploadedFile'), (req, res, next) => {
  //console.log(req.file.size);
  res.json({size: req.file.size}); 
})

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () =>
  console.log('Node.js listening on port ' + port + '...')
);