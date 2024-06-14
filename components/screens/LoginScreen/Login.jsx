import React, { useState } from 'react';
import { StyleSheet, Text, View,ImageBackground,KeyboardAvoidingView ,Platform,TouchableOpacity,Alert} from 'react-native';
import LanguageSelector from '../../LanguageSelector/LanguageSelector';
import { SafeAreaView } from 'react-native-safe-area-context';
import img1 from "../../../assets/Images/bg-image.jpg";
import Button from '../../Button/Button';
import { useTranslation } from 'react-i18next';
import CustomTextInput from '../../CustomTextInput/CustomTextInput';
import {login} from '../../../api/apiServices';
import {setAsyncStorageItem} from "../../../storage/asyncStorage";

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const { t } = useTranslation();

  const handleLogin = async () => {
    try {
      const userData = { email, password };
      const response = await login(userData);
    
      console.log(response);
      if (response && response.token) {
        
        await setAsyncStorageItem('token', response.token);
       
      navigation.navigate('tabNavigation')
      }
    } catch (error) {
      console.error(error);
     console.log("error")
    }
  };
  return (
    <ImageBackground source={img1} style={styles.backgroundImage}>
    <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={Platform.OS === "ios" ? 100:0} style={styles.keycontainer}>
    <View style={styles.dropdown}>
      <LanguageSelector /> 
    </View>
    <View style={styles.createAcc}>
    <View >
      <Text style={{ textAlign: "center", fontFamily: "Roboto-Bold", fontSize: 35, fontWeight: "700", color: "white" }}>
        {t('letsgetsStarted')}
      </Text>
      </View>
      <View style={{marginTop:"20%"}}>
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
        <TouchableOpacity onPress={()=>{navigation.navigate('home')}} style={{paddingHorizontal:20}}>
        <Text style={{fontFamily:"Roboto-Bold",color:"white",fontSize:16,textAlign:"right"}}>{t('forgotPass')}</Text></TouchableOpacity>
        </View>

        <View style={styles.footer}>
    <Button
     onPress={handleLogin}
     title={t('signIn')}/>
     <View style={{marginTop:20}}>
     <Text style={{ fontFamily: "Roboto-Bold", color: "#fff", fontSize: 16 }}>
                {t('alreadyHaveAccount')} <Text onPress={()=>{navigation.navigate('signup')}} style={{ color: "blue" }}>{t('createAccount')}</Text>
              </Text>
     </View>
    </View>
    </View>
   
    </KeyboardAvoidingView>
    </SafeAreaView>
    
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop:20,
    paddingHorizontal:20
  },
  keycontainer: {
    flex: 1, 
 
  },
  backgroundImage: {
    flex: 1, 
  },
  dropdown:{
   flex:0.7,
    alignItems:"flex-end",

  },
  createAcc:{
    alignItems:"center",
marginTop:40,
flex:4,

  },
  footer:{
    alignItems:"center",
    justifyContent:"center",
   marginTop:40
    
    
   
  }
});

export default Login;
