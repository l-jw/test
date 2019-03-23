const { PHONE_REGEXP } = require('./const')
/**
 * 验证手机号码
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * verifyPhone('13456789123') => true
 */
function verifyPhone (value) {
  return PHONE_REGEXP.test(value)
}

module.exports = verifyPhone
