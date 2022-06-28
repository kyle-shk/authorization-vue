import router from './index.js'
import axios from 'axios'
// router.beforeEach(async (to)=>{
//     console.log(to)
//     if (to.meta.auth) {
//         const accessToken = window.localStorage.getItem('token')
//         console.log('token: ',window.localStorage.getItem('token'))
//         const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/me',{
//             method:'POST',
//             headers:{
                // "content-type": "application/json",
                // "apikey": "FcKdtJs202204",
                // "username": "shin",
//                 'Authorization': `Bearer ${accessToken}`
//               }
//         })
//         const user =await res.json()
//         console.log('userinfo: ',user)

//     }
//     return true
// })

// async function me(accessToken) {
//     const {data} = await axios({
//         url:'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/me',
//         method:'POST',
//         headers: {
//             "content-type": "application/json",
//             "apikey": "FcKdtJs202204",
//             "username": "shin",
//             "Authorization": `Bearer ${accessToken}`
//             }
//         })
//         console.log('data1234: ',data)
//         return !!data.email
//     }


// router.beforeEach(function (to,from,next){
//     if(to.meta.auth) {
//         let accessToken = ''
//         if (window.localStorage.getItem('token') ) {
//              accessToken = window.localStorage.getItem('token') 
//              me(accessToken)
//         } else {
//             next('/login')
//         }
//         // return me(accessToken)
//         //     ? true
//         //     : '/login'
//     }

//     return true
// })