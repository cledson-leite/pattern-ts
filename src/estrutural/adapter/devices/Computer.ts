import { HDMI } from "../interfaces/HDMI"

export class Computer {
  private port: HDMI
  connectingPort(screen: HDMI): void {
    console.log('Connecting port ....')
    this.port = screen
  }

  sendImageAndSound(imagem: string, sound: string): void {
    if(!this.port) {
      console.log('Conecte sua tela a porta HDMI')
    } else {
      this.port.setImage(imagem)
      this.port.setSound(sound)
    }
  }
}