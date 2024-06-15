import axiosInstance from './axios';
import * as ApiRoutes from "../../TaxiApp/api/apiRoutes"

export const login = async (userData) => {
  try {
    const response = await axiosInstance.post(ApiRoutes.LOGIN, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (userData) => {
    try {
        const response = await axiosInstance.post(ApiRoutes.REGISTER, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sendPasswordResetOTP = async (email) => {
  try {
      const response = await axiosInstance.post(ApiRoutes.sendUserPasswordResetOTP, { email });
      return response.data;
  } catch (error) {
      console.error('Error sending password reset OTP:', error);
      throw error.response ? error.response.data : new Error('Network error');
  }
};


export const confirmPasswordResetOTP = async (email, otp) => {
  try {
      const response = await axiosInstance.post(ApiRoutes.confirmUserPasswordResetOTP, {email, otp });
      return response.data;
      
  } catch (error) {
      console.error('Error confirming password reset OTP:', error);
      throw error.response ? error.response.data : new Error('Network error');
  }
};


export const updatePassword = async (email,newPassword) => {
  try {
    const response = await axiosInstance.post(ApiRoutes.updateUserPassword, {
      email:email,
      newPassword: newPassword,
    });
    return response.data;
  } catch (error) {
    console.error('Error updating password:', error);
    throw error.response ? error.response.data : new Error('Network error');
  }
};


export const getUser = async () => {
  try {
    const response = await axiosInstance.get(ApiRoutes.GET_USER);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (userData) => {
  try {
    const response = await axiosInstance.put(ApiRoutes.UPDATE_USER, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
