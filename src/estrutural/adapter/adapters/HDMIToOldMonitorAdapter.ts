import { OldMonitor } from '../devices/OldMonitor';
import { HDMI } from './../interfaces/HDMI';

//adaptador de classe usando herança
export class HDMIToOldMonitorAdapter extends OldMonitor implements HDMI {
  constructor() {
    super()
    console.log('Envolvendo o VGA com o adaptador HDMI ...');
  }
  setSound(sound: string): void {
    console.log(`Lamento mas não é possivel transmitir som`);
  }
}