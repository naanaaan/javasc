import {greet, add} from './1.named.mjs'
import * as named from './1.named.mjs'
//*전부 as는 구분되도록 이름
import div from './2.default.mjs'

console.log(greet, add(1, 3))
console.log(named.greet, named.add(1, 2))

console.log(div(4, 2))