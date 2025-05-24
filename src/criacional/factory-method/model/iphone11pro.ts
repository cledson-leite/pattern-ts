import { Iphone } from "./iphone";

export class Iphone11Pro extends Iphone {
  getHardware(): void {
    console.log('Getting hardware for Iphone 11 Pro')
  }
}