import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { z } from 'zod'; // Import Zod
import User from '../models/User';
import { authConfig } from '../config/auth';

// Zod Schemas
const registerSchema = z.object({
  email: z.string()
    .transform(val => val.toLowerCase().trim())
    .pipe(z.string().email('Valid email is required')), // Transform then validate
  password: z.string()
    .min(authConfig.minPasswordLength, `Password must be at least ${authConfig.minPasswordLength} characters`)
    .refine(val => !val.includes('password'), { message: "Password cannot contain the word 'password'" }),
  name: z.string().min(1, 'Name is required').transform(val => val.trim()),
});

const loginSchema = z.object({
  email: z.string()
    .transform(val => val.toLowerCase().trim())
    .pipe(z.string().email('Valid email is required')),
  password: z.string().min(1, 'Password is required'),
});

/**
 * Register a new user
 * POST /api/auth/register
 */
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    // Validate input using Zod safeParse
    const validation = registerSchema.safeParse(req.body);

    if (!validation.success) {
      // Return first error message
      res.status(400).json({ error: validation.error.errors[0].message });
      return;
    }

    const { email, password, name } = validation.data;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ error: 'Email already registered' });
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, authConfig.bcryptSaltRounds);

    // Create user
    const user = new User({
      email,
      password: hashedPassword,
      name: name || undefined,
    });

    await user.save();

    // Generate JWT
    const token = jwt.sign(
      { userId: user._id.toString(), email: user.email },
      authConfig.jwtSecret,
      { expiresIn: 86400 } // 24 hours
    );

    res.status(201).json({ 
      message: 'User registered successfully', 
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    console.error('Registration error:', JSON.stringify(error, null, 2));
    res.status(500).json({ error: 'Internal server error' });
  }
};

/**
 * Login user
 * POST /api/auth/login
 */
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    // Validate input using Zod safeParse
    const validation = loginSchema.safeParse(req.body);

    if (!validation.success) {
      res.status(400).json({ error: validation.error.errors[0].message });
      return;
    }

    const { email, password } = validation.data;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user._id.toString(), email: user.email },
      authConfig.jwtSecret,
      { expiresIn: 86400 } // 24 hours in seconds
    );

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

/**
 * Logout user
 * POST /api/auth/logout
 */
export const logout = async (_req: Request, res: Response): Promise<void> => {
  // JWT is stateless, so logout is handled client-side
  res.json({ message: 'Logged out successfully' });
};

/**
 * Get current user
 * GET /api/auth/me
 */
export const getMe = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).user?.userId;
    
    if (!userId) {
      res.status(401).json({ error: 'Not authenticated' });
      return;
    }

    const user = await User.findById(userId).select('-password');

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.json({ user });
  } catch (error) {
    console.error('Get me error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
