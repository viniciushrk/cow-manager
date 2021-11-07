import React from 'react';
import {  StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import cow from '../../../assets/cow.png'

export default function CardCow() {
  return (
    <TouchableOpacity style={styles.card} delayPressIn={1} delayPressOut={1}>
        <Image source={cow}  />
        <View style={styles.item}>
            <Text style={styles.title}>Mimosa</Text>

            <View >
                <Text>Nascimento: <Text style={styles.bold}>20/20</Text> </Text>
                <Text>Peso Inicial: <Text style={styles.bold}>5@</Text>  </Text>
                <Text>Peso Atual: <Text style={styles.bold}>8@</Text> </Text>
            </View>

            <View >
                <Text style={styles.textMoney}>RS 2500</Text>
            </View>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    card: {
			marginTop:10,
      borderRadius:10,
      height:114,
      flexDirection:'row',
      backgroundColor: '#EFF6F1',
      alignItems: 'center',  
      justifyContent: 'flex-start',
    },
    item:{
      margin:10,
    },
    title:{
      color:'black',
      fontWeight:'bold',
      fontSize:15
    },
    textMoney:{
    	marginTop:3,
			color:'#579678',
      fontWeight:'bold',
      fontSize:24
		},
		bold:{
			fontWeight:'bold',
		}
  });
  
