import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import img from '../../../assets/Images/bg2.jpg';
import img1 from '../../../assets/Images/wLogo.png';
import img4 from '../../../assets/Images/Addreport.png';
import img5 from '../../../assets/Images/Viewreport.png';
import img6 from '../../../assets/Images/Setting.png';
import profile from '../../../assets/Images/profileimage.png';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window');

const Home = ({navigation}) => {
  return (
    <ImageBackground source={img} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Icon name="menu" size={56} color="white" />
          <View style={styles.profileContainer}>
            <Image source={profile} />
          </View>
        </View>
        <View style={styles.main}>
          <View>
            <Image source={img1} style={styles.logo} />
          </View>
          <View style={styles.reportSection}>
            <TouchableOpacity onPress={() => navigation.navigate('report')}>
              <View style={styles.reportBox}>
                <Image source={img4} style={styles.smallImage} />
                <Text style={styles.reportTextSmall}>Add Report</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('report')}>
              <View style={styles.reportBox}>
                <Image source={img5} style={styles.smallImage} />
                <Text style={styles.reportTextSmall}>View Report</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('report')}>
              <View style={styles.reportBox}>
                <Image source={img6} style={styles.smallImage} />
                <Text style={styles.reportTextSmall}>Report Setting</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  header: {
    marginTop: 20, // Space at the top for the header
    paddingHorizontal: 20, // Horizontal padding for the header content
    flexDirection: 'row', // Align items in a row
    justifyContent: 'space-between', // Space out items evenly
  },
  profileContainer: {
    backgroundColor: 'black', // Background color for profile container
    borderRadius: 100, // Rounded corners for profile container
    padding: 5, // Padding inside the profile container
  },
  main: {
    alignItems: 'center', // Center the content horizontally
    flex: 1, // Take up all available space
  },
  logo: {
    width: width * 0.4, // 40% of the screen width for the logo
    resizeMode: 'contain', // Contain the image within the width
  },
  reportSection: {
    flexDirection: 'row', // Align report boxes in a row
    flexWrap: 'wrap', // Allow wrapping of items to the next line if needed
    alignItems: 'center', // Center the items vertically
    justifyContent: 'center', // Center the items horizontally
    marginTop: 40, // Space above the report section
    gap: 30, // Space between the report boxes
  },
  reportBox: {
    width: width * 0.8, // 80% of the screen width
    height: 80, // Height of each report box
    backgroundColor: 'white', // Background color of the report boxes
    borderRadius: 30, // Rounded corners for the report boxes
    alignItems: 'center', // Center the content horizontally
    justifyContent: 'center', // Center the content vertically
  },
  smallImage: {
    width: width * 0.12, // 20% of the screen width
    height: width * 0.12, // Maintain aspect ratio
    resizeMode: 'contain', // Contain the image within the width
  },
  reportTextSmall: {
    fontFamily: 'Roboto-Bold', // Font family for the text
    fontSize: 10, // Font size for small text
    color: 'black', // Text color
    // marginTop: 20, // Space above the text
  },
});
export default Home;
