import { View, Text,Image,StyleSheet, ImageBackground,TouchableOpacity} from 'react-native'
import React from 'react'
import img from "../../../assets/Images/bg2.jpg";
import img1 from "../../../assets/Images/wLogo.png";
import img2 from "../../../assets/Images/tc1.jpg";
import img3 from "../../../assets/Images/tc2.jpg";
import img4 from "../../../assets/Images/Addreport.png";
import img5 from "../../../assets/Images/Viewreport.png";
import img6 from "../../../assets/Images/Setting.png";
import profile from "../../../assets/Images/profileimage.png";
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = ({navigation}) => {
  return (
    <ImageBackground source={img} style={styles.backgroundImage}>
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <Icon name='menu' size={56} color="white" />
      <View style={{backgroundColor:"black", borderRadius:100,padding:5}}>
      <Image source={profile}   />
      </View>
    </View>
    <View style={styles.main}>
    <View>
      <Image source={img1} style={{width:180}}/>
    </View>
    <View style={styles.reportSection}>
    <TouchableOpacity onPress={()=>navigation.navigate('report')}>
    <View style={styles.reportBox}>
    <Image source={img4}/>
    <Text style={{fontFamily:"Roboto-Bold",fontSize:25,color:"black",marginTop:20}}>Add Report</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('viewReport')}>
    <View style={styles.reportBox}>
    <Image source={img5}/>
    <Text style={{fontFamily:"Roboto-Bold",fontSize:25,color:"black",marginTop:20}}>View Report</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('report')}>
    <View style={styles.reportBox}>
    <Image source={img6}/>
    <Text style={{fontFamily:"Roboto-Bold",fontSize:25,color:"black",marginTop:20}}>Report Setting</Text>
    </View>
    </TouchableOpacity>

    </View>

    </View>
    
    </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  backgroundImage: {
    flex: 1, 
  },
  header:{
    marginTop:20,
    paddingHorizontal:20,
    flexDirection:"row",
    justifyContent:"space-between",
   
  },
  main:{
    alignItems:"center",
    flex:1
    
  },
  reportSection:{
    flex:1,
    flexDirection:"row",
    gap:20,
    flexWrap:"wrap",
    alignItems:"center",
    justifyContent:"center",
    marginTop:40

  },
reportBox:{
  width:200,
  height:200,
  backgroundColor:"white",
  borderRadius:30,
  alignItems:"center",
  justifyContent:"center"

  }


})
export default Home