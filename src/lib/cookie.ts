import Cookies from 'js-cookie'

export function setCookie(key: string, value: string) {
  Cookies.set(key, value, { expires: 30 })
}

export function getCookie(key: string) {
  return Cookies.get(key)
}

export function removeCookie(key: string) {
  Cookies.remove(key)
}
