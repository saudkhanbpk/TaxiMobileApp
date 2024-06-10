
import React, { useState } from 'react';
import { StyleSheet, Text, View,ImageBackground,KeyboardAvoidingView ,Platform} from 'react-native';
import LanguageSelector from '../../LanguageSelector/LanguageSelector';
import { SafeAreaView } from 'react-native-safe-area-context';
import img1 from "../../../assets/Images/bg-image.jpg";
import SignupFields from '../../SignupFields/SignupFields';
import Button from '../../Button/Button';
import { useTranslation } from 'react-i18next';

const Signup = ({navigation}) => {
  const { t } = useTranslation();
  return (
    <ImageBackground source={img1} style={styles.backgroundImage}>
    <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={Platform.OS === "ios" ? 100:0} style={styles.keycontainer}>
    <View style={styles.dropdown}>
      <LanguageSelector /> 
    </View>
    <View style={styles.createAcc}>
        <SignupFields />
    </View>
    <View style={styles.footer}>
    <Button
    onPress={()=>navigation.navigate("Login")}
     title="Signup"/>
     <View style={{marginTop:20}}>
     <Text style={{ fontFamily: "Roboto-Bold", color: "#fff", fontSize: 16 }}>
                {t('alreadyHaveAccount')} <Text onPress={navigation.navigate('Login')} style={{ color: "blue" }}>{t('loginHere')}</Text>
              </Text>
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
   flex:0.5,
    alignItems:"flex-end",
  

  },
  createAcc:{
    alignItems:"center"
  },
  footer:{
    alignItems:"center",
    justifyContent:"center",
    flex:1
    
    
   
  }
});

export default Signup;
