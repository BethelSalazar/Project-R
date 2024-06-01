// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const classesRoutes = require('./routes/classes');
app.use('/api/classes', classesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
