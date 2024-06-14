import React, { useEffect, useRef } from 'react';
import { SafeAreaView, View, StyleSheet, Image, ImageBackground, Animated } from 'react-native';
import logo from "../../../assets/Images/wLogo.png";
import img1 from "../../../assets/Images/bg-image.jpg";

const Splash = ({ navigation }) => {
  const scaleValue = useRef(new Animated.Value(0)).current; 

  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1, 
      duration: 3000, 
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      navigation.navigate("signup");
    }, 5000);
  }, [navigation, scaleValue]);

  return (
    <ImageBackground source={img1} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <Animated.View style={[styles.logocont, { transform: [{ scale: scaleValue }] }]}>
          <Image source={logo} style={styles.Logoimage} />
        </Animated.View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
  },
  logocont: {
    height: 350,
    width: 350,
    backgroundColor: "#0D1525",
    alignItems: "center",
    borderRadius: 500,
    justifyContent: "center",
  },
  Logoimage: {
    width: 170,
    height: 195,
  },
});

export default Splash;
