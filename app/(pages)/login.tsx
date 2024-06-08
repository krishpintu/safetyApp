import { authenticateDomainLogin } from "@/features/authentication/services/auth.service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Dimensions,
  ToastAndroid,
  Platform,
  ActivityIndicator,
} from "react-native";


function Login({ navigation }: { navigation: any }) {
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmployeeId, setErrorEmployeeId] = useState(0);
  const [errorPassword, setErrorPassword] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (employeeId == "") {
      setErrorEmployeeId(1);
    } else if (password === "") {
      setErrorPassword(1);
    } else {
      setIsLoading(true);
      authenticateDomainLogin(employeeId, password)
        .then((res) => {
          setIsLoading(false);
          ToastAndroid.show("Login Successfull", ToastAndroid.SHORT);
          AsyncStorage.setItem("userInfo", JSON.stringify(res.data));
          setEmployeeId("");
          setPassword("");
          navigation.navigate("Root");
        })
        .catch((err) => {
          setIsLoading(false);
          ToastAndroid.show("Invalid credentials", ToastAndroid.SHORT);
        });
      // const apiUrl = process.env.EXPO_PUBLIC_API_URL;
      // const response = await fetch(apiUrl + "auth/login", {
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     domainId: employeeId,
      //     domainPassword: password,
      //   }),
      // });
      // const data = await response.json();
      // if (data && data.ID > 0) {
      // localStorage.clear();
      // localStorage.setItem("userInfo", JSON.stringify(data));
      // alert("Login successfull");
      // navigation.navigate("home");
      // } else {
      //   alert("Invalid credentials");
      // }
    }
  };
  useEffect(() => {
    setErrorEmployeeId(0);
    setErrorPassword(0);
  }, [employeeId, password]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: ScreenHeight, backgroundColor: "#1c52c7" }}>
        <View style={{ top: 100 }}>
          <Text style={styles.loginText}>Login</Text>
          <Text style={styles.loginBelowText}>Login To Start Your Session</Text>
        </View>
      </View>
      <View style={styles.rotateView}>
        <Text></Text>
      </View>
      <View style={styles.loginBox}>
        <View style={{ display: "flex", flexDirection: "column", rowGap: 15 }}>
          <Text style={styles.labelText}>Employee Id / Domain Id</Text>
          
          <TextInput
            style={[
              styles.textInput,
              errorEmployeeId === 1 && styles.textFoucs,
            ]}
            value={employeeId}
            onChangeText={(employeeId) => setEmployeeId(employeeId)}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: 15,
            marginTop: 15,
          }}
        >
          <Text style={styles.labelText}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={[styles.textInput, errorPassword === 1 && styles.textFoucs]}
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("register")}>
          <Text style={styles.registerBtn}>New User! Register Here</Text>
        </TouchableOpacity>
        <ActivityIndicator size="large" animating={isLoading} />
      </View>
    </SafeAreaView>
  );
}
let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    overflow: "hidden",
  },
  loginText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 30,
    textAlign: "center",
  },
  loginBelowText: {
    top: 10,
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
  loginBox: {
    position: "absolute",
    padding: 20,
    backgroundColor: "#fbfbfb",
    height: 350,
    width: 320,
    alignSelf: "center",
    top: "32%",
    borderRadius: 20,
    shadowColor: "#808080",
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  labelText: {
    color: "#1c52c7",
    fontSize: 16,
  },
  labelPasswordText: {
    color: "#1c52c7",
    fontSize: 16,
  },
  textInput: {
    borderRadius: 10,
    backgroundColor: "#eeeeee",
    height: 50,
    paddingLeft:20
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
  loginBtn: {
    marginTop: 20,
    backgroundColor: "#1c52c7",
    height: 50,
    width: 250,
    alignSelf: "center",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  registerBtn: {
    marginTop: 20,
    color: "#1c52c7",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  rotateView: {
    position: "absolute",
    backgroundColor: "white",
    height: 600,
    width: 900,
    left: -300,
    bottom: -300,
    transform: [{ rotate: "30deg" }],
  },
  textFoucs: {
    // borderRadius: 10,
    // backgroundColor: "#eeeeee",
    // height: 50,
    // padding: 20,
    // shadowColor: "red",
    // shadowOpacity: 0.8,
    // shadowRadius: 10
    borderColor: 'red',
    borderWidth: 1,
  },
});
export default Login;
