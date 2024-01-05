import { request } from '@/utils/request'

export const apiGetOrderList = (data) => {
  return request({
    url: `/wap/seller/orders!list.action`,
    method: 'post',
    data
  })
}





