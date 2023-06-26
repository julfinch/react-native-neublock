import { StyleSheet, Pressable, View, Text, TextInput,SafeAreaView, TouchableOpacity, ScrollView, FlatList, ActivityIndicator, } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const GlobalScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeAreaViewWrapper}>
      <View style={styles.headerWrapper}>
        <View style={styles.container}>
          <Text style={styles.title}>
            NFTs
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()} style={{width: '10%', }}>
            <Ionicons name="menu-outline" color="#fff" size={33} style={{textAlign: 'right'}}/>
          </TouchableOpacity>
        </View>
        <View style={styles.searchWrapper}>
          <Ionicons name="search-outline" size={22}  />
          <TextInput style={styles.searchInput} placeholder='Enter token name' onChangeText={(text) => setSearchTerm(text.toLowerCase())}/>
        </View>
      </View>


      
    </SafeAreaView>
  )
}

export default GlobalScreen


const styles = StyleSheet.create({
  safeAreaViewWrapper: {
    flex:1, 
    // backgroundColor: '#7b00ff'
    backgroundColor: '#212244', 
  },
  headerWrapper: {
    paddingHorizontal: 8, 
    flexDirection: 'column', 
    flex: 1, 
    marginTop: 20,
    marginBottom: 0,
    minHeight: 110,
  },
  container: {
    width: '100%',
    marginBottom: 14,
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
  },
  scrollViewWrapper: {
    padding: 7, 
    flexDirection: 'column', 
    backgroundColor: '#212244', 
    width: '100%', 
    minHeight: '80%'
  }
});
