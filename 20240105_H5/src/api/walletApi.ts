import { request } from '@/utils/request'
//获取金额信息
export const wallet = () => {
  return request({
    url: `/wap/api/wallet!getUsdt.action`,
    method: 'post'
  })
}

//获取资金明细列表
export const apiGetMoneyList = (data) => {
  return request({
    url: '/wap/api/moneylog!list.action',
    method: 'post',
    data
  })
}
//获取所有链地址列表
export const apiGetBlockChain = () => {
  return request({
    url: '/wap/api/channelBlockchain!list.action',
    method: 'post',
  })
}
//获取提现记录列表
export const apiGetWithdrawList = (data) => {
  return request({
    url: '/wap/api/withdraw!list.action',
    method: 'post',
    data
  })
}
//获取提现费率
export const apiGetWithdrawFee = (data) => {
  return request({
    url: '/wap/api/withdraw!fee.action',
    method: 'post',
    data
  })
}




