import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import colors from '../../styles/colors';

import { IButtonProps } from './@interfaces';

export function Button({ children, ...rest }: IButtonProps): JSX.Element {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.button} {...rest} >
      <Text style={styles.buttonText}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    padding: 16,
    minHeight: 56,
    minWidth: 56
  },
  buttonText: {
    color: colors.white,
    fontSize: 24
  }
})