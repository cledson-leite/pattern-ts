import { Foods } from "./criacional/factory-method/builder/model/foods"
import { IphoneSimpleFactory } from "./criacional/factory-method/Iphone-simple-factory"
import { HDMIToOldMonitorAdapter } from "./estrutural/adapter/adapters/HDMIToOldMonitorAdapter"
import { HDMIToVGAAdapter } from "./estrutural/adapter/adapters/HDMIToVGAAdapter"
import { Computer } from "./estrutural/adapter/devices/Computer"
import { OldMonitor } from "./estrutural/adapter/devices/OldMonitor"
import { TV } from "./estrutural/adapter/devices/TV"

// console.log('### Ordering IPhone XSMax ###')
// let iphone = IphoneSimpleFactory.orderingIphone('XS', 'max')
// console.log(iphone)

// console.log('\n\n### Ordering IPhone 11 ###')
// iphone = IphoneSimpleFactory.orderingIphone('11', 'standard')
// console.log(iphone)

// const menu = Foods.builder()
//   .withDrink('Coca-Cola')
//   .withMain('Hamburguer')
//   .withSide('Fries')
//   .withDesser('Ice Cream')
//   .build()

// console.log(menu)

const pc = new Computer()
console.log('------ TV -----')
const tv = new TV()
pc.connectingPort(tv)
pc.sendImageAndSound("Gatos e Cachhorros", "Miaus e Latidos")

console.log('------ Monitor -----')
const monitor = new OldMonitor()
const hdmi_vga_adapter = new HDMIToVGAAdapter(monitor)
pc.connectingPort(hdmi_vga_adapter)
pc.sendImageAndSound("Gatos e Cachhorros", "Miaus e Latidos")

console.log('------ Monitor Com Adaptador de Classe -----')
const hdmi_old_adapter = new HDMIToOldMonitorAdapter()
pc.connectingPort(hdmi_old_adapter)
pc.sendImageAndSound("Gatos e Cachhorros", "Miaus e Latidos")