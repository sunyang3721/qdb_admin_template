import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'
const userKen = 'qdb_admin'
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function userGetToken() {
  return Cookies.get(userKen)
}

export function userSetToken(token) {
  return Cookies.set(userKen, token)
}

export function userRemoveToken() {
  return Cookies.remove(userKen)
}
