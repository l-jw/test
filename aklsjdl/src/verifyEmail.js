const { EMAIL_REGEXP } = require('./const')
/**
 * 验证邮箱
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * verifyEmail('ljw@163.com') => true
 */
function verifyEmail (value) {
  return EMAIL_REGEXP.test(value)
}

module.exports = verifyEmail
