import { Iphone } from "./model/iphone"
import { Iphone11 } from "./model/iphone11"
import { Iphone11Pro } from "./model/iphone11pro"
import { IphoneX } from "./model/iphoneX"
import { IphoneXSMax } from "./model/iphoneXSmax"

export class IphoneSimpleFactory {
  static orderingIphone(generate: string, level:string): Iphone {
    let iphone: Iphone;
   if(generate === '11'){
    if(level === 'pro'){
      iphone = new Iphone11Pro()
    } else {
      iphone = new Iphone11()
    }
  } else if(generate === 'XS'){
    if(level === "max" ){
      iphone = new IphoneXSMax()
    } else {
      iphone = new IphoneX()
    }
  } else {
    throw new Error('Iphone not found')
  }
    if(iphone){
      iphone.assemble()
      iphone.certificate()
      iphone.pack()
    }
    return iphone
  }
}