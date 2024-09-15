/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {Text, View} from 'react-native';
import colors from './src/theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

function App(): React.JSX.Element {
  return (
    <View>
      <Text style={{color: colors.primary}}>Hello Worlds </Text>
      <AntDesign name="home" size={24} color="black" />
    </View>
  );
}

export default App;
