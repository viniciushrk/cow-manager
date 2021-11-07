import React from 'react';
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BottomNavigation() {
  return (
      <View style={styles.bar}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="md-home-outline" size={20} color="white" />
          <Text style={styles.text}>
            Menu
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="settings-outline" size={20} color="white" />
          <Text style={styles.text}>
            Configurações
          </Text>
        </TouchableOpacity>
      </View> 
  );
}

const styles = StyleSheet.create({
  bar:{
    position:'absolute',
    bottom:0,
    backgroundColor: '#3A7660',
    width:'100%',
    height:68,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-evenly',
    
  },
  text:{
    fontWeight:'bold',
    fontSize:18,
    color:"white",
    paddingHorizontal:20
  },
  button:{
    backgroundColor: '#3A7660',
    width:"50%",
    height:56,
    borderRadius:5,
    alignItems:'center',
    justifyContent: 'center',
    flexDirection:"row"
  }
});
