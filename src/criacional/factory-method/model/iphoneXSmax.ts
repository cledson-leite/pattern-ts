import { Iphone } from "./iphone";

export class IphoneXSMax extends Iphone {
  getHardware(): void {
    console.log('Getting hardware for Iphone XS Max')
  }
}