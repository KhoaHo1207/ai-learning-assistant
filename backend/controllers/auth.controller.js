import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

//Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });
};

//@desc Register new user
//@route POST /api/auth/register
//@access Public
export const register = async (req, register, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

//@desc Get user profile
//@route GET /api/auth/profile
//@access Private

export const getProfile = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

//@desc Update user profile
//@route PUT /api/auth/profile
//@access Private
export const updateProfile = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

//@desc Change password
//@route POST /api/auth/change-password
//@access Private
export const changePassword = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
