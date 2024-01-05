
import { request } from '@/utils/request'

export const apiGetCategoryList = () => {
  return request({
    url: `/wap/api/category!list.action`,
    method: 'post'
  })
}
export const apiGetCategoryListTree = () => {
  return request({
    url: `/wap/api/category!tree.action`,
    method: 'get'
  })
}

export const apiGetGoodsList = (data) => {
  return request({
    url: `/wap/seller/systemGoods!list.action`,
    method: 'post',
    data
  })
}
export const apiGetMyGoodsList = (data) => {
  return request({
    url: `/wap/seller/goods!list.action`,
    method: 'post',
    data
  })
}
export const apiMerchantGoodsList = (data) => {
  return request({
    url: `/wap/seller/goods!list.action`,
    method: 'post',
    data
  })
}
export const apiSysParaProductInfo = () => {
  return request({
    url: "/wap/api/sysParaProduct!info.action",
    method: 'post'
  })
}
export const apiGoodsAddOrUpdate = (data) => {
  return request({
    url: "/wap/seller/goods!addOrUpdate.action",
    method: 'post',
    data
  })
}
export const apiGoodsUpdate = (data) => {
  return request({
    url: "/wap/seller/goods!update.action",
    method: 'post',
    data
  })
}

