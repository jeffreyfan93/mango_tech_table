export class BasketballPlayers {
  id: number;
  name: string = '';
  team: string = '';
  position: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
