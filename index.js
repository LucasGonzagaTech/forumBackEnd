const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./Routes/user');
const topicRoutes = require('./Routes/topic');
const postRoutes = require('./Routes/post');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/forum-app', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use('/users', userRoutes);
app.use('/topics', topicRoutes);
app.use('/posts', postRoutes);

app.listen(port, () => {
    console.log(`Server running on this port ${port}`);
});
