import { request } from '@/utils/request'

export const sellerInstrumentPanelHead = (data) => {
  return request({
    url: `/wap/seller/instrument-panel!head.action`,
    method: 'post',
    data
  })
}
//获取Chart数据
export const apiGetChart = (data) => {
  return request({
    url: '/wap/seller/instrument-panel!line.action',
    method: 'post',
    data
  })
}



