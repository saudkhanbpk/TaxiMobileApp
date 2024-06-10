// ReusableButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#B9BCDD',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:10,
    paddingVertical:10,
    width:140,
    
    
  },
  buttonText: {
    color: '#000',
    fontSize: 22,
     fontFamily:"Roboto-Bold",
    
  },
});

export default Button;
