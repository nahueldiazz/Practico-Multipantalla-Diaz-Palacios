import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    backgroundColor: '#F8EFE1',
    shadowColor: '#666666',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.2,
    elevation: 1,
  }
};

export default CardSection;
