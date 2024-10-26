// src/components/CustomButton.js
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const CustomButton = ({ 
  onPress, 
  title, 
  variant = 'primary', // 'primary' or 'secondary'
  style,
  textStyle
}) => {
  return (
    <TouchableOpacity 
      style={[
        styles.button,
        variant === 'primary' ? styles.primaryButton : styles.secondaryButton,
        style
      ]}
      onPress={onPress}
    >
      <Text style={[
        styles.buttonText,
        variant === 'primary' ? styles.primaryButtonText : styles.secondaryButtonText,
        textStyle
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  primaryButton: {
    backgroundColor: '#002B6B',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#002B6B',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  primaryButtonText: {
    color: '#fff',
  },
  secondaryButtonText: {
    color: '#002B6B',
  },
});

export default CustomButton;