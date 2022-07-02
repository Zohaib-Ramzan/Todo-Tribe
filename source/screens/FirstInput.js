import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default function FirstInput() {
  const [name, setName] = useState('Zohaib');
  const [age, setAge] = useState(19);

  return (
    <View style={styles.container}>
      <Text style={styles.label}> Welcome</Text>

      <Text style={styles.label}>Enter the Name: </Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder="e.g. Ali "
        onChangeText={val => setName(val)}
      />

      <Text style={styles.label}>Enter the Age: </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="e.g. 25 "
        onChangeText={val => setAge(val)}
      />

      <Text>
        name : {name} , Age : {age}{' '}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    paddingLeft: 0,
    color: 'orange',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 7,
    margin: 10,
    width: 200,
  },
});
