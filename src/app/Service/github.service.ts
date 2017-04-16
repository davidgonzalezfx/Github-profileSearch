import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class GithubService {
	private username:string
	private client_id = '3c81b3c408a005203c4f'
	private client_secret = '836330f69a16e303ca01d21d6110bfa2ec5a90c6'

	constructor(private _http: Http){
		// this.username = 'dvdgonzalez'
	}

		getUser(){
			return this._http.get(`https://api.github.com/users/${this.username}?client_id=${this.client_id}&client_secret=${this.client_secret}`).map(res => res.json())
		}
		getRepo(){
			return this._http.get(`https://api.github.com/users/${this.username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`).map(res => res.json())
		}
		
		updateUser(username:string){
			this.username = username
		}


}

