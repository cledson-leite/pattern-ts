import { Builder } from "../builder"

export class Foods {
  private constructor(
    private drink: string, 
    private main: string, 
    private side: string, 
    private desser: string, 
    gift: string
  ) { }

  public getDrink(): string {
    return this.drink
  }

  public getMain(): string {
    return this.main
  }

  public getSide(): string {
    return this.side
  }

  public getDesser(): string {
    return this.desser
  }

  public getGift(): string {
    return this.desser
  }

  static builder(): Builder {
    return new Builder()
  }

  static creator(builder: Builder): Foods {
    return new Foods(
      builder.drink,
      builder.main,
      builder.side,
      builder.desser,
      builder.gift
    )
  }
}