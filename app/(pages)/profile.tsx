import { authenticateDomainLogin, updateProfile } from "@/features/authentication/services/auth.service";
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
  Image,
  ScrollView,
  ActivityIndicator
} from "react-native";


function Profile({ navigation }: { navigation: any }) {
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmployeeId, setErrorEmployeeId] = useState(0);
  const [errorName, setErrorName] = useState(0);
  const [errorEmail, setErrorEmail] = useState(0);
  const [errorMobile, setErrorMobile] = useState(0);
  const [errorPassword, setErrorPassword] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const [registerFormData, setRegisterFormData] = useState({
    NAME: "",
    EMAIL_ID: "",
    EMPLOYEE_ID: "",
    MOBILE: "",
    PASSWORD: "",
  });
  useEffect(() => {
    const fetchUserDetails = async () => {
     
        const userData = await AsyncStorage.getItem("userInfo");
        const parsedData = userData && JSON.parse(userData);
        // console.log(parsedData)
        setRegisterFormData({"EMPLOYEE_ID":parsedData.TICKET_NO,"NAME":parsedData.NAME,"EMAIL_ID":parsedData.EMAIL,"MOBILE":parsedData.MOBILE,"PASSWORD":""})
    };

    fetchUserDetails();
  }, []);


  

  const handleUpdate = async () => {
     if (password === "") {
      setErrorPassword(1);
    } else {
      setIsLoading(true);
      updateProfile(+registerFormData.EMPLOYEE_ID, password)
        .then((res) => {
          setIsLoading(false);
          ToastAndroid.show("Profile Update Successfull", ToastAndroid.SHORT);
          navigation.navigate("Home");
        })
        .catch((err) => {
          setIsLoading(false);
          ToastAndroid.show("Error to update profile", ToastAndroid.SHORT);
        });
      
    }
  };
  const handleLogout = () =>{
    AsyncStorage.clear();
    navigation.navigate("login")
  }
  useEffect(() => {
    setErrorEmployeeId(0);
    setErrorPassword(0);
  }, [employeeId, password]);
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView >
        <View style={styles.profileBox}>
        <Image
            source={require('../../assets/images/user-icon.png')}
            style={styles.profileImg}
        />
        <View style={{ display: "flex", flexDirection: "column", rowGap: 15, }}>
            <Text style={styles.labelText}>Employee Id</Text>
            
            <TextInput
              style={[
                styles.textInput,
                errorEmployeeId === 1 && styles.textFoucs,
              ]}
              value={registerFormData.EMPLOYEE_ID}
            
              
            />
          </View>
          <View style={{ display: "flex", flexDirection: "column", rowGap: 15, }}>
            <Text style={styles.labelText}>Name</Text>
            
            <TextInput
              style={[
                styles.textInput,
                errorEmployeeId === 1 && styles.textFoucs,
              ]}
              value={registerFormData.NAME}
            
            />
          </View>
          <View style={{ display: "flex", flexDirection: "column", rowGap: 15, }}>
            <Text style={styles.labelText}>Email</Text>
            
            <TextInput
              style={[
                styles.textInput,
                errorEmployeeId === 1 && styles.textFoucs,
              ]}
              value={registerFormData.EMAIL_ID}
            
            />
          </View>
          <View style={{ display: "flex", flexDirection: "column", rowGap: 15, }}>
            <Text style={styles.labelText}>Mobile</Text>
            
            <TextInput
              style={[
                styles.textInput,
                errorEmployeeId === 1 && styles.textFoucs,
              ]}
              value={registerFormData.MOBILE}
            
            />
          </View>
          <View style={{ display: "flex", flexDirection: "column", rowGap: 15, }}>
            <Text style={styles.labelText}>Password</Text>
            
            <TextInput
              style={[
                styles.textInput,
                errorPassword === 1 && styles.textFoucs,
              ]}
              value={password}
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn} onPress={handleUpdate}>
            <Text style={styles.btnText}>Submit</Text>
           
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.registerBtn}>Logout</Text>
          </TouchableOpacity>
          <ActivityIndicator size="large" animating={isLoading} style={styles.loader} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  loader:{
    position:"relative",
    top:"-10%",
  },
  profileBox:{
    backgroundColor:"white",
    height:ScreenHeight,
    width:ScreenWidth,
    textAlign:"center",
    padding:20
  },
  profileImg:{
    width: 100,
    height: 100,
    borderRadius: 25,
    marginBottom: 10,
    alignSelf:"center",
  },
  container: {
    backgroundColor: "white",
    alignSelf:"center",
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
    borderColor: 'red',
    borderWidth: 1,
  },
});
export default Profile;
