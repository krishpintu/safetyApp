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
const screenWidth = Dimensions.get("window").width;


function SODashboard({ navigation }: { navigation: any }) {
    const [selectedTab, setSelectedTab] = useState('Tab1');

    const renderTabContent = () => {
      switch (selectedTab) {
        case 'Tab1':
            const chartConfig = {
                backgroundGradientFrom: "#1E2923",
                // backgroundGradientFromOpacity: 0,
                backgroundGradientTo: "#4f7cc0",
                backgroundGradientToOpacity: 0.5,
                color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                strokeWidth: 2,
                barPercentage: 0.5,
                useShadowColorFromDataset: false,
                yAxisSuffix: "", // Ensure yAxisSuffix is included
              };
              
              const data = {
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [
                  {
                    data: [20, 45, 28, 80, 99, 43]
                  }
                ]
              };
              
              const graphStyle = {
                marginVertical: 8,
                borderRadius: 16,
              };
              
              return (
                <View style={{top:20}}>
                    <BarChart
                  style={graphStyle}
                  data={data}
                  width={screenWidth-40}
                  height={300}
                  yAxisLabel="$"
                  chartConfig={chartConfig}
                  verticalLabelRotation={30}
                  yAxisSuffix="$"
                />
                </View>
                
              );
        case 'Tab2':
          return <Text>Tab 2 Content</Text>;
        case 'Tab3':
          return <Text>Tab 3 Content</Text>;
        case 'Tab4':
          return <Text>Tab 4 Content</Text>;
        case 'Tab5':
          return <Text>Tab 5 Content</Text>;
        default:
          return null;
      }
    };
  return (
    <View style={styles.container}>
      {/* <ScrollView contentContainerStyle={styles.scrollViewContent}> */}
      <View style={{flexDirection:"row",gap:10, top:10, padding: 20,}}>
        <TouchableOpacity style={styles.box1} onPress={() => navigation.navigate("SODashboard" as never)}>
          <Text style={styles.headingtext}>Total SO</Text>
          <Text style={styles.countText}>240</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box2}>
          <Text style={styles.headingtext}>Today SO</Text>
          <Text style={styles.countText}>2</Text>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row",gap:10,height:100}}>
        <TouchableOpacity style={styles.box3} onPress={() => navigation.navigate("SODashboard" as never)}>
          <Text style={styles.headingtext}>Pending For Close</Text>
          <Text style={styles.countText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box4}>
          <Text style={styles.headingtext}>Total CLose</Text>
          <Text style={styles.countText}>238</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.graphBox}>
            <View style={styles.tabHeader}>
                    <TouchableOpacity
                    style={[styles.tabButton, selectedTab === 'Tab1' && styles.selectedTab]}
                    onPress={() => setSelectedTab('Tab1')}>
                    <Text style={styles.tabText}>Last 7 Day</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={[styles.tabButton, selectedTab === 'Tab4' && styles.selectedTab]}
                    onPress={() => setSelectedTab('Tab4')}>
                    <Text style={styles.tabText}>Last 30 day</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={[styles.tabButton, selectedTab === 'Tab5' && styles.selectedTab]}
                    onPress={() => setSelectedTab('Tab5')}>
                    <Text style={styles.tabText}>Last Year</Text>
                </TouchableOpacity>
                
            </View>
            {renderTabContent()}
        </View>
        <View style={styles.footerBox}>
        <TouchableOpacity style={{left:20,top:5}}>
            <Icon name="home" size={40} />
        </TouchableOpacity>
        <TouchableOpacity style={{right:20,top:5,position:"absolute"}}>
            <Icon name="person" size={40} />
        </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("LogObservation" as never)}>
            <Image
            source={require('../../../assets/images/addicon.png')}
            style={styles.addlogo}
        />
        </TouchableOpacity>
       
    
      {/* </ScrollView> */}
    </View>
  );
}
let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    addlogo:{
        top:-90,
        height:70,
        width:70,
        position:"absolute",
        alignSelf:"center"
    },
    footerBox:{
        backgroundColor:"white",
        height:60,
        width:"100%",
        position:"absolute",
        bottom:0,
        flexDirection:"row",
    },
    graphBox:{
        backgroundColor:"#f3f3f3",
        height:ScreenHeight-300,
        width:"100%",
        borderRadius:20,
        padding:20
    },
    tabText:{
        fontSize:10
    },
    tabHeader:{
        flexDirection:"row",
        height:40,
        
    },
    tabButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      selectedTab: {
        backgroundColor: 'white',
        borderRadius:50
      },
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
  countText:{
    color:"white",
    fontWeight:"bold",
    fontSize:20
  },
  box1:{
    height:80,
    width:170,
    backgroundColor:"#67b64d",
    borderRadius:20,
    padding:15
  },
  box2:{
    height:80,
    width:170,
    backgroundColor:"#4f7cc0",
    borderRadius:20,
    padding:15
  },
  box3:{
    height:80,
    width:170,
    backgroundColor:"#6b4fc0",
    borderRadius:20,
    padding:15
  },
  box4:{
    height:80,
    width:170,
    backgroundColor:"orange",
    borderRadius:20,
    padding:15
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
export default SODashboard;
