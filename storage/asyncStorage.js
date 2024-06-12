import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAsyncStorageItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error setting AsyncStorage item:', error);
  }
};

export const getAsyncStorageItem = async (key) => {
  try {
    const item = await AsyncStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Error getting AsyncStorage item:', error);
    return null;
  }
};

export const removeAsyncStorageItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing AsyncStorage item:', error);
  }
};
