import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { actions } from '../../store/store';

import styles from './styles';

class AppTodos extends Component {
    deleteTodo = (id) => {
    this.props.deleteTodo(id)
  }

    generateRandomKey() {
        return Math.random();
    }

    renderList() {
        return this.props.todos[this.props.currentList].map(item => {
            return (
                <View key={ item.id } style={ styles.itemContainer } >
                    <Text style={ styles.item } >{ item.title }</Text>
                    <TouchableOpacity
                        style={ styles.button }
                        onPress={ () => this.deleteTodo(item.id) }
                    >
                        <Text value={ item.id } >X</Text>
                    </TouchableOpacity>
                </View>
            )
        });

    }

    render() {
        return (
          <View style={ styles.container }>
            { this.renderList() }
          </View>
        );
    }
}

const mapStateToProps = state => {
  return {
    currentList: state.currentList,
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo(id) {
      dispatch(actions.deleteTodo(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppTodos);
