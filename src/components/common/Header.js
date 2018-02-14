import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={ viewStyle }>
      <Text style={ textStyle }>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#00bec8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 10,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  }
}

export default Header;
