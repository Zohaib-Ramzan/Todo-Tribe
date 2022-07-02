import {TestScheduler} from 'jest';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FirstInput from './source/screens/FirstInput';
import FourthTodo from './source/screens/FourthTodo';
import Login from './source/screens/Login';
import SecondList from './source/screens/SecondList';
import ThirdTouch from './source/screens/ThirdTouch';
import Test from './source/components/test';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Test />
    </View>
  );
}
