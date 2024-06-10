import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';

const CustomTextInput = ({ label, value, onChangeText, placeholder, secureTextEntry = false }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#fff"
          secureTextEntry={!isPasswordVisible && secureTextEntry}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer}>
            <Icon name={isPasswordVisible ? 'eyeo' : 'eye'} size={24}  />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding:10
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
    color: 'white',
    fontFamily: 'Roboto-Medium',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#9C9B9F',
    width: wp(80),
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    color: '#fff',
  },
  iconContainer: {
    paddingHorizontal: 10,
  },
});

export default CustomTextInput;
