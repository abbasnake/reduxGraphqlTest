import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { actions } from '../../store/store';

import styles from './styles';

class AppInput extends Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    addTodo = () => {
        this.props.onNewTodoChanged(this.state.input);
        this.setState({input: ''});
    }

    render() {
    return (
      <View style={ styles.container }>
        <TextInput style={ styles.input } onChangeText={ text => this.setState({input: text}) } />
        <TouchableOpacity style={ styles.button } onPress={ this.addTodo } >
            <Text>ADD</Text>
        </TouchableOpacity>
      </View>
    );
    }
}

const mapDispatchToProps = dispatch => {
  return {
    onNewTodoChanged(newTodo) {
      dispatch(actions.addNewTodo(newTodo));
    }
  }
}

export default connect(null, mapDispatchToProps)(AppInput);