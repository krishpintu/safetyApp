import React, { useState } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import { ScreenWidth } from "react-native-elements/dist/helpers";
const screenWidth = Dimensions.get("window").width;


function LogObservation({ navigation }: { navigation: any }) {
    const [selectedTab, setSelectedTab] = useState('Tab1');

    
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.generalInf}>
            <Text style={styles.generalText}>General Information</Text>
            <Text>Jamshedpur (TML-CVBU)</Text>
            <Text>A L N Sarma (396393)</Text>
        </View>
      </ScrollView>
    </View>
  );
}
let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    generalInf:{
        backgroundColor:"#F5F5F9",
        height:100,
        width:ScreenWidth-40,
        padding:10,
        borderRadius:20
    },
    generalText:{
        fontWeight:"bold"
    },
  container: {
    backgroundColor: "#fbfbfb",
    justifyContent: "center",
    alignItems: "center",
    height:"100%",
  },
  scrollViewContent: {
    justifyContent: "center",
    alignItems: "center",
    padding:20
  },
 
});
export default LogObservation;
