/**
 * 策略模式
 * 策略和策略之间实现解耦，和状态模式类似，可以通过此来消除一些 if-else 语句
 */

// 策略
class OperationAdd {
  doOperation(num1, num2) {
     return num1 + num2
  }
}

class OperationSub {
  doOperation(num1, num2) {
     return num1 - num2
  }
}

class OperationMult {
  doOperation(num1, num2) {
     return num1 * num2
  }
}

// 上下文
class Context {
  constructor(strategy) {
     this.strategy = strategy
  }
  executeStrategy(num1, num2) {
     return this.strategy.doOperation(num1, num2)
  }
}

// 调用
let context = new Context(new OperationAdd())
console.log("10 + 5 = " + context.executeStrategy(10, 5))

context = new Context(new OperationSub())
console.log("10 - 5 = " + context.executeStrategy(10, 5))

context = new Context(new OperationMult())
console.log("10 * 5 = " + context.executeStrategy(10, 5))
/**
 * output:
 * 10 + 5 = 15
 * 10 - 5 = 5
 * 10 * 5 = 50
 */