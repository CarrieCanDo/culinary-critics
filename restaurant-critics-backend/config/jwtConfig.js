// Import required dependencies
const jwt = require('jsonwebtoken');
require('dotenv').config(); // Loads environment variables from .env file

// Define the JWT secret and expiry duration
const jwtSecret = process.env.JWT_SECRET || 'yourSecretKey'; // Use a default secret if none is provided in .env
const jwtExpiry = process.env.JWT_EXPIRY || '1h'; // Default to 1 hour if not set in .env

/**
 * Generates a JWT token for a given user.
 * @param {Object} user - The user object. Should contain _id and email.
 * @returns {string} - The generated JWT token.
 */
const generateToken = (user) => {
  // Payload can include any necessary user data (id, email, roles, etc.)
  const payload = { id: user._id, email: user.email };
  return jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiry });
};

/**
 * Verifies a given JWT token.
 * @param {string} token - The JWT token to verify.
 * @returns {Object} - The decoded token payload if verification is successful.
 * @throws {Error} - If the token is invalid or expired.
 */
const verifyToken = (token) => {
  try {
    return jwt.verify(token, jwtSecret);
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
