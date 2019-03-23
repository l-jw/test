(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? module.exports = factory()
    : typeof define === 'function' && define.amd
    ? define(factory)
    : global.w = factory()
}(this, function() {
  const keys = Object.keys
  const toString = Object.prototype.toString
  const arrayPush = Array.prototype.push

  function w (val) {
    if (!(this instanceof w)) {
      return new w(val)
    }
    this._wrap = val
  }
  
  function checkData () {
    ;['Object', 'Array', 'String', 'Number', 'Date', 'Function', 'RegExp',
      'Symbol', 'Map', 'Set', 'Null', 'Undefined', 'Boolean'].forEach(item => {
      w['is' + item] = function (value) {
        return toString.call(value) === '[object ' + item + ']'
      }
    })
    ;[
      {
        key: 'String',
        value: '""'
      }, {
        key: 'Array',
        value: '[]'
      }, {
        key: 'Object',
        value: '{}'
      }
    ].forEach(item => {
      w['isEmpty' + item.key] = function (value) {
        return JSON.stringify(value) === item.value
      }
    })
  }

  w.emptyData = function (val) {
    return [void 0, "null", '""', '[]', '{}'].includes(JSON.stringify(val))
  }

  w.random = function(min = 0, max = 255) {
    return min + Math.floor(Math.random() * (max - min + 1))
  }

  w.debounce = function (func, wait) {
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

  w.throttle = function (func, wait, isTrue) {
    let timeOut, previous = 0
    return function () {
      let args = arguments
      clearTimeout(timeOut)
      let now = Date.now()
      switch (true) {
        case (now - previous >= wait):
          func.call(this, args)
          previous = Date.now()
          break
        case isTrue:
          timeOut = setTimeout(() => {
            func.call(this, args)
            timeOut = null
          }, wait)
          break
      }
    }
  }

  w.mixin = function (obj) {
    keys(obj).forEach(item => {
      obj.prototype[item] = function () {
        let args = [this._wrap]
        arrayPush.apply(args, arguments)
        return obj[item].apply(this, args)
      }
    })
  }

  checkData()
  w.mixin(w)
  return w
}))

