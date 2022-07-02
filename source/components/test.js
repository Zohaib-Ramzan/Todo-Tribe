import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Test() {
  return (
    <View style={styles.container}>
      <Text style={styles.label1}>Row1</Text>
      <Text style={styles.label2}>Row2</Text>
      <Text style={styles.label3}>Row3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  label1: {
    // flexDirection: 'column-reverse',
    padding: 25,
  },
  label2: {
    padding: 25,
  },
  label3: {
    padding: 25,
  },
});
