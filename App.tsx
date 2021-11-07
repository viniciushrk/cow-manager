
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import BottomNavigation from './src/components/BottomNavigation/BottomNavigation';
import CardCow from './src/components/CardCow/CardCow';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const clickHandler = () => {
    
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrolls}>
        <CardCow />
        <CardCow />
        <CardCow />
        <CardCow />
        <CardCow />
        <CardCow />
        <CardCow />
        <CardCow />
        <CardCow />
        <CardCow />
        <CardCow />
        <CardCow />
      </ScrollView>
      
      <TouchableOpacity
          activeOpacity={0.7}
          onPress={clickHandler}
          style={styles.touchableOpacityStyle}>
          <Ionicons name="add-outline" size={30} color="white" />
        </TouchableOpacity>
     <BottomNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrolls: {
    marginTop:50,
    width:'100%',
    paddingHorizontal:10
  },
  touchableOpacityStyle: {
    backgroundColor:'#000',
    position: 'absolute',
    borderRadius:10,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 80,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
});
