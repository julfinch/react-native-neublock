import { View, Text, Button } from 'react-native'
import React from 'react'

const NftScreen = ({navigation}) => {
  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      <Text>NftScreen</Text>
      <Button
        title="Go to News"
        onPress={() => navigation.navigate('News')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}

export default NftScreen