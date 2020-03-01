import React, { Component } from 'react';
import { View, Text } from 'react-native';

class tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flexDirection:'row'}}>
         <View style={{margin:2,minHeight:20,minWidth:40,padding:5,backgroundColor:'white',borderColor:'#dddddd',borderWidth:1,borderRadius:2}}>
                <Text style={{fontWeight:'700',fontSize:10}}>Guests</Text>
              </View>
              <View style={{margin:2,minHeight:20,minWidth:40,padding:5,backgroundColor:'white',borderColor:'#dddddd',borderWidth:1,borderRadius:2}}>
                <Text style={{fontWeight:'700',fontSize:10}}>Guests two</Text>
              </View>
              <View style={{margin:2,minHeight:20,minWidth:40,padding:5,backgroundColor:'white',borderColor:'#dddddd',borderWidth:1,borderRadius:2}}>
                <Text style={{fontWeight:'700',fontSize:10}}>Guests three</Text>
              </View>
      </View>
    );
  }
}

export default tags;

