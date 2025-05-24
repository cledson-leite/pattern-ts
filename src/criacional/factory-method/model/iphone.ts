export abstract class Iphone {
  abstract getHardware(): void

  assemble(): void {
    this.getHardware()
    console.log('Assembling Iphone')
  }

  certificate(): void {
    console.log('Certifying Iphone')
  } 

  pack(): void {
    console.log('Packing Iphone')
  }
}