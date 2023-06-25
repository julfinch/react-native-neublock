import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChartScreen = ({navigation}) => {
  return (
<View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      <Text>ChartScreen</Text>
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={{width: '10%', }}>
        <Ionicons name="menu-outline" color="#fff" size={33} style={{textAlign: 'right'}}/>
      </TouchableOpacity>
      <Button
        title="Go to Nft"
        onPress={() => navigation.navigate('Nft')}
      />
      
    </View>
  )
}

export default ChartScreen