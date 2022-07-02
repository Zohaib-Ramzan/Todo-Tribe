import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function Login() {
  const [name, setName] = useState('Zohaib');
  const [prof, setProf] = useState({stat: 'Novice Develper', exp: 1});

  const clickHandler = () => {
    setName('Jahanzaib');
    setProf({stat: 'Senior Developer', exp: 6});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>You ar being watched!</Text>

      <Text style={styles.header}>
        Heelo , fellow {'\n'}
        <Text style={styles.label}>Heelo , fellow{'\n'}</Text>
        <Text>Heelo , fellow{'\n'}</Text>
        <Text>Heelo , fellow{'\n'}</Text>
      </Text>

      <View style={styles.buttonContainer}>
        <Text style={styles.label3}>My name is {name}</Text>
        <Text>
          I am a {prof.stat} and My experience is {prof.exp}
        </Text>
        <Button title="Update State" onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
  },
  label: {
    fontSize: 20,
    backgroundColor: 'green',
    marginEnd: 10,
    fontWeight: 'Bold',
  },

  header: {
    padding: 0,
    color: 'red',
    backgroundColor: 'orange',
    alignContent: 'center',
  },
  label3: {
    alignItems: 'center',
    fontStyle: 'italic',
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 70,
  },

  buttonContainer: {
    marginTop: 20,
  },
});
