import eruda from 'eruda'
import { getEnvValue } from '@/utils/index'
import moment from "moment-timezone";
// eruda 初始化
export const initEruda = () => {
  const NEED_ERUDA = getEnvValue('VITE_APP_NEED_ERUDA')
  if (NEED_ERUDA === 'true') {
    eruda.init()
  }
}
export const copyToClipboard = (textToCopy: string) => {
  // navigator clipboard 需要https等安全上下文
  if (navigator.clipboard && window.isSecureContext) {
    // navigator clipboard 向剪贴板写文本
    return navigator.clipboard.writeText(textToCopy)
  } else {
    // 创建text area
    const textArea = document.createElement('textarea')
    textArea.value = textToCopy
    // 使text area不在viewport，同时设置不可见
    textArea.style.position = 'absolute'
    textArea.style.opacity = "0"
    textArea.style.left = '-999999px'
    textArea.style.top = '-999999px'
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    return new Promise((res, rej) => {
      // 执行复制命令并移除文本框
      document.execCommand('copy') ? res('Success!') : rej()
      textArea.remove()
    })
  }
}
export const numberStrFormat = (number, decimal = 2) => {
  let resStr = decimal === 0 ? 0 : '0.00'
  const amount = Number(number)
  if (!isNaN(amount)) {
    const options = {
      minimumFractionDigits: decimal
    }
    resStr = Math.abs(amount).toLocaleString('en-US', options)
    if (resStr.indexOf('.') > -1) {
      const arr = resStr.split('.')
      if (arr[1].length === 1) {
        resStr = resStr + '0'
      }
      if (arr[1].length > 2 && decimal === 2) {
        resStr = arr[0] + '.' + arr[1].slice(0, 2)
      }
    } else {
      resStr = decimal === 0 ? resStr : resStr + '.00'
    }
  }
  return resStr
}
export const formatZoneDate = (time, format = 'YYYY-MM-DD HH:mm:ss') => {
  if (!time) return '--'
  //设置服务器默认时区
  // moment.tz.setDefault('Asia/Shanghai')
  // time = moment(time)
  // //获取当前时区
  // let timezone = moment.tz.guess(true)
  // //time转成当前时区的时间
  // time = moment.tz(time, timezone).format(format)
  // return time
  return moment(time).format(format)
}
