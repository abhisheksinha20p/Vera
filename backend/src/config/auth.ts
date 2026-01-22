export const authConfig = {
  jwtSecret: process.env.JWT_SECRET || 'fallback-secret-change-in-production',
  jwtExpiresIn: '24h',
  bcryptSaltRounds: 10,
  minPasswordLength: 6,
};
