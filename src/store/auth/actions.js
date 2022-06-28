export default {
  async login(context, payload) {
    // console.log('login:123 ',payload)
    const response = await fetch(
      'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/login',
      {
        method: 'POST',
        headers:{
          "content-type": "application/json",
          "apikey": "FcKdtJs202204",
          "username": "shin"
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
        })
      }
    );

      // access token
      const dataForm = await response.json()
      console.log('foroforofor',dataForm)
      console.log('From: ',dataForm.user)
      window.localStorage.setItem('token',dataForm.accessToken)
      // console.log('signin token: ',dataForm.accessToken)
      
    context.commit('setUser', {
      user: dataForm.user,
      token:dataForm.accessToken
    });
  },
  async signup(context, payload) {
    // console.log('payload pwd: ',typeof(payload.password))

    const response = await fetch(
      'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/signup',
      {
        method: 'POST',
        headers:{
          "content-type": "application/json",
          "apikey": "FcKdtJs202204",
          "username": "shin"
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          displayName: payload.displayName
        })
      }
    );

    // const responseData = await response.json();
    // console.log('response: ',responseData)

      // access token
      const dataForm = await response.json()
      // console.log('From: ',dataForm.user)
      window.localStorage.setItem('token',dataForm.accessToken)
      // console.log('signup token: ',dataForm.accessToken)
      
      context.commit('setUser', {
      user: dataForm.user,
      token:dataForm.accessToken
    });

  },
  async logout(context,payload) {
    console.log('token pay: ',payload)
    const response = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/logout',{
      method: 'POST',
      headers:{
        "content-type": "application/json",
        "apikey": "FcKdtJs202204",
        "username": "shin",
        'Authorization': `Bearer ${payload}`
      },
    })
    const Token = await response.json()
    console.log('Token: ',Token)

  }
};
