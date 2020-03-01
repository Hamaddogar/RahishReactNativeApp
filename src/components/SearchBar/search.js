import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native'
import SearchBar from "react-native-dynamic-search-bar";
class Search extends Component {
  render() {
    return (
      <View > 
      <SearchBar
      
  placeholder="Search here..."
  iconColor="#FF0000"
  onChangeText={text => {
    console.log(text);
  }}
  onPressCancel={() => {
    this.filterList("");
  }}
  onPress={() => alert("onPress")}
/>
</View>
    );
  }
}

export default Search;


const styles= StyleSheet.create({
   searchView :{
 
  width:"100%",
  height:"100%",
  paddingLeft:400

   }

})
