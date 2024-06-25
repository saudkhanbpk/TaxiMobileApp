import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const languages = [
  { label: 'English', value: 'en' },
  { label: 'Swedish', value: 'sv' },
  { label: 'العربية', value: 'ar' },
];

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [isFocus, setIsFocus] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={languages}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? t('selectLanguage') : '...'}
        searchPlaceholder={t('search')}
        value={currentLanguage}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          changeLanguage(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? 'blue' : 'black'}
            name="Safety"
            size={20}
          />
        )}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 24,
  },
  dropdown: {
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 6,
    width: wp(50),
    backgroundColor: 'black', 
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 20,
    color: 'white', 
    fontFamily:"Roboto-Bold"
  },
  selectedTextStyle: {
    fontSize: 18,
    color: 'white', 
    fontFamily:"Roboto-Bold"
  },
  iconStyle: {
    width: 24,
    height: 24,
    color:"#fff"
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: 'white', 
  },
});

export default LanguageSelector;
