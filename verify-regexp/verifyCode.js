import { CODE_REGEXP, NUMBER_CODE_REGEXP } from './const'
/**
 * 验证验证码
 * @function
 * @param {*} value
 * @param {boolean} sw
 * @default false
 * @returns {boolean}
 * @example
 * 默认数字验证(4|6)位
 * verifyCode('1322') => true
 * 第二的参数位为true
 * 数字字母验证(4|6)位
 * verifyCode('acs1', true) => true
 */
function verifyCode (value, sw = false) {
  return sw
    ? CODE_REGEXP.test(value)
    : NUMBER_CODE_REGEXP.test(value)
}

export default verifyCode
