import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { actions } from '../../store/store';

import styles from './styles';

class AppChoice extends Component {
    switchList = (list) => {
        this.props.switchList(list);
    }

    renderList() {
        const lists = ['general', 'sport', 'random'];
        return lists.map(list => {
            return (
                <TouchableOpacity key={ list } style={ styles.button } onPress={ () => this.switchList(list) } >
                    <Text>{ list }</Text>
                </TouchableOpacity>
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

const mapDispatchToProps = dispatch => {
  return {
    switchList(newList) {
      dispatch(actions.switchList(newList));
    }
  }
}

export default connect(null, mapDispatchToProps)(AppChoice);
