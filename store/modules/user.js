import { login, logout } from '@/api/user'
import { getToken, setToken, removeToken, userGetToken, userSetToken, userRemoveToken} from '@/utils/auth'
import { resetRouter } from '@/router'
import { MessageBox } from 'element-ui'

const state = {
  token: getToken(),
  name: userGetToken(),
  avatar: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { userEmail, userPass } = userInfo
    return new Promise((resolve, reject) => {
      login({ userEmail: userEmail.trim(), userPass: userPass }).then(response => {
        const { userInfo } = response
        commit('SET_TOKEN', userInfo)
				commit('SET_NAME', userInfo.m_userEmail)
        setToken(userInfo)
				userSetToken(userInfo.m_userEmail)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
//   getInfo({ commit, state }) {
// 		let data = JSON.parse(state.token)
// 		commit('SET_NAME', data.m_userEmail)
// 		//commit('SET_AVATAR', 'sunyang-no')
// //     return new Promise((resolve, reject) => {
// //       getInfo(state.token).then(response => {
// //         const { userInfo } = response
// // 
// //         if (!userInfo) {
// //           reject('Verification failed, please Login again.')
// //         }
// // 
// //         const { userEmail } = userInfo
// // 
// //         commit('SET_NAME', name)
// //         commit('SET_AVATAR', 'sunyang-no')
// //         resolve(data)
// //       }).catch(error => {
// //         reject(error)
// //       })
// //     })
//   },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
			MessageBox.confirm('确定退出?', {
			  confirmButtonText: '确定',
			  cancelButtonText: '取消',
			  type: 'warning'
			}).then(() => {
				removeToken()
				resetRouter()
				commit('SET_TOKEN', '')
				location.reload()
			})
					
					
    //   logout(state.token).then(() => {
    //     commit('SET_TOKEN', '')
    //     removeToken()
    //     resetRouter()
    //     resolve()
    //   }).catch(error => {
				// console.log(error)
    //     
    //   })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

