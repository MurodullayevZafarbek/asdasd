const express = require('express');
const app = express();

// config
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/posts', require('./routes/posts'));


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Starting on port ${PORT}`);
})