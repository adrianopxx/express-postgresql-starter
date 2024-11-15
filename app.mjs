import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config.mjs';
import dotenv from 'dotenv';
import userRoutes from './routes/user.mjs';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());

// CORS
app.use(cors());

// Test DB connection
sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

// Routes
app.use('/users', userRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
