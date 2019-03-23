// 数据类型检测
const checkData = (function () {
  const checkData = {}
  const toString = Object.prototype.toString
  ;['Object', 'Array', 'String', 'Number', 'Date', 'Function', 'RegExp',
    'Symbol', 'Map', 'Set', 'Null', 'Undefined', 'Boolean'].forEach(item => {
      checkData['is' + item] = function (value) {
      return toString.call(value) === '[object ' + item + ']'
    }
  })
  ;[
    {key: 'String', value: '""'},
    {key: 'Array', value: '[]'},
    {key: 'Object', value: '{}'}
  ].forEach(item => {
    checkData['isEmpty' + item.key] = function (value) {
      return JSON.stringify(value) === item.value
    }
  })
  return checkData
})()

// 随机数
function random (min = 0, max = 255) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

// 防抖
function debounce (func, wait) {
  let timeOut
  return function () {
    let args = arguments
    clearTimeout(timeOut)
    timeOut = setTimeout(() => {
      func.apply(this, args)
      timeOut = null
    }, wait)
  }
}

// 节流
function throttle (func, wait, isTrue) {
  let timeOut, previous = 0
  return function () {
    let args = arguments
    clearTimeout(timeOut)
    let now = Date.now()
    switch (true) {
      case (now - previous >= wait):
        func.apply(this, args)
        previous = Date.now()
        break
      case isTrue:
        timeOut = setTimeout(() => {
          func.apply(this, args)
          timeOut = null
        }, wait)
        break
    }
  }
}

// 自定义事件
const myEvent = (function () {
  const myEvent = {}
  let events = {}
  function assist(eventName) {
    return Array.isArray(events[eventName]) 
      ? events[eventName]
      : events[eventName] = []
  }
  myEvent.on = function (eventName, callback) {
    let active = assist(eventName)
    if (typeof (callback) === 'function') {
      active.push(callback)
      return true
    }
    return false
  }
  myEvent.emit = function (eventName, ...param) {
    let result = []
    let active = assist(eventName)
    if (active.length > 0) {
      active.forEach(item => {
        result.push(item.apply(this, param))
      })
    }
    return result
  }
  myEvent.off = function (eventName, callback) {
    let active = assist(eventName)
    if (active.length > 0) {
      if (typeof (callback) === 'function') {
        return active.some((item, index) => {
          if (item === callback) {
            active.splice(index, 1)
            return true
          }
          return false
        })
      } else {
        active.length = 0
        return true
      }
    }
    return false
  }
  myEvent.once = function (eventName, callback) {
    function cbWrap (params) {
      callback(params)
      myEvent.off(eventName, cbWrap)
    }
    return myEvent.on(eventName, cbWrap)
  }
  return myEvent
})()

// JavaScript实现AOP
Function.prototype.before = function (beforefn) {
  const _this = this
  return function () {
    beforefn.apply(this, arguments)
    return _this.apply(this, arguments)
  }
}
Function.prototype.after = function (afterfn) {
  const _this = this
  return function () {
    const res = _this.apply(this, arguments)
    afterfn.apply(this, arguments)
    return res
  }
}
