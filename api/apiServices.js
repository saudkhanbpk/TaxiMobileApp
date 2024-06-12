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
