/**
 * 泛型：使返回值的类型与传入参数的类型是相同的
 */

function identityString(arg: number): number {
  return arg;
}

function identityNumber(arg: string): string {
  return arg;
}

function identity<T>(arg: T): T {
  return arg;
}


const map = new Map<string, number>();
map.set('a', 123);

function sleep(ms: number): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    setTimeout(() => resolve(ms), ms);
  });
} 

// function one<T>(a: T): T {
//   return a;
// }
// let a1 = one<number>(1)
// let a2 = one(520)

// function two<T>(arr: T[]): T {
//   return arr[0]
// }
// let two2: <T>(a: T[]) => T = function (a) {
//   return a[0];
// }
// function three<T>(arr: Array<T>): T {
//   return arr[0]
// }

