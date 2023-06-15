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
        marginBottom: 18,
      }}>
      {icon}
      {inputType == 'password' ? (
        <TextInput
          placeholder={label}
          placeholderTextColor='#fff'
          keyboardType={keyboardType}
          style={{flex: 1, paddingVertical: 0, color: '#fff', fontSize: 16, }}
          secureTextEntry={true}
        />
      ) : (
        <TextInput
          placeholder={label}
          placeholderTextColor='#fff'
          keyboardType={keyboardType}
          style={{flex: 1, paddingVertical: 0, color: '#fff', fontSize: 16,}}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{color: '#7008CB', fontWeight: '700', fontSize: 16,}}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}