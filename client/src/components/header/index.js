import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class AppHeader extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.text } >TODOS</Text>
      </View>
    );
  }
}

export default AppHeader;