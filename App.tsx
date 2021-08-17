import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import cow from './assets/takenbro.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Elevando o gerenciamento do seu gado.</Text>
      <Image source={cow}  />
      <TouchableOpacity style={styles.button}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#3A7660',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title:{
    fontWeight:'bold',
    fontSize:24,
    color:"white",
    paddingHorizontal:20
  },
  button:{
    backgroundColor: '#3FE280',
    width:56,
    height:56,
    borderRadius:5
  }
});
