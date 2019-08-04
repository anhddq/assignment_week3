import  React,{Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {GameStatus, PlayerCard, ButtonGroup} from './components';
import {CHOICES} from './node_modules/constants';
import {randomComputerChoice, getRoundOutcome} from './node_modules/untility';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      playerChoice : {},
      computerChoice: {},
      result:'',
    }
  }
  onPressButton = (playerChoice) => {
    const foundChoice =CHOICES.find(choice => choice.name === playerChoice);
    const computerChoice = randomComputerChoice();
    const result = getRoundOutcome(foundChoice.name,computerChoice.name);
    this.setState({
      playerChoice:foundChoice,
      computerChoice : computerChoice,
      result : result,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.gameStatusWrapper}>
          <GameStatus result={this.state.result} />
        </View>
        <View style={styles.gamePlayerWrapper}>
          <PlayerCard playerName='Player' choice ={this.state.playerChoice} />
          <PlayerCard playerName='Computer' choice ={this.state.computerChoice} />
        </View>
        <View style={styles.buttonWrapper}>
          <ButtonGroup onPressButton={this.onPressButton} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  gameStatusWrapper:{
    flex: 0.2, 
    justifyContent:'center',
    alignItems:"center",
  },
  gamePlayerWrapper:{
    flex: 0.4,
    flexDirection:'row',
  },
  buttonWrapper:{
    flex: 0.4,
    justifyContent:'center',
    alignItems:"center",
  }

});
