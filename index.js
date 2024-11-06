const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');
const healthRoutes = require('./routes/healthRoutes');
const { errorHandler } = require('./middlewares/errorHandler');

if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: '.env.local' });
} else {
  dotenv.config();
}

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/contacts', contactRoutes);
app.use('/api', healthRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running in ${PORT}`);
});
