export class Tyre {
  constructor(private type: string) {
    this.type = type;
  }

  private milesLeft: number = 0;
  private newUseTimeStamp: Date = new Date();
}

function getType(): string {
  return this.type;
}

function getMilesLeft(): string {
  return this.milesLeft;
}

function getNewUseTimeStamp(): Date {
  return this.newUseTimeStamp;
}
