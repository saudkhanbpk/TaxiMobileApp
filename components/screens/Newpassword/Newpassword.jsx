import { View, Text, ImageBackground,StyleSheet,SafeAreaView,KeyboardAvoidingView,TouchableOpacity,Image } from 'react-native'
import {React,useState} from 'react'
import CheckBox from 'react-native-check-box'
import CustomTextInput from '../../CustomTextInput/CustomTextInput';
import img1 from "../../../assets/Images/bg-image.jpg";
import img2 from "../../../assets/Images/backbtn.png"
import Icon from "react-native-vector-icons/FontAwesome"
import Button from '../../Button/Button';

const Newpassword = ({navigation}) => {
    const [password, setPassword] = useState('');
    const [newpassword, setNewPassword] = useState('');
 
   
  return (
        <ImageBackground source={img1} style={styles.backgroundImage}>
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
    <TouchableOpacity style={{backgroundColor:"white", borderRadius:30,width:24, height:24,padding:15,alignItems:"center",justifyContent:"center",marginTop:10}} onPress={() => navigation.goBack()}>
    <Image source={img2}  />
    </TouchableOpacity>

    <View style={styles.forgottxt}>
        <Text style={{fontFamily:"Roboto-Bold",fontSize:35,color:"white",textAlign:"center"}}>New password</Text>
    </View>
    </View>

    <View style={styles.main}>
    <CustomTextInput
          label="New Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter New Password"
          secureTextEntry={true}
        />
        <CustomTextInput
          label="Confirm Password"
          value={newpassword}
          onChangeText={setNewPassword}
          placeholder="Enter Confirm Password"
          secureTextEntry={true}
        />
      

              <View style={styles.btncon}>
                <Button 
                    title="Send"
                    onPress={()=>navigation.navigate('verification')}
                />
              </View>

              <View style={styles.footer}>
    <View>
    <Text style={{color:"white",fontFamily:"Roboto-Bold",fontSize:16}}>Are You New?<Text style={{color:"blue",}} onPress={()=>navigation.navigate("signup")}>Create An Account</Text></Text>
    </View>
    <View>
        <Text style={{color:"blue",fontFamily:"Roboto-Bold"}} onPress={()=>navigation.navigate("login")}>Back To Sign in</Text>
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