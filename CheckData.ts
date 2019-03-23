class CheckData {
  private static instance = new CheckData()
  private constructor() {
    const toString = Object.prototype.toString
    ;['Object', 'Array', 'String', 'Number', 'Date', 'Function', 'RegExp',
      'Symbol', 'Map', 'Set', 'Null', 'Undefined', 'Boolean'].forEach(item => {
      this[`is${item}`] = function (value: any): boolean {
        return toString.call(value) === `[object ${item}]`
      }
    })
    ;[
      {key: 'String', value: '""'},
      {key: 'Array',value: '[]'},
      {key: 'Object', value: '{}'}
    ].forEach(item => {
      this[`isEmpty${item.key}`] = function (value: any): boolean {
        return JSON.stringify(value) === item.value
      }
    })
  }
  static getInstance(): CheckData {
    return CheckData.instance
  }
}
