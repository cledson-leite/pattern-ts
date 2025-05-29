import { HDMI } from '../interfaces/HDMI';
import { VGA } from '../interfaces/VGA';

//adaptador de obejto usando composição
export class HDMIToVGAAdapter implements HDMI {
  private vga: VGA
  constructor(vga: VGA) {
    console.log('Conectando ao adaptador HDMI/VGA....');
    this.vga = vga
  }
  setImage(image: string): void {
    this.vga.setImage(image)
  }
  setSound(sound: string): void {
    console.log(`Lamento mas não é possivel transmitir som`);
  }
}