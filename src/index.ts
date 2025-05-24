import { IphoneSimpleFactory } from "./criacional/factory-method/Iphone-simple-factory"

console.log('### Ordering IPhone XSMax ###')
let iphone = IphoneSimpleFactory.orderingIphone('XS', 'max')
console.log(iphone)

console.log('\n\n### Ordering IPhone 11 ###')
iphone = IphoneSimpleFactory.orderingIphone('11', 'standard')
console.log(iphone)