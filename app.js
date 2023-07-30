const express = require ('express');
const path = require('path');

const app = express();

const PORT = 3030;

/* const publicFolderPath = path.resolve(__dirname, './public');
app.use( express.static(publicFolderPath) ); */

app.use(express.static('public'));

app.listen(PORT, () =>
  console.log("Server running in http://localhost:" + PORT)
);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});