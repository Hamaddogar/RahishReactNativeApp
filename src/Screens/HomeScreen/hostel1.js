import React, { Component } from 'react';
import { View, Text ,Image} from 'react-native';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-ionicons'

class Hostel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{width:this.props.width/2-30,height:this.props.width/2-30,borderWidth:0.5,borderColor:'#dddddd'}}>
        {/* images area */}
          <View style={{flex:1}}>
           <Image
            source={this.props.image}
            style={{flex:1,width:null,height:null,resizeMode:'cover'}} />
            

          </View>
           <View style={{flex:1,alignItems:'flex-start',justifyContent:'space-evenly',paddingLeft:10}} >  

            <Text style={{fontSize:10,color:'#b63838',fontWeight:'bold'}}>{this.props.type}</Text>
            <Text style={{fontSize:12,fontWeight:'bold'}} >{this.props.name}</Text>
            <Text style={{fontSize:10}}>{this.props.price}</Text>
            
        <StarRating
        disabled={true}
        emptyStar={'ios-star-outline'}
        fullStar={'ios-star'}
        halfStar={'ios-star-half'}
        iconSet={'Ionicons'}
        maxStars={5}
        starSize={10}
        rating={this.props.rating}
        fullStarColor={'red'}
      />
          </View>

          </View>
    );
  }
}

export default Hostel;
