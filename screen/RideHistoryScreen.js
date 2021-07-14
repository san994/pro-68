import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class RideHistoryScreen extends Component{
    render(){
        return(
         <View style = {styles.container}>
             <Text style = {styles.textStyle}>Ride History Screen</Text>
         </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"pink"
    },
    textStyle:{
        color:"purple",
        fontSize:20,
    }
})