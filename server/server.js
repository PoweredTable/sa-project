const express = require("express");
const cors = require('cors');
const port = 5000;

const authorRoutes = require('./routes/authors')
const bannerRoutes = require('./routes/banners')
const bookRoutes = require('./routes/books')
const genreRoutes = require('./routes/genres')
const userRoutes = require('./routes/users')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/v1/authors', authorRoutes);
app.use('/api/v1/banners', bannerRoutes);
app.use('/api/v1/books', bookRoutes);
app.use('/api/v1/genres', genreRoutes);
app.use('/api/v1/users', userRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})