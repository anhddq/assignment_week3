import React from 'react';
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import {CHOICES} from '../node_modules/constants';

function ButtonGroup(props){
  return(
    <View>
      {CHOICES.map(item =>{
        return(
          <TouchableOpacity style={styles.button} onPress={() => props.onPressButton(item.name)}>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>

  )
}
const styles = StyleSheet.create({
  button:{
    backgroundColor:'gray',
    marginVertical:12,
    paddingVertical:5,
    paddingHorizontal:60,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    color:'white',
    fontSize:25,
  },
})

export default ButtonGroup;