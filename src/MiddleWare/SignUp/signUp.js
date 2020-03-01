import axios from 'axios';
export const signUpHandler = (userName, userEmail, userPassword) => {
  axios
    .post('http://192.168.1.103:5000/api/registeruser/signup', {
      userName,
      userEmail,
      userPassword,
    })
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
};
