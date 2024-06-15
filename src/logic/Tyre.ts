export class Tyre {
  constructor(type: string) {
    this.type = type;
  }

  type: string = "";
  milesLeft: number = 0;
  newUseTimeStamp: number = 0;
}
