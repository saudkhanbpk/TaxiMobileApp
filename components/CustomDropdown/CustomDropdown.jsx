import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const CustomDropdown = ({ label, data, value, onChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Dropdown
        style={styles.dropdown}
        containerStyle={styles.dropdownContainer}
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Select Company"
        value={value}
        onChange={onChange}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        dropdownPosition="bottom" // Optional: adjust the position of the dropdown
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
    color: 'white',
    fontFamily: 'Roboto-Medium',
  },
  dropdown: {
   height:47,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical:5,
    backgroundColor: '#9C9B9F',
  },
  dropdownContainer: {
    backgroundColor: '#9C9B9F',
   
  },
  placeholderStyle: {
    fontSize: 18,
    color: 'white',
    fontFamily:"Roboto-Medium"
  },
  selectedTextStyle: {
    fontSize: 18,
    color: 'white',
    fontFamily:"Roboto-Medium"
  },
});

export default CustomDropdown;
