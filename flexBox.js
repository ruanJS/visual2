import React from 'react';
import { Text, View } from 'react-native';

function App() {
  return (
    <View style={{
      flexDirection: "column",
      justifyContent: "space-evenly",
      backgroundColor: "yellow",

      height: "100%"
    }}>
        <View style={{backgroundColor: "red", flex: 1}}></View>
        <View style={{backgroundColor: "blue", flex: 1}}></View>
        <View style={{backgroundColor: "green", flex: 1}}></View>
        <View style={{backgroundColor: "black", flex: 1}}></View>
        <View style={{backgroundColor: "purple", flex: 1}}></View>
    </View>
  );
}

export default App;