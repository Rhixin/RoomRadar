// src/components/texts/HeaderText.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HeaderText = ({
  title,
  subtitle,
  titleStyle,
  subtitleStyle,
  containerStyle,
  align = 'center', // 'left', 'center', 'right'
}) => {
  return (
    <View style={[
      styles.container, 
      { alignItems: align === 'center' ? 'center' : align === 'left' ? 'flex-start' : 'flex-end' },
      containerStyle
    ]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {subtitle && (
        <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#002B6B',
    marginBottom: subtitle => subtitle ? 8 : 0,
  },
  subtitle: {
    fontSize: 14,
    color: '#4A5568',
    textAlign: 'center',
  },
});

export default HeaderText;