import { Iphone } from "./iphone";

export class Iphone11 extends Iphone {
  getHardware(): void {
    console.log('Getting hardware for Iphone 11')
  }
}