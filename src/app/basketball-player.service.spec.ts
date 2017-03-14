/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BasketballPlayerService } from './basketball-player.service';
import { BasketballPlayers} from './basketball-players';

describe('BasketballPlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasketballPlayerService]
    });
  });

  it('should ...', inject([BasketballPlayerService], (service: BasketballPlayerService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllPlayers()', () => {
    it('should return an empty array by default', inject([BasketballPlayerService], (service: BasketballPlayerService) => {
      expect(service.getAllPlayers()).toEqual([]);
    }));

    it('should return all players', inject([BasketballPlayerService], (service: BasketballPlayerService) => {
      let player1 = new BasketballPlayers({name: 'Jeffrey', team: 'Fan', number: 1});
      let player2 = new BasketballPlayers({name: 'Peter', team: 'Fan', number: 2});
      service.addPlayer(player1);
      service.addPlayer(player2);
      expect(service.getAllPlayers()).toEqual([player1, player2]);
    }));
  });

  describe('#save(player)', () => {

    it('should automatically assign an incrementing id', inject([BasketballPlayerService], (service: BasketballPlayerService) => {
      let player1 = new BasketballPlayers({name: 'Jeffrey', team: 'Fan', number: 1});
      let player2 = new BasketballPlayers({name: 'Peter', team: 'Fan', number: 2});
      service.addPlayer(player1);
      service.addPlayer(player2);
      expect(service.getPlayerById(1)).toEqual(player1);
      expect(service.getPlayerById(2)).toEqual(player2);
    }));
  });

  describe('#removePlayerById(id)', () => {
    it('should remove player with the corresponding id', inject([BasketballPlayerService], (service: BasketballPlayerService) => {
      let player1 = new BasketballPlayers({name: 'Jeffrey', team: 'Fan', number: 1});
      let player2 = new BasketballPlayers({name: 'Peter', team: 'Fan', number: 2});
      service.addPlayer(player1);
      service.addPlayer(player2);
      expect(service.getAllPlayers()).toEqual([player1, player2]);
      service.removePlayerById(1);
      expect(service.getAllPlayers()).toEqual([player2]);
      service.removePlayerById(2);
      expect(service.getAllPlayers()).toEqual([]);
    });
  });

});
