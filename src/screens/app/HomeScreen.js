import { View, Image, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';


const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#212244', }}>
      <ScrollView style={{padding: 20}}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItem: 'center', gap: 10, }}>
            <Image
              source={require('../../assets/doodles-pic.png')}
              style={{height: 40, width: 40, borderRadius: 50,borderColor:'#fff',borderWidth: 1, marginBottom: 10}}
            />
            <View>
              <Text style={{color: 'rgba(255,255,255,0.6)'}}>Welcome back</Text>
              <Text style={{color: '#fff', fontWeight: '700',}}>Lara Turner</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.openDrawer()} style={{width: '10%', }}>
            <Ionicons name="menu-outline" color="#fff" size={33} style={{textAlign: 'right'}}/>
          </TouchableOpacity>
        </View>
        <Text style={{color: '#fff',}}>
            Portfolio
        </Text>
        <Text style={{color: '#fff',fontSize: 27, fontWeight: '700',}}>
            $ 45,000
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen