/** 
 * 基础类型
*/

/**
 * string
 */
let userName: string = "silkshadow"

/**
 * number
 */
let birthYear: number = 1992

/**
 * boolean
 */
let married: boolean = false

/**
 * array
 */
let hobby1 : string[] = ["running","yoga","cooking"]        // 在元素类型后面接上 []，表示由此类型元素组成的一个数组
let hobby2 : Array<string> = ["running", "yoga", "cooking"]  // 使用数组泛型，Array<元素类型>

/**
 * tuple 元祖：表示一个已知元素数量和类型的数组
 */
let tuple : [number,string] = [1,'2']
tuple.push('3')       // '3' 可以赋值给(string | number)类型
// tuple.push(true)   // Error, boolean不是(string | number)类型

/**
 * enum 枚举
 */
enum Fruits {
  Apple,    
  Banana,
  Pear,
  Peach = 5
}
let fruit:string = Fruits[2]          //Pear
let banana: Fruits = Fruits.Banana    // 1
let peach: Fruits = Fruits.Peach      // 5

/**
 * any 在编程阶段还不清楚类型的变量指定一个类型
 */
let notSure:any = null
notSure = false;

let list: any[] = [1, true, "free"];
list[1] = 100;

/**
 * void 表示没有任何类型，用于函数没有返回值时
 */
function warning():void{
  alert('warning')
}

function getUserName(name:string) :string{
  return `My name is ${name}`
}

/**
 * null 和 undefined
 */
let u: undefined = undefined;
let n: null = null;

/**
 * never表示没有值的类型
 */
function error(message: string): never { 
  throw new Error(message);
}

/**
 * 类型断言
 */
let someValue: any = "this is a string";
let strLength1: number = (<string>someValue).length;    // 尖括号语法
let strLength2: number = (someValue as string).length;  // as语法（用JSX时，只有 as语法断言是被允许的。）
