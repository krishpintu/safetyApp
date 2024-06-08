import {
  getSapUser,
  getUserEmpIdValidate,
  registerDomainUser,
} from "@/features/authentication/services/auth.service";
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
} from "react-native";

function Register({ navigation }: { navigation: any }) {
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmployeeId, setErrorEmployeeId] = useState(0);
  const [errorName, setErrorName] = useState(0);
  const [errorEmail, setErrorEmail] = useState(0);
  const [errorMobile, setErrorMobile] = useState(0);
  const [errorPassword, setErrorPassword] = useState(0);

  const [registerFormData, setRegisterFormData] = useState({
    NAME: "",
    EMAIL_ID: "",
    EMPLOYEE_ID: "",
    MOBILE: "",
    PASSWORD: "",
  });

  const handleRegister = async () => {
    if (registerFormData.EMPLOYEE_ID == "") {
      setErrorEmployeeId(1);
    } else if (registerFormData.NAME === "") {
      setErrorName(1);
    } else if (registerFormData.EMAIL_ID === "") {
      setErrorEmail(1);
    } else if (registerFormData.MOBILE === "") {
      setErrorMobile(1);
    } else if (registerFormData.PASSWORD === "") {
      setErrorPassword(1);
    } else {
      registerDomainUser(registerFormData)
        .then((regResponse) => {
          alert("Registration successfull.Please login");
          navigation.navigate("login");
          setRegisterFormData({
            NAME: "",
            EMAIL_ID: "",
            EMPLOYEE_ID: "",
            MOBILE: "",
            PASSWORD: "",
          });
        })
        .catch((err) => {
          if (err.response && err.response.status) {
            if (err.response.data && err.response.data.errorMessage) {
              alert(err.response.data.errorMessage);
            } else {
              alert("Error Fetching Data from API");
            }
          } else {
            alert("Unknown Error, Please contact Admin");
          }
        });
    }
    console.log(registerFormData);
  };
  useEffect(() => {
    setErrorEmployeeId(0);
    setErrorPassword(0);
  }, [employeeId, password]);

  const handleOnchange = (text: string, input: string) => {
    setRegisterFormData((prevState) => ({ ...prevState, [input]: text }));
  };
  const getUsers = (value: string) => {
    handleOnchange(value, "EMPLOYEE_ID");
    if (value.length == 6) {
      getUserEmpIdValidate(value).then((res) => {
        if (res.data.length > 0) {
          alert("Employee Id already registered. Please login.");
        } else {
          getSapUser(value.toString())
            .then((sapresponse) => {
              if (sapresponse.data) {
                // loader.hide();

                if (
                  sapresponse.data.NAME !== "" &&
                  sapresponse.data.NAME != null
                ) {
                  handleOnchange(sapresponse.data.NAME, "NAME");
                } else {
                  handleOnchange("", "NAME");
                }

                if (
                  sapresponse.data.EMAIL !== "" &&
                  sapresponse.data.EMAIL != null
                ) {
                  handleOnchange(sapresponse.data.EMAIL, "EMAIL_ID");
                } else {
                  handleOnchange("", "EMAIL_ID");
                }
                if (
                  sapresponse.data.MOBILE !== "" &&
                  sapresponse.data.MOBILE != null
                ) {
                  handleOnchange(sapresponse.data.MOBILE, "MOBILE");
                } else {
                  handleOnchange("", "MOBILE");
                }
              }
            })
            .catch((err) => {
              alert("Not a valid users");
              handleOnchange("", "NAME");
              handleOnchange("", "EMAIL_ID");
              handleOnchange("", "MOBILE");
            });
        }
      });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: ScreenHeight, backgroundColor: "#1c52c7" }}>
        <View style={{ top: 50 }}>
          <Text style={styles.loginText}>Register</Text>
          <Text style={styles.loginBelowText}>
            Register To Start Your Session
          </Text>
        </View>
      </View>
      <View style={styles.rotateView}>
        <Text></Text>
      </View>
      <View style={styles.loginBox}>
        <View style={{ display: "flex", flexDirection: "column", rowGap: 15 }}>
          <Text style={styles.labelText}>Employee Id </Text>
          <TextInput
            style={[
              styles.textInput,
              errorEmployeeId === 1 && styles.textFoucs,
            ]}
            value={registerFormData.EMPLOYEE_ID}
            onChangeText={(text) => getUsers(text)}
          />
        </View>
        <View style={{ display: "flex", flexDirection: "column", rowGap: 15 }}>
          <Text style={styles.labelText}>Name </Text>
          <TextInput
            style={[styles.textInput, errorName === 1 && styles.textFoucs]}
            value={registerFormData.NAME}
            onChangeText={(text) => handleOnchange(text, "NAME")}
          />
        </View>
        <View style={{ display: "flex", flexDirection: "column", rowGap: 15 }}>
          <Text style={styles.labelText}>Email </Text>
          <TextInput
            style={[styles.textInput, errorEmail === 1 && styles.textFoucs]}
            value={registerFormData.EMAIL_ID}
            onChangeText={(text) => handleOnchange(text, "EMAIL_ID")}
          />
        </View>
        <View style={{ display: "flex", flexDirection: "column", rowGap: 15 }}>
          <Text style={styles.labelText}>Mobile </Text>
          <TextInput
            style={[styles.textInput, errorMobile === 1 && styles.textFoucs]}
            value={registerFormData.MOBILE}
            onChangeText={(text) => handleOnchange(text, "MOBILE")}
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
            value={registerFormData.PASSWORD}
            onChangeText={(text) => handleOnchange(text, "PASSWORD")}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text style={styles.registerBtn}>Back To Login</Text>
        </TouchableOpacity>
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
    backgroundColor: "white",
    height: 550,
    width: 320,
    alignSelf: "center",
    top: "20%",
    borderRadius: 20,
    shadowColor: "gray",
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
    padding: 20,
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
    borderRadius: 10,
    backgroundColor: "#eeeeee",
    height: 50,
    padding: 20,
    shadowColor: "red",
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
});
export default Register;
