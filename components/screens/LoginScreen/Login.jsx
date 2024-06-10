import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CustomTextInput from '../../CustomTextInput/CustomTextInput';
import Button from '../../Button/Button';
import img1 from "../../../assets/Images/bg-image.jpg";


const Login = ({navigation}) => {
    return (
        <ImageBackground style={styles.bgimg}
            source={img1}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title} >Let’s Get Started</Text> 
              <View>
              <Text style={styles.txt2}>Email</Text>
             <CustomTextInput />
              </View>
              <View>
              <Text style={styles.txt2}>Password</Text>
              <CustomTextInput
                placeholder={"Enter Your Password "}
              
                />
              </View>
          <TouchableOpacity
          onPress={()=>{
            navigation.navigate('ForgetScreen')
          }}>
          <Text style={styles.forget}>Forget Password ?</Text>
          </TouchableOpacity>

         <Button />
            <View style={styles.footer}>
                <Text style={styles.txt3}>Are You New ? </Text>
                <TouchableOpacity>
                    <Text style={styles.txt4}>Create An Account </Text>
                </TouchableOpacity>
            </View>
          
            </ScrollView>
        </ImageBackground>
    )
}

export default Login

const styles = StyleSheet.create({
    bgimg: {
        flex: 1,
       
    },
    container:{ 
       // flexGrow: 1 ,
        marginVertical:hp(15)
        },
    title: { 
        fontFamily: 'Roboto',
         fontSize: hp(4), 
         fontWeight: '700',
          color: '#FFFFFF',
           alignSelf: "center" 
        },
        forget:{ 
            fontFamily: 'Roboto',
             fontSize: hp(2), 
             fontWeight: '700',
              color: '#FFFFFF',
               alignSelf: 'flex-end',
               marginHorizontal:wp(9),
               marginTop:hp(2)
            },
            txt2:{
                fontFamily: 'Roboto',
            fontSize: hp(2), 
            fontWeight: '700',
             color: '#FFFFFF',
              alignSelf: "center" ,
              marginTop:hp(5),
              marginHorizontal:wp(10),
              alignSelf:'flex-start'
           },
           footer:{
            flexDirection:'row',
            justifyContent:"center",
            alignItems:"center",
            marginTop:hp(10),
            marginBottom:hp(30)
           },
           txt3:{
            fontSize:16,
            fontWeight:'700',
            color:'#FFFFFF'
           },
           txt4:{
            fontSize:16,
            fontWeight:'700',
            color:'#007AFF'
           }
})