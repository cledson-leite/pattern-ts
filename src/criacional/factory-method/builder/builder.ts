import { Foods } from "./model/foods";

export class Builder {
  public drink?: string
  public main?: string
  public side?: string
  public desser?: string
  public gift?: string

  public withDrink(drink: string): Builder {
    this.drink = drink
    return this
  }
  public withMain(main: string): Builder {
    this.main = main
    return this
  }
  public withSide(side: string): Builder {
    this.side = side
    return this
  }
  public withDesser(desser: string): Builder {
    this.desser = desser
    return this
  }
  public build(): Foods {
    return Foods.creator(this)
  }
}