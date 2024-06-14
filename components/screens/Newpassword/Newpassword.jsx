import { View, Text, ImageBackground,StyleSheet,SafeAreaView,KeyboardAvoidingView,TouchableOpacity,Image } from 'react-native'
import {React,useState} from 'react'
import CheckBox from 'react-native-check-box'
import CustomTextInput from '../../CustomTextInput/CustomTextInput';
import img1 from "../../../assets/Images/bg-image.jpg";
import img2 from "../../../assets/Images/backbtn.png"
import Icon from "react-native-vector-icons/FontAwesome"
import Button from '../../Button/Button';
import { useTranslation } from 'react-i18next';

const Newpassword = ({navigation}) => {
    const [password, setPassword] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const { t } = useTranslation();
 
   
  return (
        <ImageBackground source={img1} style={styles.backgroundImage}>
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
    <TouchableOpacity style={{backgroundColor:"white", borderRadius:30,width:24, height:24,padding:15,alignItems:"center",justifyContent:"center",marginTop:10}} onPress={() => navigation.goBack()}>
    <Image source={img2}  />
    </TouchableOpacity>

    <View style={styles.forgottxt}>
        <Text style={{fontFamily:"Roboto-Bold",fontSize:35,color:"white",textAlign:"center"}}> {t('newpassword')}</Text>
    </View>
    </View>

    <View style={styles.main}>
    <CustomTextInput
          label={t('newpassword')}
          value={password}
          onChangeText={setPassword}
          placeholder={t('enternewPass')}
          secureTextEntry={true}
        />
        <CustomTextInput
          label={t('confirmPass')}
          value={newpassword}
          onChangeText={setNewPassword}
          placeholder={t('enterconfirmPass')}
          secureTextEntry={true}
        />
      

              <View style={styles.btncon}>
                <Button 
                    title={t('send')}
                    onPress={()=>navigation.navigate('login')}
                />
              </View>

              <View style={styles.footer}>
    <View>
    <Text style={{color:"white",fontFamily:"Roboto-Bold",fontSize:16}}>{t('areNew')}<Text style={{color:"blue",}} onPress={()=>navigation.navigate("signup")}>{t('createAccount')}</Text></Text>
    </View>
    <View>
        <Text style={{color:"blue",fontFamily:"Roboto-Bold"}} onPress={()=>navigation.navigate("login")}>{t('backtoSignin')}</Text>
    </View>

    </View> 
          
    </View>

      
    </SafeAreaView>
    </ImageBackground>
  )
}

const styles =StyleSheet.create({
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
  header:{
    flex:1, 
  },
  forgottxt:{
    alignItems:"center",
    marginTop:"15%"
  },
  main:{
    flex:2,
    paddingHorizontal:10
    
  },

 
  btncon:{
    alignItems:"center",
    marginTop:30
  },
  footer:{
    alignItems:"center",
    gap:10,
    marginTop:40
  }
})

export default Newpassword