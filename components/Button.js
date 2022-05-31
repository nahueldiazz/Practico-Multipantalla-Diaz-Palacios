import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#E2E2E2',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#00648F',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00648F',
    marginLeft: 5,
    marginRight: 5,
    shadowColor: '#666666',
    shadowOffset: {width: 3, height: 4},
    shadowOpacity: 0.2,
    elevation: 1,
  }
};

export default Button;
