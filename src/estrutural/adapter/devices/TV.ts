import { HDMI } from "../interfaces/HDMI"

export class TV implements HDMI {
  setImage(image: string): void {
    console.log(`Este é a sua imagem: ${image}`)
  }
  setSound(sound: string): void {
    console.log(`Este é o seu som: ${sound}`)
  }
}