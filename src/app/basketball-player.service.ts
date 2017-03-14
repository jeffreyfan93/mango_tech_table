import { Injectable } from '@angular/core';
import {BasketballPlayers} from './basketball-players';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BasketballPlayerService {
  lastId: number = 2;
  players: BasketballPlayers[] = [
    {id:0, name:'Jeffrey', team:'Fan', position:'Point Guard'},
    {id:1, name:'b', team:'Fan', position:'Forward'},
    {id:2, name:'a', team:'Fan', position:'Center'}
  ];

  constructor(private http: Http) { }
  private baseUrl: string = 'http://swapi.co/api';

  addPlayer(player: BasketballPlayers): BasketballPlayerService {
    if (!player.id) {
      player.id = ++this.lastId;
    }
    this.players.push(player);
    return this;
  }

  removePlayerById(id: number): BasketballPlayerService {
    this.players = this.players
      .filter(player => player.id !== id);
    return this;
  }

  getAllPlayers(searchText) {
    this.http.get(`${this.baseUrl}`)
      .map(this.extractData);

    return this.players
      .filter(player => ((player.name.includes(searchText) || player.team.includes(searchText)) || player.position.includes(searchText)));
  }

  extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  getPlayerById(id: number): BasketballPlayers {
    return this.players
      .filter(player => player.id === id)
      .pop();
  }

  sortByName(players) {
    let sortedPlayers = this.players.sort((n1, n2) => {
      if(n1.name > n2.name) {
        return 1;
      } else {
      return -1;
      }
    });

    for (let i = players.length; i--;) {
      if(players[i] !== sortedPlayers[i]) {
      return this.players;
      }
    }
    return this.players.reverse();
  }

  sortByTeam(players) {
  let sortedPlayers = this.players.sort((n1, n2) => {
    if(n1.team > n2.team) {
      return 1;
    } else {
    return -1;
    }
  });

  for (let i = players.length; i--;) {
    if(players[i] !== sortedPlayers[i]) {
    return this.players;
    }
  }
  return this.players.reverse();
  }

  sortByPosition(players) {
  let sortedPlayers = this.players.sort((n1, n2) => {
    if(n1.position > n2.position) {
      return 1;
    } else {
    return -1;
    }
  });

  for (let i = players.length; i--;) {
    if(players[i] !== sortedPlayers[i]) {
    return this.players;
    }
  }
  return this.players.reverse();
  }
}
