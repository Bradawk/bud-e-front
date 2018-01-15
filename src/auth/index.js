const API_URL = 'http://localhost:3000'
const LOGIN_URL = API_URL + '/users/login'
const SIGNUP_URL = API_URL + '/users/signup'
export default {

  user: {
    authenticated: false
  },

  // login(context, creds, redirect) {
  //   context.$http.post(LOGIN_URL, creds, (data) => {
  //     localStorage.setItem('token', data.token)
  //     this.user.authenticated = true
  //     if(redirect) {
  //       this.$router.go(redirect)        
  //     }

  //   }).catch((err) => {
  //     context.error = err
  //   })
  // },

  login(context, creds, redirect) {
    context.$http.post(LOGIN_URL, {
        'email': creds.email,
        'password': creds.password
      })
      .then(response => {
          localStorage.setItem('token', response.data.token);
          this.user.authenticated = true;
          context.$router.push(redirect);
          Materialize.toast(response.data.message, '2000');
      })
      .catch((error) => {
        Materialize.toast('Try again :)', '2000');
      })
  },

  signup(context, creds, redirect) {
    context.$http.post(SIGNUP_URL, {
        'email': creds.email,
        'password': creds.password,
        'username': creds.username
      })
      .then(response => {
        if (redirect) {
          context.$router.push(redirect);
          Materialize.toast(response.data.message, '2000');
        }
      })
      .catch((err) => {
        context.$router.push('/signup');
        Materialize.toast('err', '6000');
      })
  },

  logout(context, redirect) {
    localStorage.removeItem('token')
    this.user.authenticated = false
    context.$router.go(redirect);
  },

  checkAuth() {
    var jwt = localStorage.getItem('token')
    if (jwt) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }
  },

  getAuthHeader() {
    return {
      'x-access-token': localStorage.getItem('token')
    }
  }
}
