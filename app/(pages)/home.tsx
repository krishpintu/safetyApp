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
import SidebarComponent from "./SidebarComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Home({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={{flexDirection:"row",gap:10}}>
        <TouchableOpacity style={styles.box1} onPress={() => navigation.navigate("SODashboard" as never)}>
        <Image
          source={require('../../assets/images/so.png')}
          style={styles.logo}
      />
          <Text style={styles.headingtext}>Safety Observation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box2}>
        <Image
          source={require('../../assets/images/ptw.jpg')}
          style={styles.logo}
      />
          <Text style={styles.headingtext}>Permit To Work</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  logo:{
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headingtext:{
    fontWeight:"bold",
    color:"white"
  },
  textDescription:{
    color:"white",
    left:10
  },
  box1:{
    height:100,
    width:170,
    backgroundColor:"#67b64d",
    borderRadius:20,
    padding:15
  },
  box2:{
    height:100,
    width:170,
    backgroundColor:"#4f7cc0",
    borderRadius:20,
    padding:15
  },
  container: {
    backgroundColor: "#fbfbfb",
    padding: 20,
    height:"100%"
  },
  scrollViewContent: {
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
export default Home;
