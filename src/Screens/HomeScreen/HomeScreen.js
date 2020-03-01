import React, { Component } from 'react';
import Icon from 'react-native-ionicons'
import { View,ImageBackground ,Text,SafeAreaView, TextInput,Platform,StatusBar ,ScrollView,Image,Dimensions,Animated} from 'react-native';
import SearchCat from './SearchCat'
import Hostel from './hostel1'
import Tags from './tags'


const {height,width} = Dimensions.get('window')

class Home extends Component {

  componentDidMount(){
    this.startHeaderHeight = 80
    if(Platform.OS === 'android'){
      this.startHeaderHeight= 100 +StatusBar.currentHeight
    }
  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <SafeAreaView style={{flex:1}}>
      {/* <ImageBackground></ImageBackground> */}
      <View style={{flex:1}}>

        <View style={{height:this.startHeaderHeight,backgroundColor:'white',borderBottomWidth:1,borderBottomColor:'#dddddd'}}>
            <View style={{flexDirection:'row',padding:10,backgroundColor:'white',marginHorizontal:20,shadowOffset:{width:0,height:0},shadowColor:'black',
                shadowOpacity:0.2,
                elevation:1,
                marginTop:Platform.OS  == 'android' ? 10 :null
          }}>
              <Icon  android="md-search" style={{marginTop:10}} size={20} />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Try New Hostel"
                placeholderTextColor="grey"
                style={{flex:1,fontWeight:'700',backgroundColor:'white'}}
              />
            </View>

            <Animated.View style={{flexDirection:'row',marginHorizontal:20,position:'relative',top:1}}>
              <Tags />
             
            </Animated.View>
        </View>
            <ScrollView
            scrollEventThrottle={16}
            >

            <View style={{flex:1,backgroundColor:'white',paddingTop:20}}>
              <Text style={{fontSize:24,fontWeight:'700',paddingHorizontal:20}}>What Can we Help You find, ?</Text>



              <View style={{height:130,marginTop:20}}>


                <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >
                      <SearchCat imageUri={require('../../assets/h1.jpg')} name="Sukh Chain Boys 3 Hostel" />
                      <SearchCat imageUri={require('../../assets/pic.png')} name="Sukh Chain Boys 2 Hostel" />
                      <SearchCat imageUri={require('../../assets/h2.jpg')} name="Sukh Chain Boys 4 Hostel" />
                      <SearchCat imageUri={require('../../assets/pic.png')} name="Sukh Chain Boys 5 Hostel" />
                      

                </ScrollView>
              </View>

              <View style={{marginTop:40,paddingHorizontal:20}}>
                <Text style={{fontSize:24,fontWeight:'700'}}>Introducing New Places To Live ...!</Text>
                <Text style={{fontWeight:'100',marginTop:10}}>
                  A most Populer Places of Your Area ....!</Text>
                  <View style={{width:width-40,height:200,marginTop:20}}>
                  <Image
                  style={{flex:1,width:null,height:null,resizeMode:'cover',borderColor:'#dddddd',borderRadius:5,borderWidth:1}}
                  source={require('../../assets/h2.jpg')} />
                    <Text>Sukh Chain Boys Hostel Faisalabad,Punjab</Text>
                  </View>
                 


            </View>
            </View>


            {/* Home arround Area here */}
      {/* another view  */}
            <View style={{marginTop:40}}>
              <Text style={{fontSize:24,fontWeight:'700',paddingHorizontal:20}}>Home Around the world</Text>

                <View style={{paddingHorizontal:20,marginTop:30,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
            {/* next chards */}
                      <Hostel image={require('../../assets/h1.jpg')} width={width} name="Sukh Chain Boys Boys 1 Hostel JungRoad Faisalabab,Punjab" price="Price In Range :2000" rating={4} type="Private Room :2"/>
                      <Hostel image={require('../../assets/h2.jpg')} width={width} name="Sukh Chain Boys Boys Hostel JungRoad Faisalabab,Punjab" price="Price In Range :2000" rating={4}  type="Private Room :2"/>
                      <Hostel image={require('../../assets/h1.jpg')} width={width} name="Sukh Chain Boys Boys Hostel JungRoad Faisalabab,Punjab" price="Price In Range :2000" rating={5}  type="Private Room :2"/>
                      <Hostel image={require('../../assets/pic.png')} width={width} name="Sukh Chain Boys Boys Hostel JungRoad Faisalabab,Punjab" price="Price In Range :2000" rating={2}  type="Private Room :2"/>

                </View>
            </View>

            </ScrollView>
      </View>
             

    </SafeAreaView>
    );
  }
}

export default Home;
