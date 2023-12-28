import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
interface WelcomeScreenProps {
  navigation: NavigationProp<ParamListBase>
}

const WelcomeScreen = ({navigation}: WelcomeScreenProps) => {
  const [loaded] = useFonts({
    "Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <View style={{ flex: 1 }}>
        <Text style={styles.header}>Lets save food</Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.foodBag}
            source={require("../../assets/login/foodBag.png")}
          />
          <Image
            style={styles.waveImage}
            source={require("../../assets/login/wave.png")}
          />
        <View style={styles.signInWrapper}>
          <TouchableOpacity onPress={()=> navigation.navigate('signUpScreen')} style={styles.signInButton}>
            <Image source={require("../../assets/login/googleSignIn.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signInButton}>
            <Image source={require("../../assets/login/facebook.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signInButton}>
            <Image source={require("../../assets/login/apple.png")}></Image>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    fontFamily: "Inter-Regular",
    fontSize: 42,
    textAlign: "center",
    color: "#003554",
    fontWeight: "bold",
  },
  imageContainer: {
    flex: 2,
    justifyContent: "space-between", // distributes children evenly
    alignItems: "center", // aligns children to the center horizontally
  },
  waveImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
  },
  foodBag: {
    width: 300, // adjust as needed
    height: 200, // adjust as needed
    resizeMode: "contain",
  },
  signInWrapper: {
    bottom: "5%",
  },
  signInButton: {
    marginTop: 1,
  }
});
