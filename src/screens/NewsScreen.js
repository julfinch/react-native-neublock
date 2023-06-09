import { StyleSheet, View, Text, Button, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NewsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#212244'}}>
      <View style={styles.headerWrapper}>
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Cryptocurrency')}>
              <Ionicons name="chevron-back-outline" color="#fff" size={33}/>
            </TouchableOpacity>
          

          
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="list-circle-outline" color="#fff" size={33}/>
            </TouchableOpacity>
          
        </View>
      </View>
      <Text>NewsScreen</Text>
      <Button title="Go back" onPress={() => navigation.navigate('Nft')} />
    </SafeAreaView>
  )
}

export default NewsScreen

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'column', 
    flex: 1, 
    marginTop: 20,
    marginBottom: 60,
    height: 80,
  },
  container: {
    width: '100%',
    marginBottom: 14,
    height: 33,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 600,
    width: '90%',
  },
  searchWrapper: {
    flexDirection: 'row' ,
    justifyContent:'center',
    alignItems:'center', 
    backgroundColor: '#fff', 
    width: '100%', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    height: 50,
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 8,

  }
});
