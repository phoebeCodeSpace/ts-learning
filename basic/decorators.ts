/**
 * 装饰器
 * 装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上。 
 * 装饰器使用 @expression这种形式，expression求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入。
 */

 /**
  * 类装饰器
  */

// 定义装饰器@sealed：
// 当@sealed被执行的时候，它将密封此类的构造函数和原型。
function sealed(constructor:Function){
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}
// 设置sealed应用在Greeter上
@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}