import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const SidebarComponent = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  useEffect(() => {
    const fetchUserName = async () => {
     
        const userData = await AsyncStorage.getItem("userInfo");
        const parsedData = userData && JSON.parse(userData);
        const name = parsedData.NAME;
        setUserName(name);
      
    };

    fetchUserName();
  }, []);
  const navigateToProfileUpdate = () => {
    navigation.navigate('Profile' as never);
  };
  const navigateToMenu = (menuname:string) => {
    navigation.navigate(menuname as never);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      
        <Image
          source={require('../../assets/images/user-icon.png')}
          style={styles.userIcon}
        />
        <Text style={styles.userName}>{userName}</Text>
        <TouchableOpacity onPress={navigateToProfileUpdate} >
          <Image
            source={require('../../assets/images/edit-icon.png')}
            style={styles.editIcon}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.menuItems} onPress={() => navigation.navigate("Home" as never)}>
        <Text>Home</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  menuItems:{
    height:40,
    backgroundColor:"#ededed",
    textAlign:"center",
    padding:10
  },
  header:{
    flexDirection:"row",
    height:55,
    // borderBottomColor:"gray",
    // borderBottomWidth: 2,
    left:10
  },
  container: {
    flex: 1,
    top: 40,
   
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    top:10,
    left:15
  },
  editIcon: {
    width: 20,
    height: 20,
    position:"absolute",
    // left:25,
    // top:10
    left:-112,
    bottom:5,
  },
});

export default SidebarComponent;