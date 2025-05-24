import { Iphone } from './iphone';
export class IphoneX extends Iphone {
  getHardware(): void {
    console.log('Getting hardware for Iphone X')
  }
}