import { Component, OnInit } from '@angular/core';
import { gameData } from 'src/app/model/gameData';
import { GamesApiService } from 'src/app/services/games-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	games: gameData[] = []

	constructor(
		private service: GamesApiService
	) {}

	ngOnInit(): void {
		this.service.getGames().subscribe({
			next: (res) => {
				this.games=res
			}
		})
	}
}
