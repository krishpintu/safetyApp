import React from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";

function StartPage({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image
          style={styles.image}
          source={require("../../assets/images/ptw.png")}
        />
        <Text style={styles.welcomeText}>Welcome to Online PTW</Text>
        <Text style={styles.paragraphText}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </Text>

        <TouchableOpacity
          style={styles.registerBtn}
          onPress={() => navigation.navigate("register")}
        >
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfbfb",
    padding: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 250,
    width: 300,
    alignSelf: "center",
  },
  welcomeText: {
    fontSize: 18,
    marginTop: 15,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
  },
  paragraphText: {
    fontSize: 15,
    marginTop: 10,
    textAlign: "center",
    color: "#333",
  },
  registerBtn: {
    marginTop: 35,
    width: 300,
    padding: 20,
    backgroundColor: "gray",
    alignSelf: "center",
    borderRadius: 20,
  },
  loginBtn: {
    marginTop: 20,
    width: 300,
    padding: 20,
    backgroundColor: "#263c51",
    alignSelf: "center",
    borderRadius: 20,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
});
export default StartPage;
