import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LanguageSelector from '../../LanguageSelector/LanguageSelector';
import {SafeAreaView} from 'react-native-safe-area-context';
import img1 from '../../../assets/Images/bg-image.jpg';
import Button from '../../Button/Button';
import CustomTextInput from '../../CustomTextInput/CustomTextInput';
import CustomDropdown from '../../../components/CustomDropdown/CustomDropdown';
import {useTranslation} from 'react-i18next';
import {register} from '../../../api/apiServices';
import {setAsyncStorageItem} from '../../../storage/asyncStorage';

const Signup = ({navigation}) => {
  const {t} = useTranslation();
  const [fullName, setfullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectCompany, setSelectedCompany] = useState(null);
  const [taxiNumber, settaxiNumber] = useState('');

  const items = [
    {label: 'Taxi 97', value: 'Taxi 97'},
    {label: 'Taxi Kurir', value: 'Taxi Kurir'},
    {label: 'Taxi Soder', value: 'Taxi Soder'},
    {label: 'Taxi Grand Skane', value: 'Taxi Grand Skane'},
    {label: 'Taxi Lund 121212', value: 'Taxi Lund 121212'},
    {label: 'SveaTaxi Skane 13 80 00', value: 'SveaTaxi Skane 13 80 00'},
    {label: 'Taxi V', value: 'Taxi V'},
    {label: 'Taxi Taxi Malmo', value: 'Taxi Taxi Malmo'},
    {label: 'Taxi 23 23 23', value: 'Taxi 23 23 23'},
  ];

  const handleChange = item => {
    setSelectedCompany(item.value);
  };

  const handleSignup = async () => {
    try {
      const userData = {fullName, email, password, selectCompany, taxiNumber};
      const response = await register(userData);

      console.log(response);
      if (response && response.token) {
        await setAsyncStorageItem('token', response.token);
        navigation.navigate('login');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ImageBackground source={img1} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keycontainer}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.dropdown}>
              <LanguageSelector />
            </View>
            <View style={styles.createAcc}>
              <Text style={styles.title}>{t('createAccount')}</Text>
              <View style={{marginTop: 20}}>
                <CustomTextInput
                  label={t('fullName')}
                  value={fullName}
                  onChangeText={setfullName}
                  placeholder={t('enterFullName')}
                />
                <CustomTextInput
                  label={t('email')}
                  value={email}
                  onChangeText={setEmail}
                  placeholder={t('enterEmail')}
                />
                <CustomTextInput
                  label={t('password')}
                  value={password}
                  onChangeText={setPassword}
                  placeholder={t('enterPassword')}
                  secureTextEntry={true}
                />
                <CustomDropdown
                  label={t('selectTaxiCompany')}
                  data={items}
                  value={selectCompany}
                  onChange={handleChange}
                />
                <CustomTextInput
                  label={t('taxiNumber')}
                  value={taxiNumber}
                  onChangeText={settaxiNumber}
                  placeholder={t('enterTaxiNumber')}
                />
              </View>

              <View style={styles.footer}>
                <Button onPress={handleSignup} title={t('SIGN UP')} />
                <View style={{marginTop: 20}}>
                  <Text style={styles.loginText}>
                    {t('alreadyHaveAccount')}{' '}
                    <Text
                      onPress={() => {
                        navigation.navigate('login');
                      }}
                      style={styles.loginLink}>
                      {t('loginHere')}
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keycontainer: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  dropdown: {
    flex: 0.7,
    marginTop: 10,
    alignItems: 'flex-end',
  },
  createAcc: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 4,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    fontSize: 35,
    fontWeight: '700',
    color: 'white',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  loginText: {
    fontFamily: 'Roboto-Bold',
    color: '#fff',
    fontSize: 16,
  },
  loginLink: {
    color: '#007AFF',
  },
});

export default Signup;
