import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { gameData } from '../model/gameData';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesApiService {
	private baseUrl: string
	private games?: gameData[] | Observable<gameData[]>

  constructor(
		private http: HttpClient
	) {
		this.baseUrl = environment.GAME_API_URL
	 }

	getGames(): Observable<gameData[]> {
		this.games = this.http.get<gameData[]>(this.baseUrl + '/games')

		return this.games
	}
}
