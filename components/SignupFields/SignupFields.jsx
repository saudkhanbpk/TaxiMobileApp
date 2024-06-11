import { View, Text,TextInput } from 'react-native'
import {React,useState} from 'react'
import CustomTextInput from '../CustomTextInput/CustomTextInput';
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import { useTranslation } from 'react-i18next';

const SignupFields = () => {
  const { t } = useTranslation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedValue, setSelectedValue] = useState(null);

    const items = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Opt', value: 'option3' },
      ];
      const handleChange = (item) => {
        setSelectedValue(item.value);
      };

  return (
    <View>
      <Text style={{ textAlign: "center", fontFamily: "Roboto-Bold", fontSize: 35, fontWeight: "700", color: "white" }}>
        {t('createAccount')}
      </Text>
      <View style={{marginTop:30}}>
      <CustomTextInput
          label={t('fullName')}
          value={name}
          onChangeText={setName}
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
          value={selectedValue}
          onChange={handleChange}
        />
        <CustomTextInput
          label={t('taxiNumber')}
          value={password}
          onChangeText={setPassword}
          placeholder={t('enterTaxiNumber')}
        />
      

      </View>
    </View>
  )
}

export default SignupFields