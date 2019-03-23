const { POSTAL_CODE_REGEXP } = require('./const')
/**
 * 验证邮政编码
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * verifyPostalCode('517388') => true
 */
function verifyPostalCode (value) {
  return POSTAL_CODE_REGEXP.test(value)
}

module.exports = verifyPostalCode
