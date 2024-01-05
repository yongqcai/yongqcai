import { LoginData } from "./types"
import { request } from '@/utils/request'

export const apiLogin = (data: LoginData) => {
  return request({
    url: `/wap/api/user!login.action`,
    method: 'post',
    data: data
  })
}

export const apiGetProfile = () => {
  return request({
    url: '/wap/seller/seller!info.action',
    method: 'post'
  })
}
// export const apiGetProfile = () => {
//   return request({
//     url: '/wap/api/localuser!get.action',
//     method: 'get'
//   })
// }

export const apiLogout = () => {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

