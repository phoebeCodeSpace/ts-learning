/**
 * 命名空间
 */

 /**
  * eg.使用命名空间的验证器
  * 把所有与验证器相关的类型都放到一个叫做Validation的命名空间里
  */
namespace Validation {
  const lettersRegexp = /^[A-Za-z]+$/;
  const numberRegexp = /^[0-9]+$/;
  interface StringValidator {
    isAcceptable(str:string) :boolean
  }
  export class LetterOnlyValidator implements StringValidator{
    isAcceptable(str:string) {
      return lettersRegexp.test(str)
    }
  }
  export class ZipCodeValidator implements StringValidator{
    isAcceptable(str:string) {
      return str.length === 5 && numberRegexp.test(str)
    }
  }
}