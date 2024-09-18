import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import colors from '../../theme/colors';

interface CustomInputProps {
  label: string;
  multiline?: boolean;
}

const CustomInput = ({ label, multiline = false }: CustomInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={label}
        multiline={multiline}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: 10,
  },
  label: {
    fontWeight: 'bold',
    width: 75,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
    flex: 1,
    padding: 5,
  },
});
