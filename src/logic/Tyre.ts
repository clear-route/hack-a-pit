export class Tyre {
  private healthLeft: number = 100;
  private newUseTimeStamp: Date = new Date();

  constructor(private type: string) {
    this.type = type;
  }

  public getType(): string {
    return this.type;
  }

  public getHealthLeft(): number {
    return this.healthLeft;
  }

  public getNewUseTimeStamp(): Date {
    return this.newUseTimeStamp;
  }

  public reduceTyreHealthBy(amount: number): void {
    this.healthLeft =
      this.healthLeft - amount >= 0 ? this.healthLeft - amount : 0;
  }
}
