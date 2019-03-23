import { USER_NAME_REGEXP } from './const'
/**
 * 验证用户名(仅支持字母数字下划线减号)(6~18 位)
 * @function
 * @param  {*} value
 * @return {boolean}
 * @example
 * verifyUserName('hello-world') => true
 */
function verifyUserName (value) {
  return USER_NAME_REGEXP.test(value)
}

export default verifyUserName
