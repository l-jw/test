class MyEvent {
  private static events = {}
  private static instance = new MyEvent()
  private constructor() {
    
  }
  private assist(eventName) {
    return Array.isArray(MyEvent.events[eventName]) 
      ? MyEvent.events[eventName]
      : MyEvent.events[eventName] = []
  }
  on(eventName, callback) {
    let active = this.assist(eventName)
    if (typeof (callback) === 'function') {
      active.push(callback)
      return true
    }
    return false
  }
  emit(eventName, ...param) {
    let result = []
    let active = this.assist(eventName)
    if (active.length > 0) {
      active.forEach(item => {
        result.push(item.apply(this, param))
      })
    }
    return result
  }
  off(eventName, callback) {
    let active = this.assist(eventName)
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
  once(eventName, callback) {
    function cbWrap (params) {
      callback(params)
      this.off(eventName, cbWrap)
    }
    return this.on(eventName, cbWrap)
  }
  static getInstance(): MyEvent {
    return MyEvent.instance
  };
}
