import React, { Component } from 'react';
import { View, Text ,Image,Alert} from 'react-native';

class SearchCat extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{height:130,width:130,marginLeft:20,borderWidth:0.5,borderColor:'#dddddd'}}>

        <View style={{flex:2}}> 
          <Image style={{flex:1,width:null,height:null,resizeMode:'cover'}} 
          
          source={this.props.imageUri}/>
      </View> 
      <View style={{flex:1,paddingLeft:10,paddingTop:10}}>
      <Text onPress={()=>Alert.alert('Text Clicked')}>{this.props.name}</Text>

      </View>
      </View>
    );
  }
}

export default SearchCat;
