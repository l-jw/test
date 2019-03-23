/**
 * 手机正则表达式
 * @constant
 * @type {RegExp}
 */
const PHONE_REGEXP = /^1[34578]\d{9}$/
/**
 * 邮箱正则表达式
 * @constant
 * @type {RegExp}
 */
const EMAIL_REGEXP = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+@(([a-zA-Z0-9]+)\.){1,2}[a-z]{2,3}$/
/**
 * 验证码正则表达式(仅支持0-9数字)
 * @constant
 * @type {RegExp}
 */
const NUMBER_CODE_REGEXP = /^([0-9]{4}|[0-9]{6})$/
/**
 * 验证码正则表达式(支持数字字母)
 * @constant
 * @type {RegExp}
 */
const CODE_REGEXP = /^([a-zA-Z0-9]{4}|[a-zA-Z0-9]{6})$/

/**
 * 中文正则表达式
 * @constant
 * @type {RegExp}
 */
const CHINESE_REGEXP = /[\u4E00-\u9FA5]/

/**
 * 用户名正则表达式(仅支持字母数字下划线减号)(6~18位)
 * @constant
 * @type {RegExp}
 */
const USER_NAME_REGEXP = /^[a-zA-Z0-9_-]{6,18}$/

/**
 * 邮政正则表达式
 * @constant
 * @type {RegExp}
 */
const POSTAL_CODE_REGEXP = /^[1-9]{1}\d{5}$/

/**
 * 身份证正则表达式
 * @constant
 * @type {RegExp}
 */
const ID_CARD_REGEXP = /^[1-9]{1}\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/

/**
 * 银行卡正则表达式
 * @constant
 * @type {RegExp}
 */
const BANK_CARD_REGEXP = /^([1-9]{1})(\d{15}|\d{18})$/

export {
  PHONE_REGEXP,
  EMAIL_REGEXP,
  NUMBER_CODE_REGEXP,
  CODE_REGEXP,
  CHINESE_REGEXP,
  POSTAL_CODE_REGEXP,
  USER_NAME_REGEXP,
  ID_CARD_REGEXP,
  BANK_CARD_REGEXP
}
