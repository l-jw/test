import { BANK_CARD_REGEXP } from './const'
/**
 * 验证银行卡(16|19)位
 * @function
 * @param {*} value
 * @returns {boolean}
 * @example
 * verifyBankCard('441622200001011111') => true
 */
function verifyBankCard (value) {
  return BANK_CARD_REGEXP.test(value)
}

export default verifyBankCard
