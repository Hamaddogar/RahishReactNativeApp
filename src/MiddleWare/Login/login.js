import axios from 'axios';
import {AsyncStorage} from 'react-native';
export const loginUpHandler = (userEmail, userPassword) => {
  axios
    .post('http://192.168.1.103:5000/api/loginuser/login', {
      userEmail,
      userPassword,
    })
    .then(function(response) {
  

      storeData = async () => {
        try {
          await AsyncStorage.setItem('token',response.data);
        } catch (error) {
          console.log("this is  error",error)
        }
      };
      _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('token');
          if (value !== null) {
            // We have data!!
            console.log(value);
          }
        } catch (error) {

        }
      };
        //  if(response.data.success===true)
        //  {
        //     this.props.navigation.navigate('Home');

        //  }else{
        //     this.props.navigation.navigate('Signup')
             

        //  }
    })
    .catch(function(error) {
      console.log(error);
    });
};
