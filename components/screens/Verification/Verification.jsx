import { View, Text,SafeAreaView,Image,ImageBackground ,StyleSheet,TouchableOpacity} from 'react-native'
import {React,useState} from 'react'
import img1 from "../../../assets/Images/bg-image.jpg"
import img2 from "../../../assets/Images/backbtn.png"
import OTPinputs from '../../OTPinputs/OTPinputs';
import Button from '../../Button/Button';
import {confirmPasswordResetOTP} from '../../../api/apiServices';


import { useTranslation } from 'react-i18next';


const Verification = ({navigation}) => {
  const { t } = useTranslation();
  
  const [email,setEmail]=useState('')
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleOTPChange = (otpValue) => {
    setOtp(otpValue);
  };

  // const handleSubmit = async () => {
  //   setLoading(true);
  //   setError(null);

  //   try {
  //     const response = await confirmPasswordResetOTP(email, otp);
  //     setLoading(false);
  //     if (response.success) {
  //       Alert.alert(t('Success'), t('Password reset successful'), [{ text: t('OK'), onPress: () => navigation.navigate('newpassword') }]);
  //     } else {
  //       setError(response.message || t('An error occurred'));
  //     }
  //   } catch (err) {
  //     setLoading(false);
  //     setError(err.message || t('An error occurred'));
  //   }
  // };
  const handleSubmit = async () => {
    try {
        const response = await confirmPasswordResetOTP(email,otp);
        console.log(response);
        if (response && response.success) {
            if (response.token) {
                await setAsyncStorageItem('token', response.token);
            }
            Alert.alert("Success", response.message, [  
                { text: 'OK', onPress: () => navigation.navigate('newpassword') }
            ]);
        } else {
            Alert.alert("Error", response.message);
        }
    } catch (error) {
        console.error(error);
        Alert.alert("Error", "An error occurred while sending the password reset email.");
    }
};

  return (
    <ImageBackground source={img1} style={styles.backgroundImage}>
     <SafeAreaView style={styles.container}>
     <View style={styles.header}>
    <TouchableOpacity style={{backgroundColor:"white", borderRadius:30,width:24, height:24,padding:15,alignItems:"center",justifyContent:"center",marginTop:10}} onPress={() => navigation.goBack()}>
    <Image source={img2}  />
    </TouchableOpacity>

    <View style={styles.forgottxt}>
        <Text style={{fontFamily:"Roboto-Bold",fontSize:35,color:"white",textAlign:"center"}}> {t('verification')} </Text>
    </View>
    </View>

    <View style={styles.main}>
    <View>
    <OTPinputs  value={otp} setValue={setOtp}/>
    </View>
    <View style={styles.resend}>
        <Text style={{fontFamily:"Roboto-Bold",color:"white",fontSize:16,}}> {t('ifyounotRecieve')}<Text style={{color:"blue"}} onPress={()=>navigation.navigate("forgotpass")}> {t('resend')}</Text></Text>

    </View>

    <View style={styles.btncon}>
    <Button onPress={handleSubmit}
        title="Send"
    />
    </View>

    <View>
    <View style={styles.footer}>
    
    <Text style={{color:"white",fontFamily:"Roboto-Bold",fontSize:16}}> {t('areNew')}<Text style={{color:"blue"}} onPress={()=>navigation.navigate("signup")}> {t('createAccount')}</Text></Text>
    
    <View>
        <Text style={{color:"blue",fontFamily:"Roboto-Bold"}} onPress={()=>navigation.navigate("login")}> {t('backtoSignin')}</Text>
    </View>
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
      backgroundImage: {
        flex: 1, 
      },
      header:{
        flex:1       
      },
      forgottxt:{
        alignItems:"center",
        marginTop:"15%"
      },
      main:{
        flex:2,
     
      },
      resend:{
        alignItems:"center",
        marginTop:30
      },
      footer:{
        alignItems:"center",
        marginTop:40
      },
      btncon:{
        marginTop:30,
        alignItems:"center"
      }
})
export default Verification