require('dotenv').config();
const express = require('express');
const statusRoutes = require('./routes/statusRoutes');
const wooRoutes = require('./routes/wooCommerceRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/status', statusRoutes);
app.use('/api/woo', wooRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});