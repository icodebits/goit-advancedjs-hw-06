/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

let union: string | number; // union type - може бути рядок або число
let literal: 'enable' | 'disable'; // literal type - може бути тільки 'enable' або 'disable'