import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

// 1. SIGNUP - This was the missing piece!
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  
  // Hash the password before saving to MongoDB
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    next(error); 
  }
};

// 2. SIGNIN 
export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return res.status(404).json({ message: 'User not found!' });

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return res.status(401).json({ message: 'Wrong credentials!' });

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    const { password: pass, ...rest } = validUser._doc;
    res.cookie('access_token', token, { httpOnly: true })
       .status(200)
       .json(rest);

  } catch (error) {
    next(error);
  }
};

// 3. LOGOUT 
export const logout = (req, res) => {
  res.clearCookie('access_token');
  res.status(200).json({ message: 'Logged out successfully!' });
};