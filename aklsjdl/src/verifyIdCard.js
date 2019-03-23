const { ID_CARD_REGEXP } = require('./const')
/**
 * 验证身份证(仅支持18位)
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * verifyIdCard('441622200001011111') => true
 */
function verifyIdCard (value) {
  return ID_CARD_REGEXP.test(value)
}

module.exports = verifyIdCard
