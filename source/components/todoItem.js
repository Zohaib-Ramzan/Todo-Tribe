import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import FIcon from 'react-native-vector-icons/MaterialIcons';

export default function TodoItem({pressHandler, item}) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>
        <FIcon name="delete" size={24} color="coral" padding="" />
        {+item.text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 1,
    borderRadius: 10,
    color: 'black',
  },
});
