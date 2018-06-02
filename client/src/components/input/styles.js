import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    flex: 0.1,
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  input: {
    borderBottomWidth: 2,
    borderRadius: 5,
    backgroundColor: 'yellow',
    width: '50%'
  },

  button: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    margin: 5
  }
});

export default styles;