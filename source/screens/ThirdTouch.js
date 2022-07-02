import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default function ThirdTouch() {
  const [people, setPeople] = useState([
    {name: 'Zohaib', id: '1'},
    {name: 'Shahzaib', id: '2'},
    {name: 'Jahanzaib', id: '3'},
    {name: 'Mujeeb', id: '4'},
    {name: 'Bilal', id: '5'},
    {name: 'Maaz', id: '6'},
    {name: 'Asad', id: '7'},
  ]);

  const pressHandler = id => {
    console.log(id);
    setPeople(prevPeople => {
      return prevPeople.filter(person => person.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={item => item.id}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.label}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* <FlatList  // Simply by FlatList if key is given
        data={people}
        renderItem={({item}) => <Text style={styles.label}>{item.name}</Text>}
      /> */}

      {/* <ScrollView> // Simple by ScrollView
        {people.map(item => (
          <View key={item.key}>
            <Text style={styles.label}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  label: {
    padding: 30,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 24,
    fontSize: 20,
    backgroundColor: 'pink',
    marginHorizontal: 24,
  },
});
