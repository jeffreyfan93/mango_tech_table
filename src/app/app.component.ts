import { Component } from '@angular/core';
import {BasketballPlayers} from './basketball-players';
import {BasketballPlayerService} from './basketball-player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BasketballPlayerService]
})

export class AppComponent {

  newBasketballPlayer: BasketballPlayers = new BasketballPlayers();
  searchText = "";

  constructor(private basketballPlayerService: BasketballPlayerService) {

  }

  addPlayer() {
    this.basketballPlayerService.addPlayer(this.newBasketballPlayer);
    this.newBasketballPlayer = new BasketballPlayers();
  }

  removePlayer(player) {
    this.basketballPlayerService.removePlayerById(player.id);
  }

  get players() {
    return this.basketballPlayerService.getAllPlayers(this.searchText);
  }

  sortByName() {
    let players = this.basketballPlayerService.getAllPlayers(this.searchText);
    return this.basketballPlayerService.sortByName(players);

  }

  sortByTeam() {
  let players = this.basketballPlayerService.getAllPlayers(this.searchText);
  return this.basketballPlayerService.sortByTeam(players);
  }

  sortByPosition() {
  let players = this.basketballPlayerService.getAllPlayers(this.searchText);
  return this.basketballPlayerService.sortByPosition(players);
  }

}
