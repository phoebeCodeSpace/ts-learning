/**
 * 接口
 */
/**
 *    ?      可选属性
 * readonly  只读属性：一些对象属性只能在对象刚刚创建的时候修改其值，可以在属性名前用 readonly来指定只读属性
 */

/**
 * 描述带有属性的普通对象
 */
enum Gender {
  Male = 1,
  Female = 2
}
interface Person {
  name: string,
  age: number,
  readonly gender: Gender,
  birthDay?: Date,
  [propName: string]: any
}

let zhangsan: Person = {
  name : 'zhangsan',
  age: 25,
  gender: Gender.Male,
  married : false
}



/**
 * 描述函数类型 : 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。
 */
interface SearchFunc {
  (source: string, subString: string): boolean;
}

/**
 * 可索引的类型
 */


 /**
  * 类类型
  */
// interface StringValidator {
//   (str: string): boolean
// }
// let isString: StringValidator = (str: string) => {
//   return typeof (str) === 'string'
// }
