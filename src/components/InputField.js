import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}>
      {icon}
      {inputType == 'password' ? (
        <TextInput
          placeholder={label}
          placeholderTextColor='#fff'
          keyboardType={keyboardType}
          style={{flex: 1, paddingVertical: 0, color: '#fff', fontSize: 17, }}
          secureTextEntry={true}
        />
      ) : (
        <TextInput
          placeholder={label}
          placeholderTextColor='#fff'
          keyboardType={keyboardType}
          style={{flex: 1, paddingVertical: 0, color: '#fff', fontSize: 17,}}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{color: '#7008CB', fontWeight: '700', fontSize: 17,}}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}