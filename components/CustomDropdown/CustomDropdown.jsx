import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/MaterialIcons'; // or any other icon library
import {useTranslation} from 'react-i18next';

const CustomDropdown = ({label, data, value, onChange, placeholder}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Dropdown
        style={styles.dropdown}
        containerStyle={styles.dropdownContainer}
        itemTextStyle={styles.itemTextStyle}
        data={data}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        dropdownPosition="bottom"
        renderRightIcon={() => (
          <Icon name="keyboard-arrow-down" size={34} color="white" />
        )}
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
    height: 47,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: '#9C9B9F',
  },
  dropdownContainer: {
    backgroundColor: '#9C9B9F',
    color: 'blue',
  },
  itemTextStyle: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Roboto-Medium',
  },
  placeholderStyle: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Roboto-Medium',
  },
  selectedTextStyle: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Roboto-Medium',
  },
});

export default CustomDropdown;
