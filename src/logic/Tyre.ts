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
}
