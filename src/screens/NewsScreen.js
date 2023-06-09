import { View, Text, Button } from 'react-native'
import React from 'react'

const NewsScreen = ({navigation}) => {
  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      <Text>NewsScreen</Text>
      <Button title="Go back" onPress={() => navigation.navigate('Nft')} />
    </View>
  )
}

export default NewsScreen