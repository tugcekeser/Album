import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
 return (
  <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
    <Text style={styles.textStyle}>{children}</Text>
  </TouchableOpacity>
);
};

const styles = {

  textStyle: {
      alignSelf: 'center',
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 5,
    borderColor: '#FF9633',
    backgroundColor: '#FF9633',
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;
