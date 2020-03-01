import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
 import {loginUpHandler}  from '../../MiddleWare/Login/login'
import {ScrollView} from 'react-native-gesture-handler';

export default class Login extends Component {

  state={
  userEmail:'',
  userPassword:''



  }

  
  loginFunction  = e => {
  

    loginUpHandler(
    
      this.state.userEmail,
      this.state.userPassword,
    );
  };


  render() {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.container}>
          <Text style={styles.logintext}>Login Here</Text>

          <Image
            style={styles.logoimg}
            source={require('../../assets/rahishlogo.png')}
          />
        </View>
        <View style={styles.main}>
          <TextInput
            style={styles.input}
            placeholder="Enter your Email"
            onChangeText={userEmail => this.setState({userEmail})}
            value={this.state.userEmail}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input2}
            placeholder="Enter your Password"
            onChangeText={userPassword => this.setState({userPassword})}
            value={this.state.userPassword}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingRight: 30,
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Forgot');
            }}>
            <Text style={{color: '#FF0000', fontFamily: 'Arial'}}>
              Forget Password ?{' '}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
          <TouchableOpacity
              onPress={this.loginFunction}
            style={styles.loginbtn}>
            <Text style={{color: '#fff', fontFamily: 'Arial'}}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.forgotSignup}>
          <TouchableOpacity onPress={() => Alert.alert('working dont have')}>
            <Text
              style={{color: '#FF0000', fontFamily: 'Arial', paddingLeft: 30}}
              onPress={() => {
                this.props.navigation.navigate('Signup');
              }}>
              Do'nt Have an Account? Sign Up{' '}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <Image
            style={{width: '100%'}}
            source={require('../../assets/backgroundnew.png')}
          />
          <View
            style={{position: 'absolute', left: 0, right: 0, bottom: 0}}></View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logintext: {
    fontFamily: 'serif',
    fontWeight: '500',
    fontSize: 25,

    marginTop: 20,
    color: '#FF0000',
  },
  logoimg: {
    marginTop: 20,
  },
  main: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '85%',
    borderColor: '#FF0000',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 8,
  },
  input2: {
    height: 40,
    width: '85%',
    borderColor: '#FF0000',
    borderWidth: 1,

    borderRadius: 8,
  },
  loginbtn: {
    height: 40,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0000',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#FF0000',
  },
  forgetbtn: {
    marginTop: 5,
    marginLeft: 20,
  },
  signupbtn: {
    marginTop: 25,
    marginLeft: 40,
  },
  forgotSignup: {
    flex: 1,
    flexDirection: 'row',
  },
});
