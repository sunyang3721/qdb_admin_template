import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/qdb/loginUser.do',
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    params: data
  })
}

// export function getInfo(token) {
//   return token
// }

export function logout() {
  return request({
    url: '/qdb/logoutUser.do',
    method: 'post'
  })
}
