import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
function GameStatus(props){
  if(props.result === 'Victory!')
  {
    return(
        <Text style={styles.winText}>{props.result}</Text>
    )
  }
  if(props.result === 'Defeat!')
  {
    return(
        <Text style={styles.loseText}>{props.result}</Text>
    )
  }
  return(
      <Text style={styles.tieText}>{props.result}</Text>
  )
  
}

const styles = StyleSheet.create({
  winText:{
    fontSize:30,
    color: 'green'
  },
  loseText:{
    fontSize:30,
    fontWeight:'700',
    color: 'red'
  },
  tieText:{
    fontSize:30,
    color: 'yellow'
  }
})
export default GameStatus;