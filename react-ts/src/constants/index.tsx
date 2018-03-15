// 这里的const/type模式允许我们以容易访问和重构的方式使用TypeScript的字符串字面量类型。

// 添加感叹号
export const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM'; 
export type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;

// 减少感叹号
export const DECREMENT_ENTHUSIASM = 'DECREMENT_ENTHUSIASM';
export type DECREMENT_ENTHUSIASM = typeof DECREMENT_ENTHUSIASM;