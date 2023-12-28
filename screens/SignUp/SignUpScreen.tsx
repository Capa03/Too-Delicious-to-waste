import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Input } from "react-native-elements";

interface SignUpScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider style={{ flex: 1, paddingTop: insets.top }}>
      <StatusBar style="light" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ width: "10%" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../../assets/login/backButton.png")}
            ></Image>
          </TouchableOpacity>
        </View>
        <Text style={styles.header}>Sign Up</Text>
        <View style={{ width: "10%" }}>
          <Image
            source={require("../../assets/signup/cloud.png")}
            style={{
              alignSelf: "flex-end",
              marginRight: 20,
              width: 80,
              height: 80,
            }}
          ></Image>
        </View>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email:</Text>
        <Input
          inputContainerStyle={{ borderBottomWidth: 0 }}
          style={styles.inputBox}
          placeholder="Email"
          autoFocus
        ></Input>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Password:</Text>
        <Input
          inputContainerStyle={{ borderBottomWidth: 0 }}
          style={styles.inputBox}
          placeholder="Password"
          autoFocus
        ></Input>
      </View>
      <View>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#006494",
            padding: 10,
            borderRadius: 16,
            margin: 20,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity>
            <Image source={require("../../assets/signup/Facebook.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../../assets/signup/Google.png")}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Image style={{marginTop:'-20%', width: '100%'}} resizeMode="contain" source={require("../../assets/signup/wave.png")}></Image>
      </View>
    </SafeAreaProvider>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    fontFamily: "Inter-Regular",
    fontSize: 32,
    textAlign: "center",
    color: "#003554",
    fontWeight: "bold",
  },
  formContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  label: {
    fontFamily: "Inter-Regular",
    fontSize: 18,
    color: "#003554",
    fontWeight: "bold",
    marginLeft: 10,
  },
  inputBox: {
    borderRadius: 16,
    backgroundColor: "#E5E5E5",
    padding: 10,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
  }
});
