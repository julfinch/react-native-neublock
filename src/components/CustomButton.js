import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomButton({label, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#7008CB',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: '80%',
        borderRadius: 7,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '500',
          fontSize: 20,
          color: '#fff',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}