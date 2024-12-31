// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// @route   POST /auth/register
// @desc    Registrasi pengguna baru
// @access  Public
router.post('/register', register);

// @route   POST /auth/login
// @desc    Login pengguna
// @access  Public
router.post('/login', login);

module.exports = router;
