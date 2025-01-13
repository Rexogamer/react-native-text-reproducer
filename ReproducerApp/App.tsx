/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, StyleSheet, Text} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.background}>
      <Text style={styles.outerText}>
        hi hey
        <Text style={styles.innerText}>heya</Text>
        hello
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: 'grey',
  },
  outerText: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'black',
    paddingInline: 8,
  },
  innerText: {
    backgroundColor: 'lightgreen',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'blue',
    paddingInline: 8,
  },
});

export default App;
