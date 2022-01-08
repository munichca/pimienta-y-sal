const express = require('express');
const app = express();
const port = 4000;

app.listen(port, () => {
    console.log(`Puerto corriendo en ${port}\n http://localhost:${port}`)
  })

app.use(express.static("public"));
app.set('view engine', 'ejs');

const mainRouter = require('./routes/mainRouter');
app.use('/', mainRouter)