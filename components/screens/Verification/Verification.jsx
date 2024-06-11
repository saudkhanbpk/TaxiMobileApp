import { View, Text,SafeAreaView,Image,ImageBackground ,StyleSheet,TouchableOpacity} from 'react-native'
import {React,useState} from 'react'
import img1 from "../../../assets/Images/bg-image.jpg"
import img2 from "../../../assets/Images/backbtn.png"
import OTPinputs from '../../OTPinputs/OTPinputs';
import Button from '../../Button/Button';



const Verification = ({navigation}) => {
    
  
  return (
    <ImageBackground source={img1} style={styles.backgroundImage}>
     <SafeAreaView style={styles.container}>
     <View style={styles.header}>
    <TouchableOpacity style={{backgroundColor:"white", borderRadius:30,width:24, height:24,padding:15,alignItems:"center",justifyContent:"center",marginTop:10}} onPress={() => navigation.goBack()}>
    <Image source={img2}  />
    </TouchableOpacity>

    <View style={styles.forgottxt}>
        <Text style={{fontFamily:"Roboto-Bold",fontSize:35,color:"white",textAlign:"center"}}> Verification </Text>
    </View>
    </View>

    <View style={styles.main}>
    <View>
    <OTPinputs />
    </View>
    <View style={styles.resend}>
        <Text style={{fontFamily:"Roboto-Bold",color:"white",fontSize:16,}}>If You Didn't Recieve The Code?<Text style={{color:"blue"}} onPress={()=>navigation.navigate("forgotpass")}>Resend</Text></Text>

    </View>

    <View style={styles.btncon}>
    <Button onPress={()=>navigation.navigate('newpassword')}
        title="Send"
    />
    </View>

    <View>
    <View style={styles.footer}>
    
    <Text style={{color:"white",fontFamily:"Roboto-Bold",fontSize:16}}>Are You New?<Text style={{color:"blue"}} onPress={()=>navigation.navigate("signup")}>Create An Account</Text></Text>
    
    <View>
        <Text style={{color:"blue",fontFamily:"Roboto-Bold"}} onPress={()=>navigation.navigate("login")}>Back To Sign in</Text>
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