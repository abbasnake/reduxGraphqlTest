import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './src/store/store';

import AppHeader from './src/components/header';
import AppInput from './src/components/input';
import AppTodos from './src/components/todos';
import AppChoice from './src/components/choice';

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <View style={styles.container}>
          <AppHeader />
          <AppChoice />
          <AppInput />
          <AppTodos />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%'
  },
});
