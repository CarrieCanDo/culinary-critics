const jwt = require('jsonwebtoken');
const { generateToken, verifyToken } = require('../restaurant-critics-backend/config/jwtConfig');

// Mock user data
const mockUser = { _id: '12345', email: 'test@example.com' };

describe('JWT Config', () => {
    it('should generate a valid token', () => {
        const token = generateToken(mockUser);
        expect(token).toBeDefined();
        const decoded = jwt.decode(token);
        expect(decoded.email).toBe(mockUser.email);
    });

    it('should verify a valid token', () => {
        const token = generateToken(mockUser);
        const verified = verifyToken(token);
        expect(verified.email).toBe(mockUser.email);
    });

    it('should throw an error for an invalid token', () => {
        const invalidToken = 'invalidToken';
        expect(() => verifyToken(invalidToken)).toThrow('Invalid or expired token');
    });
});
