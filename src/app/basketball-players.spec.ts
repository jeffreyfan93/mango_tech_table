import {BasketballPlayers} from './basketball-players';

describe('BasketballPlayers', () => {
  it('should create an instance', () => {
    expect(new BasketballPlayers()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let player = new BasketballPlayers({
      name: 'Stephen Curry',
      team: 'Golden State Warriors',
      number: 30
    });
    expect(player.name).toEqual('Stephen Curry');
    expect(player.team).toEqual('Golden State Warriors');
    expect(player.number).toEqual(30);
  })
});
