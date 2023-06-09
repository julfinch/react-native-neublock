import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomButton({label, onPress, width}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button(width)}>
      <Text
        style={styles.buttonText}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: (width) => ({
      backgroundColor: '#7b00ff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: width,
        borderRadius: 7,
    }),
    buttonText: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 16,
        color: '#fff',
    },
});