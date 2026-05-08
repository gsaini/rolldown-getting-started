import { hello } from './hello.js';
import { add, multiply } from './math.js';

hello();

console.log(`2 + 3 = ${add(2, 3)}`);
console.log(`4 * 5 = ${multiply(4, 5)}`);
